# 인플루언서 신청 폼 → Google Sheets 연동 가이드

## 1. 구글 시트 준비
1. 새 시트 만들기
2. 시트 탭 이름을 `Creators` 로 변경
3. 1행에 헤더 입력:
   ```
   Timestamp | Full Name | Email | Gender | Country | TikTok | Instagram | Followers | Category | Avg Views | Best Video | Message
   ```
4. URL에서 시트 ID 복사 — `docs.google.com/spreadsheets/d/{이부분}/edit`

## 2. Apps Script 배포
1. https://script.google.com → 새 프로젝트
2. `influencer-form.gs` 파일 내용 붙여넣기
3. `SHEET_ID` 값을 위에서 복사한 ID로 교체
4. 저장 (Ctrl+S)
5. 우측 상단 **배포 > 새 배포** 클릭
6. 설정:
   - 유형: **웹 앱**
   - 액세스 권한: **모든 사용자**
   - 다음 사용자 인증: **나**
7. **배포** 클릭 → Google 계정 권한 승인
8. **웹 앱 URL** 복사

## 3. Next.js 사이트 환경변수 설정
프로젝트 루트(`resonance-company/`)에 `.env.local` 파일 만들고:
```
NEXT_PUBLIC_INFLUENCER_FORM_URL=복사한_웹앱_URL
```

Vercel 배포라면 Vercel 대시보드 > Settings > Environment Variables 에 동일하게 추가 → Redeploy.

## 4. 동작 확인
폼 제출 후 시트에 행이 추가되는지 확인.

## 트러블슈팅
- 시트에 안 들어옴 → Apps Script 편집기에서 `doPost` 직접 실행해 권한 다시 확인
- 폼은 "신청 완료"로 표시되지만 시트엔 없음 → `mode: 'no-cors'` 때문에 실패도 성공처럼 보임. Apps Script 실행 로그 확인 필요
- 시트 ID 잘못됨 → 실행 로그에 "Sheet Creators not found" 에러
