# javascript-w3-todo

스프린트 3-4주차 웹 프로젝트 - 할일관리

- 배포 주소: http://101.101.210.76:5000

### 서버 실행 방법

- sudo npm install http-server -g
- cd front && npm install
- cd ..
- cd server && npm install
- npm run dev (pm2 start "npm run dev" --name todoApp)

### Week3 작업분류

1. 환경설정

   - express 세팅
     - express generator
     - gitignore 설정
     - dotenv 모듈 설치
     - mysql2 모듈 설치
   - ncloud 서버 세팅
     - mysql 설치
     - nodejs 설치
     - pm2
     - nginx

2. 서버 API 제작

   - 로그인 기능
     - 세션
     - 인증
     - 접근 제한
   - 테이블 생성
     - todo, inprogress, done, log, member
   - 테이블 별 CRUD 제작
   - RESTful 라우팅
   - CORS 허용

3. 클라이언트 HTML 제작
   - webpack 설정
     - webpack 모듈
     - style loader, css loader 모듈
     - webpack plugin 모듈
     - lodash 모듈
     - babel 모듈
   - component
     - header
       - logout API 연결
       - 메뉴
     - main
       - login 창 및 API 연결
       - column
         - CRUD API 연결
         - 드래그 앤 드롭
       - card
         - CRUD API 연결
         - 드래그 앤 드롭

## Week3 개발 진행상황

### day1

- express 세팅
- ncloud 서버 세팅
- 테이블 생성
- 테이블 별 CRUD 제작
- 배포

### day2

- 데이터 테이블 수정 -> member, rcolumn, card
- rest get 추가
- http server 설치 및 webpack 설치
- sytle, css loader 설치 적용
- webpack plugin 설치 적용
- lodash 설치
- main 영역에 button 추가
- fetch 테스트 cors 허용
- 서버, 프론트 분리하기
- package.json 실행 설정
- 배포 설정 -> nodejs 업그레이드

### day3

- route 파일 구조화
- express-session 추가
- 로그인 인증 기능 추가(lib/auth)
- login 기능 모듈화(미들웨어를 service 폴더, lib 폴더로 분리)
- 회원 가입 API 기능 추가
- reset.css 추가
- front 모듈화(css와 js 폴더 생성), (js를 header와 main 컴포넌트로 분리)
- front와 server에서 로그인 로그아웃 기능 연결

### day4

- rcolumn 조회 API기능과 front 연동 및 레이아웃 설계
- rcolumn, member, card를 조인하여 조회 API 기능 추가 front에 연동
- rcolumn 조회 API json 전달 형식 수정 및 레이아웃 수정
- rcolumn 디자인 수정
- package.json 프론트 프록시 주소 변경
- rcolumn 칼럼 삭제 API front 연결

## week4

### day1

- front에 ESLint, Prettier, husky, lint-staged 적용
- babel, polyfill, babel loader 설정

### url 라우팅

- member
  로그인(패스워드 확인, 세션추가) post /api/member/login
  로그아웃(세션 삭제) get /api/member/logout

로그인 여부 확인 get /api/member/isLogin

아이디 중복 확인 get /api/member/isDup/user1
회원 가입 post /api/member
회원 정보 수정 put /api/member/user1
patch /api/member/user1/pw
patch /api/member/user1/mname
회원 탈퇴 delete /api/member/1

- 칼럼
  칼럼 리스트 get /api/rcolumn/list
  칼럼 입력 post /api/rcolumn
  칼럼 이름 수정 patch /api/rcolumn/1/cname
  칼럼 순서 수정 patch /api/rcolumn/1/order
  칼럼 삭제 delete /api/rcolumn/1

- 카드
  카드 리스트 get /api/card/list
  카드 입력 post /api/card
  카드 내용 수정 patch /api/card/1/content
  카드 순서 수정 patch /api/card/1/order
  카드 삭제 delete /api/card/1

### 진행할 것

깃 태그 사용하기
에러처리(throw -> try catch next(err))
프로젝트 트리 구조 캡처
islogin 접근 제한 미들웨어 추가하기
