# 원티드 프리온보딩 인턴십 프론트엔드 - 2주차 과제

원티드 프리온보딩 인턴십 프론트엔드에서 2주차 과제로 진행한 **GITHUB ISSUE**프로젝트 입니다 :)

## 개발 기간

2023.08.29 ~2023.09.01

## 개발 환경

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=flat-square&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/zustand-black?style=flat-square&logo=zustand&logoColor=white">

## 프로젝트 실행 방법

로컬에서 실행하고 싶으시다면 아래의 과정을 따라주시고,
바로 페이지를 구경하고 싶다면 [여기](https://wanted-pre-onboarding-frontend-2-five.vercel.app/)를 클릭해 주세요 ~!

1. clone 하기

   ```
   git clone https://github.com/wisdomin121/wanted-pre-onboarding-frontend-2.git
   ```

2. npm 다운받기

   ```
   npm install
   ```

3. .env 파일 생성하기  
   안에 아래의 코드를 넣어주세요 !

   ```
   REACT_APP_GITHUB_ACCESS_TOKEN = "${본인의 깃헙 access_token}"
   GENERATE_SOURCEMAP = false
   ```

4. 실행하기
   ```
   npm start
   ```

## 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜instance.ts
 ┃ ┗ 📜issue.ts
 ┣ 📂assets
 ┃ ┣ 📜CaretLeft.svg
 ┃ ┣ 📜Comments.svg
 ┃ ┗ 📜NotFound.png
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┣ 📜Loading.styled.tsx
 ┃ ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┃ ┣ 📜Header.styled.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂IssueDetail
 ┃ ┃ ┣ 📜IssueDetail.styled.tsx
 ┃ ┃ ┣ 📜IssueDetail.tsx
 ┃ ┃ ┣ 📜IssueDetailContent.styled.tsx
 ┃ ┃ ┣ 📜IssueDetailContent.tsx
 ┃ ┃ ┣ 📜IssueDetailHeader.styled.tsx
 ┃ ┃ ┗ 📜IssueDetailHeader.tsx
 ┃ ┣ 📂IssueList
 ┃ ┃ ┣ 📜IssueList.styled.tsx
 ┃ ┃ ┣ 📜IssueList.tsx
 ┃ ┃ ┣ 📜IssueListItem.styled.tsx
 ┃ ┃ ┗ 📜IssueListItem.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂data
 ┃ ┣ 📜const.ts
 ┃ ┗ 📜type.ts
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useInfiniteScroll.ts
 ┃ ┗ 📜useThrottle.ts
 ┣ 📂pages
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜IssuePage.tsx
 ┃ ┣ 📜NotFoundPage.tsx
 ┃ ┣ 📜PageRouter.tsx
 ┃ ┗ 📜ServerErrorPage.tsx
 ┣ 📂stores
 ┃ ┣ 📜useContentStore.ts
 ┃ ┗ 📜usePageStore.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
