FROM nginx

# add custom init script for templates processing
COPY ./entrypoint.d/ /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/*

# copy Nginx configuration files
COPY ./conf/ /etc/nginx/

# replace web content
RUN rm -rf /usr/share/nginx/html/*
COPY ./html/ /usr/share/nginx/html/
