FROM nginx:latest
COPY /dist /usr/share/nginx/html/web/
COPY /nginx/default.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
