FROM nginx:stable-alpine

# 로컬에서 생성한 SSL 키와 인증서 복사
COPY ./ssl/self.key /etc/nginx/ssl/self.key
COPY ./ssl/self.crt /etc/nginx/ssl/self.crt

# 정적 리소스 복사 (index.html / script.js / images)
COPY ./static/ /var/www/html/

# NGINX 기본 설정
COPY ./nginx.conf /etc/nginx/nginx.conf