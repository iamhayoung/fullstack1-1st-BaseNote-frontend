# BASENOTE Front-end/Back-end 소개

### Find Your Scent, 가장 나다운 향을 찾아드립니다.

- 향수 판매 사이트 [파펨](https://paffem.me/) 클론 프로젝트

## 💁‍♀️💁‍♂️ 팀원

---

- [박미정](https://github.com/undefinedP)
- [김민성](https://github.com/Minseongkimm)
- [오송미](https://github.com/songmiO)
- [감하영](https://github.com/iamhayoung)

## 📆 프로젝트 기간

---

2021.07.05 ~ 2021.07.23 (19일)

## 🔑 Skills

---

<br/>
<p align="center">
FrontEnd
<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat&logo=ReactRouter&logoColor=black"/></a>
<img src="https://img.shields.io/badge/ Sass-CC6699?style=flat&logo=Sass&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/></a>

<p align="center">
BackEnd
<p align="center">
<img src="https://img.shields.io/badge/ Node.js-339933?style=flat&logo=Node.js&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=Nodemon&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=Prisma&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Bcrypt-003A70?style=flat&logo=LetsEncrypt&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JSONWebTokens-000000?style=flat&logo=JSONWebTokens&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat&logo=Babel&logoColor=white"/></a>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/></a>

<p align="center">
공통
<p align="center">
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/></a>

<br/>
<br/>

## 🛠 Tool

---

<br/>
<p align="center">
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
<br/>
<br/>

## 구현 기능 상세

---

### 1. 공통 구현 사항

- 네비게이션바
  - 카테고리 hover시, 썸네일이 나오는 기능
  - react-Router을 사용한 동적 라우팅 구현
- Footer
  - Footer Menu 데이터를 이용하여 동적 구현
- 데이터 fetch 중일 때 로딩 화면 출력
- 금액 세 자리 단위마다 ,(콤마) 추가
- `this.props.children`을 이용해 Container Component 구현

### 2. 메인 페이지

- 동영상 삽입
- Review - 상품 연동

### 3. 상품 리스트 페이지

- 상품 리스트를 반응형으로 구현
- fetch를 이용해 백엔드와 통신하여 리스트 페이지 데이터 렌더링
  - 받아온 데이터를 ID순으로 가공한 뒤 정렬
- react-router를 사용해 상품 용량에 따른 동적 라우팅 구현

### 4. 상세페이지

- 수량을 변경할 시 가격도 동시에 변경
- 드랍다운을 이용한 추가 옵션 선택
- 상품에 해당하는 노트를 분류한 뒤 테이블 형태로 출력
- 상품의 키워드를 출력한 뒤 우선순위를 분류해 시각화
- 상품의 시리즈에 따른 상세 정보의 Keyword Area 테마색 변경
- react-router를 사용해 상품 용량에 따른 동적 라우팅 구현

### 5. 장바구니

- 장바구니 Read API와 연동
  - 유저의 토큰을 확인해서, 그 유저가 사용하는 장바구니를 출력
- 장바구니 Update API와 연동
  - 장바구니 아이템 수량변경
  - 수량 변경에 따라 아이템 가격 변경
- 토큰이 존재하지 않을 때, 그리고 장바구니가 비었을 때 '장바구니가 비었습니다' 메세지 출력
- 토큰 만료 시, 로그인 요청 dialog 출력 및 로그인 페이지로 리다이렉트

### 6. 로그인/회원가입

- 로그인
- 아이디와 비밀번호가 일치하지 않으면 alert를 띄우는 기능
  - 로그인 성공 시 메인페이지로 이동
  - 로그인 성공 시 로컬 스토리지에 access token 저장
- 회원가입
  - 회원가입시 특정 항목을 입력하지 않았을 때, 그 항목에 해당하는 alert를 띄움
  - 비밀번호 유효성 검사
  - 회원가입 성공 시 로그인 페이지로 이동

## Reference

---

- 이 프로젝트는 파펨 사이트를 참조하여 학습목적으로 만들었습니다. 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 동영상은 unsplash와 pixabay에서 공유받은 Free 이미지 및 동영상이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
