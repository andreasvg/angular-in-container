FROM nginx:alpine
LABEL author="Andreas van Greunen"
COPY ./config/nginx.config /etc/nginx/conf.d/default.conf
