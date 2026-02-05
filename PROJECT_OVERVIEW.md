# 🌟 Resonance Company - 프로젝트 개요

## 📋 프로젝트 정보

- **프로젝트명**: Resonance Company Official Website
- **브랜드**: RSNC (Resonance Company)
- **산업**: 인플루언서 & 퍼포먼스 마케팅 에이전시
- **타입**: 싱글 페이지 마케팅 웹사이트
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## 🎯 브랜드 아이덴티티

### 핵심 메시지
> **"Selection over Noise. Focus creates results."**

### 브랜드 철학
- 노이즈 속에서 선택과 집중
- 정교한 메시지 전달
- 데이터 기반 성과
- 글로벌 확장 지향

### 비주얼 아이덴티티
- **색상**: 블랙 + 네온 그린 (#7CFF00)
- **스타일**: 미니멀, 에디토리얼, 시그널 기반
- **무드**: 세련되고 기술적인 느낌
- **모티프**: 파형, 신호선, 네트워크

---

## 📐 웹사이트 구조

### 6개 섹션 (스크롤 기반)

#### 01. HERO SECTION
**목적**: 브랜드 첫인상 & 핵심 메시지 전달

**구성**:
- 중앙 대형 타이틀: "WHY RESONANCE?"
- 서브 카피: "Selection over Noise. Focus creates results."
- 추상적 파형 애니메이션 배경
- 네온 그린 라인 액센트
- 마우스 인터랙션 글로우
- 스크롤 인디케이터

**기술 구현**:
- SVG 파형 애니메이션
- Canvas/Three.js 대안으로 순수 SVG 사용
- Framer Motion 기반 텍스트 애니메이션
- 마우스 추적 효과

---

#### 02. WHAT WE DO SECTION
**목적**: 서비스 소개

**구성**:
- 인트로 문장: "We align one message to the right frequency."
- 4개 서비스 카드:
  1. Influencer Content Strategy
  2. Influencer Campaign Execution
  3. Performance Tracking
  4. Platform Expansion

**인터랙션**:
- Hover 시 네온 그린 테두리
- 클릭 시 상세 정보 확장
- 스태거드 애니메이션

---

#### 03. WHY RESONANCE SECTION
**목적**: 브랜드 철학 전달

**구성**:
- 4줄 철학 텍스트:
  - "우리는 단순한 마케팅을 넘어"
  - "하나의 메시지를"
  - "정확한 소비자의 언어로"
  - "정교하게 전달합니다."

**특징**:
- 미니멀 타이포그래피
- 스크롤 시 한 줄씩 등장
- 강한 여백 활용
- 강조 텍스트 네온 그린 처리

---

#### 04. OUR PROCESS SECTION
**목적**: 워크플로우 시각화

**구성**:
- 원형 프로세스 다이어그램
- 6단계 프로세스:
  1. Brand & Product Alignment
  2. Content Strategy Design
  3. Influencer Selection & Seeding
  4. Content Release & Monitoring
  5. Performance Analysis
  6. Optimization & Scaling

**기술 구현**:
- SVG 기반 원형 다이어그램
- 자동 순환 애니메이션 (3초 간격)
- 각 단계 활성화 시 그린 라인 연결
- 진행률 표시

---

#### 05. GLOBAL FOCUS SECTION
**목적**: 글로벌 확장 비전 제시

**구성**:
- 메인 메시지: "Full-funnel global expansion"
- 글로벌 네트워크 시각화
- 4개 주요 시장:
  - Korea (Active)
  - United States (Expanding)
  - Australia (Expanding)
  - Japan (Planned)

**기술 구현**:
- SVG 기반 네트워크 다이어그램
- 노드 간 신호 펄스 애니메이션
- 시장별 상태 표시
- 연결선 애니메이션

---

#### 06. FOOTER SECTION
**목적**: 연락처 & CTA

**구성**:
- 비즈니스 카드 스타일 (2열 그리드)
  - 왼쪽: 브랜드 로고 & 태그라인
  - 오른쪽: 연락처 & 소셜 링크
- CTA 버튼:
  - "Start a Project" (Primary)
  - "View Case Studies" (Secondary)
- 소셜 미디어: Instagram, YouTube, TikTok, LinkedIn

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
Primary Background: #000000 (Black)
Accent Color: #7CFF00 (Neon Green)
Secondary Accent: #00D9FF (Cyan Blue)
Text Primary: #FFFFFF (White)
Text Secondary: #9CA3AF (Gray-400)
Text Tertiary: #6B7280 (Gray-500)
Border: #1F2937 (Gray-800)
```

### 타이포그래피
```
Display Font: Space Grotesk (Headlines)
- XL: 96px / 80px / 72px (Desktop / Tablet / Mobile)
- LG: 84px / 72px / 56px
- MD: 60px / 48px / 40px

Body Font: Inter (Body Text)
- LG: 24px / 20px / 18px
- MD: 18px / 16px / 14px
- SM: 14px / 12px / 12px
```

### 간격 시스템
```
Section Padding: 160px / 120px / 80px (Desktop / Tablet / Mobile)
Container Max Width: 1280px (7xl)
Content Max Width: 1024px (5xl)
Grid Gap: 48px / 32px / 24px
```

### 애니메이션 타이밍
```
Fast: 0.3s
Normal: 0.5s
Slow: 0.8s
Fade In: 0.8s ease-in-out
Fade Up: 0.8s ease-out
Slide In: 0.6s ease-out
```

---

## 🔧 기술 스펙

### 프론트엔드
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11.0
- **Icons**: React Icons 5.0

### 개발 도구
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier (설정 추가 가능)

### 성능 최적화
- Server Components (기본)
- Image Optimization (Next.js Image)
- Code Splitting (자동)
- CSS Purging (Tailwind)
- Font Optimization (Google Fonts)

---

## 📱 반응형 브레이크포인트

```css
Mobile: 320px - 767px (sm)
Tablet: 768px - 1023px (md)
Laptop: 1024px - 1439px (lg)
Desktop: 1440px+ (xl, 2xl)
```

### 주요 조정 사항
- **Hero Title**: 3단계 크기 조정
- **Grid Layout**: 1열 → 2열 → 3열
- **Spacing**: 비율 유지하며 축소
- **Navigation**: 햄버거 메뉴 (향후 추가)

---

## 🚀 성능 목표

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### 최적화 전략
1. 이미지 WebP 포맷 사용
2. Critical CSS 인라인
3. 폰트 사전 로드
4. 애니메이션 GPU 가속
5. Lazy Loading 컴포넌트

---

## 📦 배포 옵션

### 추천: Vercel
```bash
vercel --prod
```
- 자동 최적화
- Edge Network
- 무료 SSL
- Git 연동

### 대안: Netlify, AWS Amplify, CloudFlare Pages

---

## 🔐 SEO 최적화

### 메타데이터
```typescript
title: "Resonance Company - Influencer & Performance Marketing"
description: "Selection over Noise. Focus creates results."
keywords: ["influencer marketing", "performance marketing", "resonance", "RSNC"]
og:image: "/og-image.png"
```

### 구조화된 데이터
- Organization Schema
- Service Schema
- Local Business Schema

---

## 📊 향후 개발 로드맵

### Phase 1: 기본 완성 ✅
- [x] 6개 섹션 구현
- [x] 반응형 디자인
- [x] 애니메이션 효과
- [x] 기본 SEO

### Phase 2: 기능 확장
- [ ] 케이스 스터디 페이지
- [ ] 블로그 섹션
- [ ] 팀 소개 페이지
- [ ] 다국어 지원 (EN/KR)

### Phase 3: 인터랙션
- [ ] 3D 배경 효과 (Three.js)
- [ ] 커스텀 커서
- [ ] 페이지 전환 효과
- [ ] 스크롤 진행률 표시

### Phase 4: 통합
- [ ] CMS 연동 (Sanity/Contentful)
- [ ] 문의 폼 백엔드
- [ ] 뉴스레터 구독
- [ ] Analytics 통합

---

## 🎯 핵심 차별화 요소

### 디자인
✨ 미니멀하면서도 임팩트 있는 비주얼
✨ 네온 그린 액센트의 효과적 사용
✨ 파형/신호 모티프로 브랜드 컨셉 시각화

### 사용자 경험
🎬 부드러운 스크롤 애니메이션
🎬 인터랙티브한 카드 인터페이스
🎬 직관적인 정보 전달

### 기술
⚡ Next.js 14 최신 기능 활용
⚡ TypeScript로 타입 안정성
⚡ Framer Motion 고급 애니메이션

---

## 📞 연락처

**Project Owner**: Resonance Company  
**Email**: contact@resonance.com  
**Website**: resonance.com

---

## 📄 라이선스

© 2026 Resonance Company. All rights reserved.

---

**Selection and Concentration**
