# HTTP-Version-Test
HTTP 버전 별 차이점을 비교해보는 레포지토리



# 사용법
1. git clone https://github.com/HTTP-LAB/HTTP-Version-Test.git
2. cd docker
4. SSL 인증서 설치
5. Docker-Compose 파일에 명시된 경로로 인증서 파일 이동
6. Docker 설치
7. Docker-Compose 설치
8. `sudo docker-compose -f docker-compose.yml up --buld -d` 실행



# URL
## HTTP/1.1
- 기본 페이지 : https://www.httplab.shop:10443/default-template/index.html
- 최적회된 페이지 : https://www.httplab.shop:10443/optimization-http1/index.html
## HTTP/2/0
- 기본 페이지 : https://www.httplab.shop:20443/default-template/index.html
- 최적화된 페이지 : https://www.httplab.shop:20443/optimization-http2/index.html
## HTTP/3.0
- 기본 페이지 : https://www.httplab.shop:30443/default-template/index.html
- 최적화된 페이지 : https://www.httplab.shop:30443/optimization-http2/index.html

# 사용한 도구
- Docker
- Docker-Compose
- Nginx

## 도커 이미지
- macbre/nginx-http3
  - http3 가 적용된 nginx 도커 이미지

## nginx.conf
```shell
server {
        server_name www.httplab.shop;

        # http/3
        listen 443 quic reuseport;

        # http/2 and http/1.1
        listen 443 ssl;
        http2 on;

        ssl_certificate /etc/nginx/certs/fullchain.pem;
        ssl_certificate_key /etc/nginx/certs/privkey.pem;

        ssl_protocols TLSv1.2 TLSv1.3;

        # 0-RTT QUIC connection resumption
        ssl_early_data on;

        # Add Alt-Svc header to negotiate HTTP/3.
        add_header alt-svc 'h3=":30443"; ma=86400';

        # Sent when QUIC was used
        add_header QUIC-Status $http3;

        root /var/www/html;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }

```

# 아키텍처
<img width="1054" height="629" alt="image" src="https://github.com/user-attachments/assets/e9543317-d59f-400c-9a31-dff20793df37" />


