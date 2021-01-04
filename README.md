# Todo 서비스

- [배포 링크](http://101.101.210.76:5000/)
- 할 일 메모를 간단하게 관리할 수 있는 사이트
- 카드는 각 사용자가 따로 관리한다

## 요구사항 분석

### <FE>

- [x] Webpack과 Babel을 활용해서 기본적인 환경을 구성
- [x] ES Mdoules방식으로 모듈화
- [x] 비동기 통신은 fetch API를 활용
- [x] DOM 조작과정에서 template literal 을 활용한 문자열 기반의 파싱
- [x] Drag and Drop 구현
- [ ] 이벤트 위임방식을 적극 활용

### <BE>

- [x] Node.js와 Express를 활용
- [x] 프론트엔드 기능구현에 필요한 API를 제공
- [x] 템플릿 엔진보다는 json을 응답해주는 API형태로 구현
- [x] MySQL을 사용하고 드라이버는 mysql2를 사용
- [x] express-session을 사용해서 인증을 구현
- [x] session은 메모리에 저장
- [x] 배포는 클라우드 서버의 단일 인스턴스를 이용해서 배포를 진행
- [x] 배포시 깃의 tag를 적극적으로 활용
- [x] 다사용자가 사용할 수 있도록 설계
- [ ] 사용자별로 각 목록에 대한 접근권한 (읽기 / 쓰기) 제한 기능을 구현

## 기능

- 세션 로그인/ 로그아웃
- 메뉴 레이어
  - 다크모드 변환
  - 클럽모드 변환
  - 액션 로그 기록 조회
- 칼럼 생성/수정/삭제
- 카드 생성/수정/삭제
- 드래그 앤 드롭 카드 이동

## 사용법

### 로그인 사용법

![로그인](https://user-images.githubusercontent.com/46799722/94225371-b5640c00-ff2f-11ea-867c-ba949ef9fb05.gif)

- 아이디와 패스워드를 입력 후 `로그인` 버튼 클릭
  - 사용가능한 id
  - id: user1, pw: 1234
  - id: user2, pw: 1234

### 로그아웃 사용법

![로그아웃](https://user-images.githubusercontent.com/46799722/94225375-b72dcf80-ff2f-11ea-8b5c-4a66da60e568.gif)

- 우측 상단의 `Menu`를 클릭 후 로그아웃 클릭

### 다사용자 지원

![다사용자](https://user-images.githubusercontent.com/46799722/94225382-b8f79300-ff2f-11ea-9b71-f6a8a2351250.gif)

### 다크모드/클럽모드

- 다크모드
![다크모드](https://user-images.githubusercontent.com/46799722/94225376-b72dcf80-ff2f-11ea-83b5-89a85145bead.gif)

- 클럽모드
![클럽모드](https://user-images.githubusercontent.com/46799722/94225377-b7c66600-ff2f-11ea-9d22-eda6fc456cd8.gif)

- 우측 상단의 `Menu`를 클릭 후 `다크모드` / `클럽모드` 클릭
- 다시 클릭하면 `다크모드` / `클럽모드` 해제

### 칼럼 사용법

![칼럼 추가 수정 삭제](https://user-images.githubusercontent.com/46799722/94225379-b85efc80-ff2f-11ea-9b31-ac11264d31bc.gif)

- 생성: `+ 칼럼 추가`를 눌러 칼럼 생성
- 수정: 칼럼 이름을 더블 클릭하여 모달 창에서 수정
- 삭제: 칼럼 이름 옆에 `x`버튼을 누르고 팝업 창에서 확인 선택

### 카드 사용법

![칼럼 카드 동작 모두](https://user-images.githubusercontent.com/46799722/94225381-b85efc80-ff2f-11ea-956c-92b0ee8f3186.gif)

- 생성: 칼럼 이름 옆에 `+` 버튼을 눌러 생성된 창에 텏트를 기입 후 `입력` 버튼을 클릭
- 수정: 카드를 더블 클릭하여 모달 창에서 수정
- 이동: 드래그 앤 드롭으로 원하는 위치로 이동
- 삭제: 카드 우측 상단의 `x` 버튼을 누르고 팝업 창에서 확인 선택

### 서버 실행 방법

- sudo npm install http-server -g
- cd front && npm install
- cd ../server && npm install
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

## week4 개발 진행상황

### day1

- front에 ESLint, Prettier, husky, lint-staged 적용
- babel, polyfill, babel loader 설정
- inline source map 적용, webpack-dev-server 적용

### day2

- front에서 카드 생성 기능 구현
- front 상에서 드래그 앤 드롭 구현

### day3

- fix card component 분리
- fix rcolumn 컴포넌트 분리
- fix 동적으로 칼럼 추가 삭제
- feat 로그인 컴포넌트 추가
- fix 카드 추가 기능 구현
- feat 메뉴 레이어 추가
- fix 칼럼, 카드 조회 수정
- feat 순서 수정 서버 API
- feat 카드 삭제 구현
- fix 카드 추가 reload 없이 하기
- fix 칼럼 삭제 confirm 창 추가

### day4

- fix 카드 생성시 이벤트 추가
- fix 카드 이동, 삭제 시 칼럼에 카운트 숫자 업데이트
- feat 카드, 칼럼 수정 기능 추가
- feat 로그: 칼럼 삭제, 카드 삭제 , 카드 이동
- feat 로그: 칼럼 삽입, 수정 , 카드 삽입, 수정 추가
- feat logger 라우터 추가
- feat log를 menu layer에 출력
- fix bundle 재 생성
- fix 카드 생성시 삭제 이벤트 추가, 카드 생성 폼 개선

### day5

- feat 메뉴 창에 다크모드 클럽모드 추가
- fix webpack 업데이트
- fix readme 업데이트
- 배포 완료

### Server API 라우팅 url

- member
  로그인(패스워드 확인, 세션추가) post /api/member/login
  로그아웃(세션 삭제) get /api/member/logout
  로그인 여부 확인 get /api/member/isLogin

- 로그 조회
  get /api/logger

- 칼럼
  칼럼과 카드 조인 결과 조회 get /api/rcolum/
  칼럼 생성 post /api/rcolumn
  칼럼 이름 수정 put /api/rcolumn/:colno/cname
  칼럼 삭제 delete /api/rcolumn/1

- 카드
  카드 생성 post /api/card
  카드 이동 put /api/card/
  카드 내용 수정 put /api/card/:cardno/ccontent
  카드 삭제 delete /api/card/1
