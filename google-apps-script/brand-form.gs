/**
 * 브랜드 문의(콘텐츠 구조 진단 신청) 폼 → Google Sheets (별도 시트)
 *
 * 배포 절차:
 * 1. https://script.google.com → 새 프로젝트 (인플루언서 폼과 별도)
 * 2. 이 파일 내용 붙여넣기
 * 3. SHEET_ID 를 실제 시트 ID로 교체
 * 4. 시트의 첫 행에 컬럼 헤더 추가:
 *    Timestamp | Brand | Product | Target Market | Category | Age | Email
 * 5. 저장 → 우측 상단 "배포" > "새 배포"
 * 6. 유형: "웹 앱" / 액세스: "모든 사용자" / 다음 사용자 인증: "나"
 * 7. "배포" → 권한 승인 → 웹 앱 URL 복사
 * 8. Vercel 환경변수에 NEXT_PUBLIC_BRAND_FORM_URL 로 등록
 */

const SHEET_ID = "GOOGLE_SHEET_ID";   // ← 여기 교체 (브랜드용 시트 ID)
const SHEET_NAME = "Brands";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" not found');

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.brand || "",
      data.productType || "",
      data.targetMarket || "",
      data.category || "",
      data.age || "",
      data.email || ""
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

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, name: "rsnc-brand-form" }))
    .setMimeType(ContentService.MimeType.JSON);
}
