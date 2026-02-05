# 🌐 RSNC.CO.KR 도메인 연결 가이드

## ✅ 구매 완료
- **도메인**: www.RSNC.CO.KR
- **등록 업체**: 가비아
- **계정**: no5558

---

## 🚀 연결 절차 (15분)

### Step 1: GitHub에 코드 업로드 (5분)

#### 1-1. GitHub 저장소 만들기
1. [GitHub](https://github.com) 접속 및 로그인
2. 우측 상단 **+** 버튼 → **New repository** 클릭
3. 설정:
   ```
   Repository name: resonance-company
   Description: Resonance Company Official Website
   Visibility: Public (또는 Private)
   ```
4. **Create repository** 클릭

#### 1-2. 코드 업로드

터미널을 열고 다음 명령어를 **순서대로** 실행:

```bash
# 1. 프로젝트 폴더로 이동
cd "c:\Users\MASTER\Desktop\레조넌스컴퍼니"

# 2. Git 초기화
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 커밋
git commit -m "Initial commit: Resonance Company website"

# 5. GitHub 저장소 연결 (본인의 GitHub 아이디로 변경!)
git remote add origin https://github.com/본인GitHub아이디/resonance-company.git

# 6. 기본 브랜치를 main으로 설정
git branch -M main

# 7. GitHub에 푸시
git push -u origin main
```

**⚠️ 중요**: 5번 명령어에서 `본인GitHub아이디`를 실제 GitHub 아이디로 변경하세요!

예시:
```bash
git remote add origin https://github.com/johndoe/resonance-company.git
```

---

### Step 2: Vercel 배포 (3분)

#### 2-1. Vercel 가입
1. [Vercel](https://vercel.com) 접속
2. **Sign Up** 클릭
3. **Continue with GitHub** 선택
4. GitHub 로그인 및 권한 승인

#### 2-2. 프로젝트 배포
1. Vercel 대시보드에서 **Add New...** → **Project** 클릭
2. GitHub 저장소 목록에서 **resonance-company** 찾기
3. **Import** 클릭
4. 설정 확인 (자동으로 감지됨):
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
5. **Deploy** 클릭

#### 2-3. 배포 완료 대기
- 약 2-3분 소요
- 배포 완료 시 다음과 같은 URL 생성:
  ```
  https://resonance-company-xxxx.vercel.app
  ```

#### 2-4. Vercel DNS 정보 확인
1. 프로젝트 대시보드에서 **Settings** 탭
2. 좌측 메뉴 **Domains** 클릭
3. 입력창에 **RSNC.CO.KR** 입력 (www 빼고!)
4. **Add** 클릭
5. Vercel이 제공하는 DNS 정보 확인:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**이 정보를 메모하세요!** (아래 단계에서 사용)

---

### Step 3: 가비아 DNS 설정 (5분)

#### 3-1. 가비아 로그인
1. [My가비아](https://my.gabia.com) 접속
2. 로그인:
   ```
   ID: no5558
   PW: shwjdghks11!
   ```

#### 3-2. DNS 관리 페이지 이동
1. 로그인 후 **서비스 관리** 클릭
2. **도메인** 탭 선택
3. **RSNC.CO.KR** 도메인 찾기
4. 우측 **관리** 버튼 클릭
5. **DNS 정보** → **DNS 관리** 클릭

#### 3-3. 기존 레코드 삭제 (중요!)

가비아는 기본적으로 parking 페이지 레코드가 있습니다.
**모두 삭제해야 합니다!**

다음 레코드들을 찾아서 **삭제**:
- 기존 A 레코드 (211.x.x.x 형태)
- 기존 CNAME 레코드 (parking.gabia.com 등)

각 레코드 우측의 **삭제** 버튼 클릭

#### 3-4. 새 레코드 추가

**A 레코드 추가** (루트 도메인용):
```
레코드 종류: A
호스트(서브도메인): @ (또는 빈칸)
값/위치: 76.76.21.21
TTL: 3600
```
→ **추가** 버튼 클릭

**CNAME 레코드 추가** (www용):
```
레코드 종류: CNAME
호스트(서브도메인): www
값/위치: cname.vercel-dns.com
TTL: 3600
```
→ **추가** 버튼 클릭

#### 3-5. 설정 저장
1. 모든 레코드 확인
2. **적용** 또는 **저장** 버튼 클릭
3. 확인 메시지 확인

---

### Step 4: DNS 전파 대기 (10-30분)

DNS 설정이 전 세계로 전파되는 시간이 필요합니다.

#### 예상 시간
- **최소**: 10분
- **평균**: 20-30분
- **최대**: 48시간

#### DNS 전파 확인 방법

**방법 1: 온라인 도구**
1. [DNS Checker](https://dnschecker.org) 접속
2. **RSNC.CO.KR** 입력
3. Type: **A** 선택
4. **Search** 클릭
5. 전 세계 서버에서 **76.76.21.21** 이 보이면 성공!

**방법 2: 명령어** (Windows)
```bash
nslookup RSNC.CO.KR
```

결과에 **76.76.21.21** 이 나오면 성공!

---

### Step 5: SSL 인증서 자동 발급 (자동)

DNS 전파가 완료되면 Vercel이 자동으로:
1. SSL 인증서 발급 (Let's Encrypt)
2. HTTPS 적용
3. HTTP → HTTPS 자동 리디렉션

약 5-10분 소요

---

### Step 6: 접속 확인! 🎉

다음 URL로 접속하여 확인:

```
✅ https://RSNC.CO.KR
✅ https://www.RSNC.CO.KR
✅ http://RSNC.CO.KR (자동으로 https로 리디렉션)
```

**브라우저 주소창에 자물쇠 아이콘이 보이면 완벽합니다!** 🔒

---

## ✅ 완료 체크리스트

### GitHub
- [ ] GitHub 저장소 생성
- [ ] 코드 업로드 완료
- [ ] 저장소에서 파일 확인

### Vercel
- [ ] Vercel 가입 완료
- [ ] GitHub 연동 완료
- [ ] 프로젝트 배포 완료
- [ ] 임시 URL 접속 확인 (*.vercel.app)
- [ ] 도메인 추가 완료

### 가비아
- [ ] 가비아 로그인
- [ ] DNS 관리 페이지 접속
- [ ] 기존 레코드 삭제
- [ ] A 레코드 추가 (76.76.21.21)
- [ ] CNAME 레코드 추가 (cname.vercel-dns.com)
- [ ] 설정 저장

### 최종 확인
- [ ] DNS 전파 확인
- [ ] RSNC.CO.KR 접속 가능
- [ ] www.RSNC.CO.KR 접속 가능
- [ ] HTTPS 적용 확인 (자물쇠)
- [ ] 모바일에서 확인
- [ ] 모든 섹션 정상 작동

---

## 🚨 문제 해결

### 문제 1: "도메인을 찾을 수 없음" 오류
**원인**: DNS 전파 중
**해결**: 20-30분 더 대기

### 문제 2: 가비아 광고 페이지가 나옴
**원인**: 기존 레코드 삭제 안함
**해결**: 
1. 가비아 DNS 관리로 돌아가기
2. 기존 A, CNAME 레코드 모두 삭제
3. 새 레코드만 남기기

### 문제 3: SSL 인증서 오류
**원인**: DNS 전파 미완료
**해결**:
1. DNS 전파 완료 확인
2. Vercel 대시보드 → Domains → Refresh SSL

### 문제 4: www 없이는 접속되는데 www 붙이면 안됨
**원인**: CNAME 레코드 누락
**해결**: CNAME 레코드 다시 추가

---

## 🔐 보안 설정 (중요!)

### 1. 가비아 비밀번호 변경
1. My가비아 로그인
2. **회원정보** → **비밀번호 변경**
3. 새 비밀번호 설정

### 2. 2단계 인증 설정 (추천)
1. My가비아 → **보안설정**
2. **2단계 인증** 활성화
3. 휴대폰 인증 등록

---

## 📊 현재 상태

```
✅ 도메인 구매 완료: RSNC.CO.KR
⏳ GitHub 업로드 대기
⏳ Vercel 배포 대기
⏳ DNS 설정 대기
⏳ 최종 접속 확인 대기
```

---

## 💡 다음 단계 (배포 완료 후)

1. **Google Analytics** 연동
2. **Google Search Console** 등록
3. **네이버 서치어드바이저** 등록
4. **명함 제작** (URL 포함)
5. **소셜 미디어** 프로필에 URL 추가

---

## 📞 도움이 필요하면

각 단계에서 막히시면 스크린샷 찍어서 보여주세요!
바로 도와드리겠습니다! 😊

---

**🎉 완료되면 https://RSNC.CO.KR 로 접속하세요!**
