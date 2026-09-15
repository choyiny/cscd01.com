#!/bin/sh
# Postgres runs this once, on first boot of an empty data volume.
# Superset's metadata lives in `superset`; the sample analytics data lives here.
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE DATABASE examples OWNER $POSTGRES_USER;
EOSQL
