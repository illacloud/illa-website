FROM nginx:stable-alpine as runner

## copy frontend
COPY nginx.conf /etc/nginx/nginx.conf
COPY illa-website-frontend.conf /etc/nginx/conf.d/illa-website-frontend.conf
COPY ./build /opt/illa/illa-website-frontend
RUN rm /etc/nginx/conf.d/default.conf

# test nginx
RUN nginx -t

# run
EXPOSE 3000