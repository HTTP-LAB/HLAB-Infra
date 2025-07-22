FROM nginx:stable-alpine

# 2. 필요한 패키지 설치 (openssl)
RUN apk add --no-cache openssl

# SSL 인증서 생성
RUN mkdir -p /etc/nginx/ssl && \
    openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/self.key \
    -out /etc/nginx/ssl/self.crt \
    -subj "/C=KR/ST=Seoul/L=Seoul/O=Test/OU=Dev/CN=localhost"


# 정적 리소스 복사 (index.html / script.js / images)
COPY ./static/ /var/www/html/

# NGINX 기본 설정
COPY ./nginx_http2.conf /etc/nginx/nginx.conf