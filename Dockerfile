FROM node:18-alpine AS builder

WORKDIR /my-resume

COPY package.json package-lock.json ./
RUN npm ci

COPY ./my-resume .
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Root site (ghassen.io) — if used
COPY --from=builder /my-resume/dist /usr/share/nginx/html

# OrbitWays served at /orbitways
COPY ./orbit-ways-ionic/www ./orbitways

# WatcHD.tn served at /watchd-fe
COPY ./WatchHD/WATCHD.tn ./watchd-fe

# Servindor (optional)
# COPY ../../servindor_mobile_app/www ./servindor

# Nginx config
COPY ./ghassenbrg/ghassen.io/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80