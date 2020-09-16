const express = require('express');
const router = express.Router();
// const session = require('express-session');

const Member = require('../model/member');
const mem = new Member();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result = await mem.list();
  res.status(200).json(result);
});

// router.get('/', async function(req, res, next) {
//   console.log(id);
//   res.status(200).json(result);
// });

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.status(200).json(req.body);
});

router.put('/', function(req, res, next) {
  console.log(req.body);
  res.status(200).json(req.body);
});

router.delete('/', function(req, res, next) {
  console.log(req.body);
  res.status(200).json(req.body);
});


// 세션 로그인 여부 -> 미들웨어(접근 제한)
// from lib/auth
function isLogin(req, res, next){
  return !!req.session.isLogin;
}

// 패스워드 확인
// id 존재 확인 -> 미들웨어(접근 제한)
// pw 일치 확인 -> 미들웨어(접근 제한)
// from lib/auth
async function checkPW(req, res, next){
  const id = req.body.id;
  const pw = rew.body.pw;
  const memberDTO = await mem.readByID(id);
  return memberDTO.length === 1 && pw === memberDTO[0].pw ? true : false;
}

// 세션 추가
// from lib/session
function addSession(req, res, next){
  req.session.isLogin = true;
  req.session.id = req.body.id;
}

// 로그인 로직
// from service/member
async function loginLogic(req, res, next){
  if(isLogin(req, res, next)){
    res.status(400).json({proc:false, msg: "접근 제한"});
  } else{
    // 세션 등록
    if(await checkPW(req, res, next)){
      addSession(req, res, next);
      return next();
    } else{
      return res.status(400).json({proc:false, msg: "아이디 또는 패스워드가 일치하지 않습니다."});
    }
  }
}

/* 로그인 정보를 받아서 세션 생성 */
router.get('/login', checkPW, loginLogic, function(req, res, next) {
  res.status(200).json({proc:true, msg: "로그인 성공"});
});

router.get('/logout', function(req, res, next) {
  request.session.destroy(err=>{
    if(err){
      next(err);
    }else {
      res.status(200).json({proc: true, msg: '로그아웃 성공'});
    }
  });
});

module.exports = router;
