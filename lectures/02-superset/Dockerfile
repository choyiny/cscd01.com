# The published apache/superset image deliberately ships without database
# drivers — you add the ones you need. We need Postgres, both for Superset's
# metadata database and for the `examples` analytics database.
#
# The upstream docker-compose works around this by running the container as
# root and pip-installing the driver on every boot. Baking it into an image
# instead means the demo starts in seconds and works offline.
FROM apache/superset:6.1.0

USER root
RUN if command -v uv >/dev/null 2>&1; then \
      uv pip install --no-cache-dir psycopg2-binary==2.9.10; \
    else \
      pip install --no-cache-dir psycopg2-binary==2.9.10; \
    fi && \
    python -c "import psycopg2; print('psycopg2', psycopg2.__version__)"
USER superset
