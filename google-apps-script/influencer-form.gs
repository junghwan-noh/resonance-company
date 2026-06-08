/**
 * 인플루언서 신청 폼 → Google Sheets
 *
 * 배포 절차:
 * 1. https://script.google.com → 새 프로젝트
 * 2. 이 파일 내용을 붙여넣기
 * 3. SHEET_ID 를 실제 시트 ID로 교체
 *    (시트 URL: https://docs.google.com/spreadsheets/d/{이부분이ID}/edit)
 * 4. 시트의 첫 행에 컬럼 헤더 추가:
 *    Timestamp | Full Name | Email | Gender | Country | TikTok | Instagram |
 *    Followers | Category | Avg Views | Best Video | Message
 * 5. 저장 → 우측 상단 "배포" → "새 배포"
 * 6. 유형: "웹 앱" / 액세스: "모든 사용자" / 다음 사용자 인증: "나" 선택
 * 7. "배포" 클릭 → 권한 승인 → "웹 앱 URL" 복사
 * 8. 복사한 URL을 components/sections/CompanyStoryCTA.tsx 의
 *    SHEETS_ENDPOINT 상수에 붙여넣기
 */

const SHEET_ID = "GOOGLE_SHEET_ID";   // ← 여기 교체
const SHEET_NAME = "Creators";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" not found');

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.email || "",
      data.gender || "",
      data.country || "",
      data.tiktok || "",
      data.instagram || "",
      data.followers || "",
      data.category || "",
      data.avgViews || "",
      data.bestVideo || "",
      data.message || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청은 헬스체크용
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, name: "rsnc-influencer-form" }))
    .setMimeType(ContentService.MimeType.JSON);
}
