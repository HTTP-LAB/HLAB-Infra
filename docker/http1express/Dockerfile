# express/Dockerfile
FROM node:18-alpine

# 작업 디렉터리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install --production

# 애플리케이션 코드 복사
COPY ./* ./server.js

# 앱이 리스닝할 포트
EXPOSE 4000

# 실행 커맨드
CMD ["node", "server.js"]