FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy root app files
COPY ./www /usr/share/nginx/html/root-app

# Copy Orbitways app files
COPY ../../orbit-ways-ionic/www /usr/share/nginx/html

# Copy WatcHD.tn app files
COPY ../../WatchHD/WATCHD.tn /usr/share/nginx/html/watchd-fe

# Copy servindor ionic app files
# COPY ../../servindor_mobile_app/www /usr/share/nginx/html/servindor

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
