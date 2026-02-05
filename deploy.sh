#!/bin/bash

# Resonance Company - 배포 스크립트
# 사용법: ./deploy.sh

echo "🚀 Resonance Company 배포 시작..."
echo ""

# 1. 빌드 테스트
echo "📦 빌드 테스트 중..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 빌드 성공!"
else
    echo "❌ 빌드 실패. 오류를 확인하세요."
    exit 1
fi

echo ""

# 2. Git 상태 확인
echo "📝 Git 상태 확인..."
git status

echo ""

# 3. 변경사항 커밋
read -p "커밋 메시지를 입력하세요: " commit_message

git add .
git commit -m "$commit_message"

echo ""

# 4. GitHub에 푸시
echo "⬆️ GitHub에 푸시 중..."
git push

if [ $? -eq 0 ]; then
    echo "✅ 푸시 성공!"
    echo ""
    echo "🎉 배포 완료!"
    echo "Vercel이 자동으로 배포를 시작합니다."
    echo "약 1-2분 후 웹사이트가 업데이트됩니다."
else
    echo "❌ 푸시 실패. Git 설정을 확인하세요."
    exit 1
fi
