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
    - fetch

### Week3 개발 계획표
|월                     |화                     |수                 |목                 |금                 |
|---|---|---|---|---|
|express 세팅           |                     |                 |                 |                 |
|ncloud 서버 세팅       |                     |                 |                 |                 |
|테이블 생성            |                     |                 |                 |                 |
|테이블 별 CRUD 제작    |                     |                 |                 |                 |
|배포                   |                     |                 |                 |                 |
|                       |                     |                 |                 |                 |

### Week3 개발 진행상황
|월                     |화                     |수                     |목                 |금                 |
|---|---|---|---|---|
|express 세팅           |                     |                 |                 |                 |
|ncloud 서버 세팅       |                     |                 |                 |                 |
|테이블 생성            |                     |                 |                 |                 |
|테이블 별 CRUD 제작    |                     |                 |                 |                 |
|배포                   |                     |                 |                 |                 |
|                       |                     |                 |                 |                 |

깃 태그 사용하기
쿼리 분리
에러처리(throw -> try catch next(err))
세션 관리

### url 라우팅

- member
로그인 post /api/member/login
로그아웃 get /api/member/logout

아이디 중복 확인 get /member/1
패스워드 일치 확인 get /member/password/1
회원 가입 post /member
회원 정보 수정 put /member/1 or patch /member/1/password
회원 탈퇴 delete /member/1

- 칼럼
칼럼 리스트 get /rcolumn/list
칼럼 입력 post /rcolumn
칼럼 이름 수정 patch /rcolumn/1/cname
칼럼 순서 수정 patch /rcolumn/1/order
칼럼 삭제 delete /rcolumn/1

- 카드
카드 리스트 get /card/list
카드 입력 post /card
카드 내용 수정 patch /card/1/content
카드 순서 수정 patch /card/1/order
카드 삭제 delete /card/1

lib/auth 추가
로그인 인증 기능 추가