// 엔트리 파일
// 번들로 변환해서 사용
// npx webpack --entry ./source/index.js --output ./public/index_bundle.js

// config 설정 시
// npm webpack --config webpack.config.js

// 또는 npx webpack 으로 실행
// npx webpack --watch -> 수정사항 자동 업데이트

// "proxy": "http://101.101.210.76:3000/"

// 번들링 대상
import Page from "./component/page.js"
import css from './css/style.css'
new Page();