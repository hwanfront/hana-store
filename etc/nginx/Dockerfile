FROM nginx:1.25.5-alpine

ARG SSL_CERTIFICATE_CHAIN
ARG SSL_CERTIFICATE_KEY

RUN rm /etc/nginx/nginx.conf
# RUN rm /etc/nginx/conf.d/*

COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/nginx/default.conf /etc/nginx/templates/default.conf.template
COPY ./etc/nginx/ssl/${SSL_CERTIFICATE_CHAIN} /etc/nginx/ssl/${SSL_CERTIFICATE_CHAIN}
COPY ./etc/nginx/ssl/${SSL_CERTIFICATE_KEY} /etc/nginx/ssl/${SSL_CERTIFICATE_KEY}

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]