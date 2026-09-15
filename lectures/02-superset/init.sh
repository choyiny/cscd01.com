#!/usr/bin/env bash
#
# One-shot bootstrap for the demo stack. Runs in the `superset-init` container;
# the web container waits for this to exit 0 before it starts.
#
# Safe to re-run: migrations are versioned, the admin user is only created once,
# and the example data is guarded by a marker file in the superset_home volume.
set -euo pipefail

step() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }

step "1/4 Applying database migrations"
superset db upgrade

step "2/4 Creating admin user (admin / ${ADMIN_PASSWORD})"
if superset fab list-users 2>/dev/null | grep -q "username:admin"; then
  echo "admin already exists — skipping"
else
  superset fab create-admin \
    --username admin \
    --firstname Superset \
    --lastname Admin \
    --email admin@cscd01.local \
    --password "${ADMIN_PASSWORD}"
fi

step "3/4 Initializing roles and permissions"
superset init

EXAMPLES_MARKER=/app/superset_home/.examples-loaded
if [ "${SUPERSET_LOAD_EXAMPLES:-no}" = "yes" ]; then
  if [ -f "$EXAMPLES_MARKER" ]; then
    step "4/4 Example data already loaded — skipping"
  else
    step "4/4 Loading example dashboards and datasets (this takes a few minutes)"
    superset load_examples
    touch "$EXAMPLES_MARKER"
  fi
else
  step "4/4 SUPERSET_LOAD_EXAMPLES is not 'yes' — skipping example data"
fi

printf '\n\033[1;32mReady. Superset will be at http://localhost:8088 (admin / %s)\033[0m\n' "${ADMIN_PASSWORD}"
