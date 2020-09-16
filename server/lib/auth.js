const Member = require('../model/member');
const mem = new Member();

module.exports={
    // 세션 로그인 여부 -> 미들웨어(접근 제한)
    isLogin:function (req, res, next){
        return !!req.session.isLogin;
    },
    // 패스워드 확인
    checkPW:async function (req, res, next){
        const id = req.body.id;
        const pw = req.body.pw;
        const memberDTO = await mem.getPwById(id);
        return memberDTO.length === 1 && pw === memberDTO[0].pw ? true : false;
    }
};
