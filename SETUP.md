# 🚀 Resonance Company 웹사이트 설치 가이드

## 1. 의존성 설치

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
npm install
```

## 2. 이미지 파일 복사

다음 이미지 파일들을 `public` 폴더에 복사하세요:

### 원본 경로:
```
C:\Users\MASTER\.cursor\projects\c-Users-MASTER-Desktop\assets\
```

### 복사할 파일:
1. `c__Users_MASTER_AppData_Roaming_Cursor_User_workspaceStorage_0bb900685b48d99f6ad3ec6c565b6187_images_image-0a4cd4e4-f3f0-44e0-8051-66733b961d61.png`
   → `public/hero-background.png`

2. `c__Users_MASTER_AppData_Roaming_Cursor_User_workspaceStorage_0bb900685b48d99f6ad3ec6c565b6187_images_image-cca5b7f9-2721-4750-93f3-d33c967d13f2.png`
   → `public/logo.png`

3. `c__Users_MASTER_AppData_Roaming_Cursor_User_workspaceStorage_0bb900685b48d99f6ad3ec6c565b6187_images_image-e30863f7-2ee1-4aca-8f03-dbf024de4dda.png`
   → `public/business-card.png`

### 수동 복사 방법:
1. Windows 탐색기에서 원본 폴더를 엽니다
2. 파일을 복사합니다
3. `public` 폴더에 붙여넣기 합니다
4. 파일 이름을 위의 이름으로 변경합니다

## 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인하세요.

## 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## ⚠️ 참고사항

- 이미지 파일이 없어도 웹사이트는 작동하지만, 시각적 요소가 누락됩니다
- 모든 애니메이션과 인터랙션은 Framer Motion으로 구현되어 있습니다
- 반응형 디자인이 적용되어 있어 모바일에서도 잘 보입니다

## 🎨 커스터마이징

### 색상 변경
`tailwind.config.js` 파일에서 네온 그린 색상을 변경할 수 있습니다.

### 콘텐츠 수정
`components/sections/` 폴더의 각 섹션 컴포넌트에서 텍스트와 내용을 수정할 수 있습니다.

### 애니메이션 조정
각 컴포넌트의 `motion` 설정을 통해 애니메이션 속도와 효과를 조정할 수 있습니다.

---

문제가 발생하면 README.md 파일을 참고하세요.
