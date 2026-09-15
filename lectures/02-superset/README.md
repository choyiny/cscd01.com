# Lecture 02 — Apache Superset demo

A throwaway Superset instance you can bring up on a laptop and click through in
front of a class. Everything lives in Docker; nothing is installed on the host.

## Run it

```bash
docker compose up -d
```

The first run pulls ~2 GB of images and then seeds the database, so give it
5–10 minutes. Watch the seeding finish:

```bash
docker compose logs -f superset-init
```

When that container exits, open <http://localhost:8088> and log in:

| username | password |
|----------|----------|
| `admin`  | `admin`  |

Tear it down, including every volume:

```bash
docker compose down -v
```

**Do this the night before the lecture, not during it.** Pull the images and let
the example data load once; after that `up -d` is fast because the Postgres
volume is already seeded.

## What's running

| Service | Image | Job |
|---------|-------|-----|
| `db` | `postgres:16-alpine` | Two databases: `superset` (Superset's own metadata — dashboards, charts, users, permissions) and `examples` (the sample analytics data) |
| `cache` | `redis:7-alpine` | Chart and query-result caching |
| `superset-init` | `cscd01/superset:6.1.0` | Runs once: DB migrations, admin user, roles, sample data. Then exits. |
| `superset` | `cscd01/superset:6.1.0` | The Flask app behind gunicorn, on port 8088 |

`cscd01/superset` is built from the `Dockerfile` here: stock `apache/superset:6.1.0`
plus `psycopg2-binary`. The published Superset image ships **no** database
drivers — you install the ones you need. Upstream's own compose file papers over
this by running the container as `root` and pip-installing the driver on every
boot; baking it into an image is faster and works offline.

The metadata/analytics split is worth pointing at during lecture: Superset is a
Flask app that keeps its *own* state in one database and *queries* others. It
never owns the data it visualizes.

## Things to demo

- **Dashboards → "Video Game Sales"** (or any seeded dashboard) — cross-filters,
  drill-down, tabs.
- **Charts → + Chart** — pick the `cleaned_sales_data` dataset, switch viz types,
  and show that the same query drives very different renderings.
- **SQL → SQL Lab** — write SQL against `examples`, then "Save as dataset" and
  chart it. This is the seam between the SQL layer and the semantic layer.
- **Settings → Database Connections** — Superset speaks SQLAlchemy, so the list
  of supported engines is just the list of installed drivers.
- **Settings → List Roles** — `Admin` / `Alpha` / `Gamma` / `sql_lab`, and how
  row-level security attaches to a role.

## Developing Superset

Run Superset from your own checkout instead of the published image:

```bash
git clone git@github.com:<you>/superset.git ~/src/superset
cd ~/src/superset && git checkout -b my-change 6.1.0   # match the image
```

Then, back in this directory:

```bash
echo "SUPERSET_SRC=$HOME/src/superset" > .env.dev
docker compose down          # the demo stack is holding port 8088
./dev.sh up                  # first run ~5 minutes
```

Open <http://localhost:9000>. Python edits reload in about two seconds; edits
under `superset-frontend/src` rebuild and hot-reload.

```bash
./dev.sh logs -f superset-node
./dev.sh down
./dev.sh down -v             # also wipes the dev database and node_modules
```

## Files

- `docker-compose.yml` — the stack
- `Dockerfile` — Superset + the Postgres driver
- `.env` — credentials and connection settings, all demo-grade
- `superset_config.py` — mounted into the container as Superset's config module
- `init.sh` — the one-shot bootstrap (migrations, admin, roles, sample data)
- `postgres-init/` — creates the `examples` database on first boot
- `docker-compose.dev.yml` — the dev overlay: your checkout, mounted over the image's
- `dev.sh` — `docker compose` with that overlay and `.env.dev` loaded
