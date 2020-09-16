const express = require('express');
const router = express.Router();


const memberService = require('../service/member');

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

/* 패스워드 확인 및 세션 생성 */
router.get('/login', memberService.loginLogic, function(req, res, next) {
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
