FROM nginx:1.25.5-alpine

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/*

COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]