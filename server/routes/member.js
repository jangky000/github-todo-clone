const express = require('express');
const router = express.Router();

const memberService = require('../service/memberService');

const Member = require('../model/member');
const mem = new Member();

/* 아이디 리스트 조회 */
router.get('/', async function(req, res, next) {
  const result = await mem.list();
  res.status(200).json(result);
});

/* 로그인 조회 */
router.get('/isLogin', function(req, res, next) {
  res.status(200).json({isLogin:!!req.session.isLogin, id:req.session.uid});
});

/* 아이디 조회 */
// router.get('/:id', async function(req, res, next) {
//   // 접근 제한
//   const result = await mem.readById(req.params.id);
//   res.status(200).json(result);
// });

/* 회원 추가 */
router.post('/', async function(req, res, next) {
  const id = req.body.id;
  const pw = req.body.pw;
  const mname = req.body.mname;
  const result = await mem.create(id, pw, mname);
  if(result === 1){
    res.status(201).json({proc:true, msg: "회원 가입 성공"});
  } else if(result === 0){
    res.status(400).json({proc:false, msg: "회원 가입 실패"});
  } else {
    res.status(500).json({proc:false, msg: "중복 회원 가입"});
  }
});

/* 전체 수정 */
router.put('/', function(req, res, next) {
  // 접근 제한
  console.log(req.body);
  res.status(200).json(req.body);
});

/* 일부 수정 */
/* 패스워드 수정 */
router.patch('/:id/pw', function(req, res, next) {
  // 접근 제한
  // 기존의 패스워드 일치 확인
  // 새 패스워드 일치 확인
  // 업데이트
  console.log(req.body);
  res.status(200).json(req.body);
});

/* 이름 수정 */
router.patch('/:id/mname', function(req, res, next) {
  // 접근 제한
  // 업데이트
  console.log(req.body);
  res.status(200).json(req.body);
});

router.delete('/', function(req, res, next) {
  // 접근 제한
  // 기존의 패스워드 일치 확인
  // 삭제
  console.log(req.body);
  res.status(200).json(req.body);
});

/* 패스워드 확인 및 세션 생성 */
router.post('/login', memberService.loginLogic, function(req, res, next) {
  res.status(201).json({proc:true, msg: "로그인 성공"});
});

/* 세션 로그아웃 */
router.get('/logout', function(req, res, next) {
  req.session.destroy(err=>{
    if(err){
      next(err);
    }else {
      res.status(201).json({proc: true, msg: '로그아웃 성공'});
    }
  });
});

module.exports = router;
