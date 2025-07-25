# 1단계: 빌드
FROM alpine:3.18 as builder

RUN apk add --no-cache \
    build-base curl git zlib-dev pcre2-dev openssl-dev cmake cargo rust perl linux-headers

WORKDIR /src

# quiche 및 nginx 다운로드 & 패치 적용
RUN git clone --recursive https://github.com/cloudflare/quiche && \
    cd quiche && \
    ./utils/docker-build.sh --nginx src

# 2단계: 런타임 (경량)
FROM alpine:3.18

RUN apk add --no-cache openssl

COPY --from=builder /src/quiche/nginx-1.25.3/objs/nginx /usr/sbin/nginx

# nginx.conf를 프로젝트에서 가져다 사용
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 443/udp 443 80

CMD ["nginx", "-g", "daemon off;"]