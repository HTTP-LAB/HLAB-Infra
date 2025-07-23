FROM nginx:stable-alpine

# 로컬에서 생성한 SSL 키와 인증서 복사
COPY /etc/letsencrypt/live/be.httplab.shop/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY /etc/letsencrypt/live/be.httplab.shop/privkey.pem /etc/nginx/ssl/privkey.pem

# 정적 리소스 복사 (index.html / script.js / images)
COPY ./static/ /var/www/html/

# NGINX 기본 설정
COPY ./nginx.conf /etc/nginx/nginx.conf