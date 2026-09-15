#!/usr/bin/env bash
#
# docker compose, with the dev overlay and SUPERSET_SRC loaded from .env.dev.
#
#   ./dev.sh up
#   ./dev.sh logs -f superset-node
#   ./dev.sh down
set -euo pipefail
cd "$(dirname "$0")"

if [ -f .env.dev ]; then
  set -a; . ./.env.dev; set +a
fi

if [ -z "${SUPERSET_SRC:-}" ]; then
  echo "SUPERSET_SRC is not set. Point it at your Superset checkout:" >&2
  echo "  echo \"SUPERSET_SRC=\$HOME/src/superset\" > .env.dev" >&2
  exit 1
fi

if [ ! -f "$SUPERSET_SRC/superset/app.py" ]; then
  echo "SUPERSET_SRC=$SUPERSET_SRC is not a Superset checkout." >&2
  exit 1
fi

export SUPERSET_SRC
exec docker compose -f docker-compose.yml -f docker-compose.dev.yml "$@"
