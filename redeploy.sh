#!/bin/bash

set -e  # 중간에 오류나면 종료

cd ~/HTTP-Version-Test/docker

echo "📦 Git pull 중..."
git pull origin main

echo "🛑 docker-compose down 중..."
docker-compose down --volumes --remove-orphans

echo "🧹 Docker 시스템 자원 정리 중..."
docker volume prune -f
docker network prune -f

echo "🚀 docker-compose up 시작..."
docker-compose up -d --build

echo "✅ 도커 컨테이너 재배포 완료되었습니다!"

echo "정적 파일을 가져옵니다."
sh ../fetch_static.sh