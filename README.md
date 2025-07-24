# HTTP-Version-Test
HTTP 버전 별 차이점을 비교해보는 레포지토리

## 사용법
1. git clone https://github.com/HTTP-LAB/HTTP-Version-Test.git
2. cd docker
3. Docker 설치
4. Docker-Compose 설치
5. `sudo docker-compose -f docker-compose.yml up --buld -d` 실행

## URL
### HTTP/1.1
- https://www.httplab.shop:10443/default-template
- https://www.httplab.shop:10443/optimization-http1
### HTTP/2/0
- https://www.httplab.shop:20443/default-template
- https://www.httplab.shop:20443/optimization-http2
### HTTP/3.0
- https://www.httplab.shop:30443/default-template (현재 3.0 버전 미적용)
- https://www.httplab.shop:30443/optimization-http2
