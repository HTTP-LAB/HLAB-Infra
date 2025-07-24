#!/bin/bash

set -e  # 중간에 오류나면 종료

cd ~/docker/static

echo "📦 Git pull 중..."
git pull origin main