FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Root site (ghassen.io) — if used
COPY ./www ./root-app

# OrbitWays served at /orbitways
COPY ../../orbit-ways-ionic/www ./orbitways

# WatcHD.tn served at /watchd-fe
COPY ../../WatchHD/WATCHD.tn ./watchd-fe

# Servindor (optional)
# COPY ../../servindor_mobile_app/www ./servindor

# Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
