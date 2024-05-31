FROM nginx:1.25.5-alpine

RUN rm /etc/nginx/nginx.conf
# RUN rm /etc/nginx/conf.d/*

COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/nginx/default.conf /etc/nginx/templates/default.conf.template
COPY ./etc/nginx/ssl/hwanan.com-chain.pem /etc/nginx/ssl/hwanan.com-chain.pem
COPY ./etc/nginx/ssl/hwanan.com-key.pem /etc/nginx/ssl/hwanan.com-key.pem

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]