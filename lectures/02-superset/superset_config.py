"""Superset configuration for the CSCD01 lecture demo.

Mounted into the container at /app/pythonpath/superset_config.py and pointed at
by SUPERSET_CONFIG_PATH. Every value comes from .env so the compose file stays
the single place you change things.

This is a *demo* config: no Celery worker, no HTTPS, no real secret. See
https://superset.apache.org/docs/configuration/configuring-superset for the
knobs that matter in production.
"""

import logging
import os

from flask_caching.backends.filesystemcache import FileSystemCache

# --- Metadata database -----------------------------------------------------
# Superset's own tables: dashboards, charts, datasets, users, permissions.
SQLALCHEMY_DATABASE_URI = (
    f"{os.environ['DATABASE_DIALECT']}://"
    f"{os.environ['DATABASE_USER']}:{os.environ['DATABASE_PASSWORD']}@"
    f"{os.environ['DATABASE_HOST']}:{os.environ['DATABASE_PORT']}/"
    f"{os.environ['DATABASE_DB']}"
)

# --- Examples database -----------------------------------------------------
# Where `superset load_examples` puts the sample analytics tables. Deliberately
# a different database from the one above: Superset's metadata and the data it
# queries are separate concerns.
SQLALCHEMY_EXAMPLES_URI = (
    f"{os.environ['DATABASE_DIALECT']}://"
    f"{os.environ['EXAMPLES_USER']}:{os.environ['EXAMPLES_PASSWORD']}@"
    f"{os.environ['EXAMPLES_HOST']}:{os.environ['EXAMPLES_PORT']}/"
    f"{os.environ['EXAMPLES_DB']}"
)

SECRET_KEY = os.environ["SUPERSET_SECRET_KEY"]

# --- Caching ---------------------------------------------------------------
REDIS_HOST = os.getenv("REDIS_HOST", "cache")
REDIS_PORT = os.getenv("REDIS_PORT", "6379")

CACHE_CONFIG = {
    "CACHE_TYPE": "RedisCache",
    "CACHE_DEFAULT_TIMEOUT": 300,
    "CACHE_KEY_PREFIX": "superset_",
    "CACHE_REDIS_HOST": REDIS_HOST,
    "CACHE_REDIS_PORT": REDIS_PORT,
    "CACHE_REDIS_DB": 1,
}
DATA_CACHE_CONFIG = CACHE_CONFIG
FILTER_STATE_CACHE_CONFIG = {**CACHE_CONFIG, "CACHE_KEY_PREFIX": "superset_filter_"}
EXPLORE_FORM_DATA_CACHE_CONFIG = {**CACHE_CONFIG, "CACHE_KEY_PREFIX": "superset_form_"}

# SQL Lab results land on disk in the superset_home volume rather than in Redis,
# because result sets get large fast.
RESULTS_BACKEND = FileSystemCache("/app/superset_home/sqllab")

# --- Behaviour -------------------------------------------------------------
# Alerts & reports need a Celery worker + beat, which this stack doesn't run.
FEATURE_FLAGS = {
    "ALERT_REPORTS": False,
    "DASHBOARD_RBAC": True,
    "EMBEDDED_SUPERSET": True,
}

SQLLAB_CTAS_NO_LIMIT = True
ROW_LIMIT = 5000

# Plain HTTP on localhost, so drop the security headers that assume HTTPS.
TALISMAN_ENABLED = False
WTF_CSRF_ENABLED = True
# The health endpoint the compose healthcheck hits.
WTF_CSRF_EXEMPT_LIST = ["superset.views.core.log"]

LOG_LEVEL = getattr(
    logging, os.getenv("SUPERSET_LOG_LEVEL", "INFO").upper(), logging.INFO
)
