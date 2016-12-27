FROM nginx:alpine

RUN apk update \
    apk upgrade

ENV tredo_app /var/www/tredo_fe
RUN mkdir -p $tredo_app
WORKDIR $tredo_app

COPY ./nginx/nginx.prod.conf /etc/nginx/nginx.conf
COPY ./build/ .

CMD nginx
EXPOSE 80