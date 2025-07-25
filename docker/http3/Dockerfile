# https://nginx.org/en/linux_packages.html#Alpine
# Use an official Alpine base image
FROM alpine:latest

# Install prerequisites
RUN apk add --no-cache \
    openssl \
    curl \
    ca-certificates

# Set up the APK repository for stable or mainline nginx packages
# Uncomment the appropriate lines for stable or mainline versions

# Stable version
RUN printf "%s%s%s%s\n" \
    "@nginx " \
    "http://nginx.org/packages/alpine/v" \
    `egrep -o '^[0-9]+\.[0-9]+' /etc/alpine-release` \
    "/main" \
    | tee -a /etc/apk/repositories

# RUN printf "%s%s%s%s\n" \
#     "@nginx " \
#     "http://nginx.org/packages/mainline/alpine/v" \
#     $(grep -o '^[0-9]+\.[0-9]+' /etc/alpine-release) \
#     "/main" \
#     | tee -a /etc/apk/repositories

# Import and verify the NGINX signing key
RUN curl -o /tmp/nginx_signing.rsa.pub https://nginx.org/keys/nginx_signing.rsa.pub && \
    openssl rsa -pubin -in /tmp/nginx_signing.rsa.pub -text -noout && \
    mv /tmp/nginx_signing.rsa.pub /etc/apk/keys/

# Install NGINX from the specified repository
RUN apk add --no-cache nginx@nginx
RUN apk add nginx-module-image-filter@nginx nginx-module-njs@nginx

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

# Copy custom configuration files
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]