cd "${0%/*}"
# Download the database backup from git repository,
# just to safeguard against deleted RSS feeds or older blogs
wget 'https://github.com/IIIT-Delhi/byld-website/raw/db/planet.db' -O ../site/planet.db || true
