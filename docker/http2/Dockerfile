FROM nginx:stable-alpine

# 정적 리소스 복사 (index.html / script.js / images)
COPY ./static/ /var/www/html/

# NGINX 기본 설정
COPY ./nginx.conf /etc/nginx/nginx.conf