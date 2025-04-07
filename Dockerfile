# ====== Build ghassen.io ======
FROM node:18-alpine AS resume-builder

WORKDIR /my-resume

COPY ./my-resume/package.json ./my-resume/package-lock.json ./
RUN npm ci

COPY ./my-resume .
RUN npm run build


# ====== Build orbit-ways-ionic ======
FROM node:18-alpine AS orbitways-builder

WORKDIR /orbit-ways-ionic

COPY ./orbit-ways-ionic/package.json ./orbit-ways-ionic/package-lock.json ./
RUN npm ci

COPY ./orbit-ways-ionic .
RUN npm run build


# ====== Nginx Serve ======
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Root site (ghassen.io)
COPY --from=resume-builder /my-resume/dist /usr/share/nginx/html

# OrbitWays served at /orbitways
COPY --from=orbitways-builder /orbit-ways-ionic/www ./orbitways

# WatcHD.tn served at /watchd-fe
COPY ./WatchHD/WATCHD.tn ./watchd-fe

# Servindor (optional)
# COPY ../../servindor_mobile_app/www ./servindor

# Nginx config
COPY ./ghassenbrg/ghassen.io/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
