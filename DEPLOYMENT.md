# 🌐 Resonance Company - 도메인 연결 및 배포 가이드

## 📋 목차
1. [Vercel 배포 (추천)](#vercel-배포-추천)
2. [도메인 구매](#도메인-구매)
3. [도메인 연결](#도메인-연결)
4. [SSL 인증서](#ssl-인증서)
5. [배포 확인](#배포-확인)

---

## 🚀 Vercel 배포 (추천)

### 준비물
- ✅ GitHub/GitLab/Bitbucket 계정 (무료)
- ✅ Vercel 계정 (무료)
- ✅ 완성된 웹사이트 코드

### Step 1: GitHub에 코드 업로드

#### 1-1. GitHub 저장소 만들기
1. [GitHub](https://github.com) 접속
2. 우측 상단 **+** → **New repository**
3. Repository 이름: `resonance-company`
4. **Private** 또는 **Public** 선택
5. **Create repository** 클릭

#### 1-2. 로컬 코드 GitHub에 올리기

터미널에서 다음 명령어 실행:

```bash
# 프로젝트 폴더로 이동
cd "c:\Users\MASTER\Desktop\레조넌스컴퍼니"

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Resonance Company website"

# GitHub 저장소 연결 (본인의 저장소 URL로 변경)
git remote add origin https://github.com/본인아이디/resonance-company.git

# GitHub에 푸시
git branch -M main
git push -u origin main
```

---

### Step 2: Vercel 배포

#### 2-1. Vercel 가입 및 연결
1. [Vercel](https://vercel.com) 접속
2. **Sign Up** → **Continue with GitHub** (GitHub 계정으로 로그인)
3. 권한 승인

#### 2-2. 프로젝트 배포
1. Vercel 대시보드에서 **Add New...** → **Project** 클릭
2. GitHub 저장소 목록에서 `resonance-company` 선택
3. **Import** 클릭
4. 설정 확인:
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   ```
5. **Deploy** 클릭

⏱️ 약 2-3분 후 배포 완료!

#### 2-3. 배포 완료
배포가 완료되면 다음과 같은 URL이 생성됩니다:
```
https://resonance-company-xxxx.vercel.app
```

이 URL로 접속하면 웹사이트를 바로 확인할 수 있습니다! 🎉

---

## 🏷️ 도메인 구매

### 추천 도메인 등록 업체

#### 한국
1. **가비아** (www.gabia.com)
   - 가격: 연 15,000원~
   - 장점: 한국어 지원, 국내 결제

2. **호스팅케이알** (www.hosting.kr)
   - 가격: 연 12,000원~
   - 장점: 저렴함

3. **후이즈** (www.whois.co.kr)
   - 가격: 연 13,000원~

#### 글로벌
1. **Namecheap** (www.namecheap.com)
   - 가격: $8.88/년~
   - 장점: 저렴하고 안정적

2. **Google Domains** (domains.google)
   - 가격: $12/년~
   - 장점: 구글 통합

### 도메인 선택 팁

#### 추천 도메인 예시
```
resonance.co.kr    (한국 기업용)
resonance.com      (글로벌)
resonance.kr       (한국)
rsnc.co.kr         (약자)
resonance.io       (스타트업 느낌)
resonance.agency   (에이전시)
```

#### 도메인 구매 절차
1. 원하는 도메인 검색
2. 사용 가능한지 확인
3. 장바구니 담기
4. 결제 (신용카드/계좌이체)
5. 도메인 소유권 획득 ✅

---

## 🔗 도메인 연결 (Vercel)

### Step 1: Vercel에서 도메인 추가

1. Vercel 프로젝트 대시보드 접속
2. **Settings** 탭 클릭
3. 좌측 메뉴에서 **Domains** 클릭
4. **Add Domain** 입력창에 구매한 도메인 입력
   ```
   예: resonance.com
   ```
5. **Add** 클릭

### Step 2: DNS 설정

Vercel이 다음과 같은 정보를 제공합니다:

#### A Record (추천)
```
Type: A
Name: @
Value: 76.76.21.21
```

#### CNAME Record (대안)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: 도메인 등록 업체에서 DNS 설정

#### 가비아 예시
1. 가비아 로그인
2. **My가비아** → **도메인 관리**
3. 구매한 도메인 선택
4. **DNS 정보** → **DNS 관리**
5. 레코드 추가:

```
타입: A
호스트: @
값: 76.76.21.21
TTL: 3600

타입: CNAME
호스트: www
값: cname.vercel-dns.com
TTL: 3600
```

6. **저장** 클릭

#### Namecheap 예시
1. Namecheap 로그인
2. **Domain List** → 도메인 선택
3. **Advanced DNS** 탭
4. **Add New Record**:

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. **Save All Changes**

### Step 4: DNS 전파 대기

⏱️ **소요 시간**: 5분 ~ 48시간
- 보통 **10-30분** 내 완료
- 최대 48시간까지 걸릴 수 있음

#### DNS 전파 확인
1. [DNS Checker](https://dnschecker.org) 접속
2. 도메인 입력
3. 전 세계 DNS 전파 상태 확인

---

## 🔒 SSL 인증서 (자동)

Vercel은 도메인 연결 시 **자동으로 SSL 인증서**를 발급합니다!

### 확인 방법
1. 도메인 연결 후 5-10분 대기
2. `https://yourdomain.com` 접속
3. 브라우저 주소창에 **자물쇠 아이콘** 확인 ✅

### SSL 인증서 특징
- ✅ **무료** (Let's Encrypt)
- ✅ **자동 갱신** (90일마다)
- ✅ **A+ 등급** 보안
- ✅ **모든 도메인** 지원

---

## ✅ 배포 확인 체크리스트

### 기본 확인
- [ ] 웹사이트가 정상적으로 로드됨
- [ ] 모든 섹션이 제대로 표시됨
- [ ] 애니메이션이 작동함
- [ ] 모바일에서도 잘 보임

### 도메인 확인
- [ ] http://yourdomain.com 접속 가능
- [ ] https://yourdomain.com 접속 가능 (SSL)
- [ ] www.yourdomain.com 접속 가능
- [ ] 자물쇠 아이콘 표시됨

### 성능 확인
- [ ] 로딩 속도 빠름 (< 3초)
- [ ] 이미지가 잘 로드됨
- [ ] 폰트가 제대로 적용됨

### SEO 확인
- [ ] 페이지 타이틀 표시됨
- [ ] 메타 설명 확인
- [ ] Open Graph 이미지 확인
- [ ] Google Search Console 등록

---

## 🔄 자동 배포 설정

### Git Push로 자동 배포

Vercel은 GitHub와 연동되어 있어서:

```bash
# 코드 수정 후
git add .
git commit -m "Update content"
git push
```

**→ 자동으로 Vercel이 배포합니다!** 🚀

약 1-2분 후 실시간 반영됩니다.

---

## 🌍 배포 후 추가 설정

### 1. Google Analytics 연동

`app/layout.tsx`에 추가:

```typescript
// Google Analytics
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 2. Google Search Console 등록

1. [Google Search Console](https://search.google.com/search-console) 접속
2. **속성 추가** → 도메인 입력
3. 소유권 확인 (DNS 또는 HTML 파일)
4. 사이트맵 제출: `https://yourdomain.com/sitemap.xml`

### 3. Naver Search Advisor

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 사이트 등록
3. 소유권 확인
4. 사이트맵 제출

---

## 🚨 문제 해결

### 문제 1: 도메인이 연결되지 않아요
**해결**:
- DNS 설정 재확인
- 24-48시간 대기
- DNS 캐시 삭제: `ipconfig /flushdns` (Windows)

### 문제 2: SSL 인증서가 적용되지 않아요
**해결**:
- 도메인 연결 후 10분 대기
- Vercel 대시보드에서 SSL 재발급
- DNS 전파 완료 확인

### 문제 3: 웹사이트가 느려요
**해결**:
- 이미지 최적화 (WebP 포맷)
- 이미지 크기 축소
- Vercel Edge Network 활용

### 문제 4: 빌드가 실패해요
**해결**:
- `npm run build` 로컬에서 테스트
- 오류 메시지 확인
- `node_modules` 삭제 후 재설치

---

## 💰 비용 정리

### Vercel (무료)
- ✅ 웹사이트 호스팅: **무료**
- ✅ SSL 인증서: **무료**
- ✅ CDN: **무료**
- ✅ 자동 배포: **무료**
- ✅ 월 100GB 대역폭: **무료**

### 도메인 (유료)
- 💵 .com 도메인: **$12/년** (약 15,000원)
- 💵 .co.kr 도메인: **15,000원/년**
- 💵 .kr 도메인: **13,000원/년**

### 총 비용
**연간 약 15,000원** (도메인만)
→ 웹사이트 호스팅은 무료!

---

## 📞 도움이 필요하시면

배포 과정에서 문제가 생기면:
1. Vercel 로그 확인
2. GitHub Actions 확인
3. 브라우저 콘솔 확인
4. DNS 전파 상태 확인

---

## ✅ 완료 체크리스트

배포 완료를 위한 최종 체크리스트:

- [ ] GitHub에 코드 업로드
- [ ] Vercel에 프로젝트 연결
- [ ] 기본 도메인으로 접속 확인
- [ ] 커스텀 도메인 구매
- [ ] DNS 설정 완료
- [ ] SSL 인증서 적용 확인
- [ ] Google Analytics 연동
- [ ] Google Search Console 등록
- [ ] 성능 테스트 통과
- [ ] 모바일 확인 완료

---

**🎉 축하합니다! 웹사이트가 전 세계에 공개되었습니다!**

`https://yourdomain.com` 으로 접속하여 확인하세요!
