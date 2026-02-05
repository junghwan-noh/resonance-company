# 🎉 Resonance Company 웹사이트 시작하기

## ✅ 프로젝트 완성!

Resonance Company의 고급 마케팅 에이전시 웹사이트가 완성되었습니다!

---

## 🚀 빠른 시작 (3단계)

### 1단계: 터미널 열기
프로젝트 폴더에서 터미널(PowerShell 또는 CMD)을 엽니다:

```bash
cd "c:\Users\MASTER\Desktop\레조넌스컴퍼니"
```

### 2단계: 의존성 설치
```bash
npm install
```

⏱️ 약 2-3분 소요됩니다. 완료될 때까지 기다려주세요.

### 3단계: 개발 서버 실행
```bash
npm run dev
```

✨ 완료! 브라우저에서 **http://localhost:3000** 을 열어보세요!

---

## 📦 프로젝트 구조

```
레조넌스컴퍼니/
├── app/                    # Next.js App Router
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
│
├── components/
│   ├── sections/          # 페이지 섹션들
│   │   ├── HeroSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   ├── WhyResonanceSection.tsx
│   │   ├── OurProcessSection.tsx
│   │   ├── GlobalFocusSection.tsx
│   │   └── FooterSection.tsx
│   │
│   └── ui/                # 재사용 가능한 UI 컴포넌트
│       ├── WaveformBackground.tsx
│       ├── ScrollIndicator.tsx
│       ├── ServiceCard.tsx
│       ├── ProcessDiagram.tsx
│       └── GlobalNetwork.tsx
│
├── public/                # 정적 파일
├── package.json           # 프로젝트 설정
├── tailwind.config.js     # Tailwind 설정
└── tsconfig.json          # TypeScript 설정
```

---

## 🎨 주요 기능

### ✨ 섹션별 기능

1. **Hero Section**
   - "WHY RESONANCE?" 대형 타이틀
   - 추상적 파형 애니메이션 배경
   - 마우스 인터랙션 글로우 효과
   - 부드러운 스크롤 인디케이터

2. **What We Do Section**
   - 4개의 인터랙티브 서비스 카드
   - Hover 시 네온 그린 테두리
   - 확장 가능한 상세 정보

3. **Why Resonance Section**
   - 철학 텍스트 스태거드 애니메이션
   - 미니멀한 디자인
   - 스크롤 트리거 효과

4. **Our Process Section**
   - 원형 프로세스 다이어그램
   - 6단계 자동 순환 애니메이션
   - 각 단계별 상세 설명

5. **Global Focus Section**
   - 글로벌 네트워크 시각화
   - 시장별 상태 표시 (Active, Expanding, Planned)
   - 펄스 애니메이션 효과

6. **Footer Section**
   - 비즈니스 카드 스타일
   - 소셜 미디어 링크
   - CTA 버튼

---

## 🎨 디자인 특징

### 색상
- **배경**: 블랙 (#000000)
- **액센트**: 네온 그린 (#7CFF00)
- **보조**: 사이안 블루 (#00D9FF)

### 폰트
- **헤드라인**: Space Grotesk (Bold)
- **본문**: Inter (Regular)

### 애니메이션
- **Framer Motion** 기반
- 스크롤 트리거
- Hover 인터랙션
- 자동 순환 효과

---

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.js` 파일을 열고 네온 그린 색상을 변경하세요:

```js
colors: {
  neon: {
    green: '#7CFF00', // 원하는 색상으로 변경
  },
}
```

### 텍스트 수정
각 섹션의 텍스트는 `components/sections/` 폴더의 파일에서 수정할 수 있습니다.

### 서비스 카드 수정
`components/sections/WhatWeDoSection.tsx` 파일의 `services` 배열을 수정하세요.

---

## 📱 반응형 디자인

이 웹사이트는 완전한 반응형으로 제작되었습니다:

- ✅ 데스크톱 (1920px+)
- ✅ 노트북 (1366px - 1920px)
- ✅ 태블릿 (768px - 1366px)
- ✅ 모바일 (320px - 768px)

---

## 🚀 프로덕션 배포

### 빌드 생성
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm start
```

### Vercel에 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

---

## ⚡ 성능 최적화

- **Next.js 14** App Router
- **이미지 최적화** (Next.js Image)
- **코드 분할** (자동)
- **Lazy Loading** (컴포넌트)
- **CSS 최적화** (Tailwind CSS)

---

## 🐛 문제 해결

### npm install 실패
```bash
# 캐시 삭제 후 재시도
npm cache clean --force
npm install
```

### 포트 충돌 (3000번 포트 사용 중)
```bash
# 다른 포트로 실행
npm run dev -- -p 3001
```

### TypeScript 오류
```bash
# TypeScript 재컴파일
npm run build
```

---

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Framer Motion 문서](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 다음 단계

1. ✅ 이미지 파일 추가 (SETUP.md 참고)
2. ✅ 환경 변수 설정 (.env.local)
3. ✅ 소셜 미디어 링크 업데이트
4. ✅ 연락처 정보 수정
5. ✅ Google Analytics 추가 (선택사항)

---

## 🎉 축하합니다!

Resonance Company의 웹사이트가 완성되었습니다!
이제 **`npm run dev`** 명령어로 개발 서버를 실행하고 확인해보세요!

**Selection over Noise. Focus creates results.**
