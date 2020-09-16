const auth = require('../lib/auth');
const session = require('../lib/session');

module.exports = {
    // 로그인 로직
    loginLogic: async function loginLogic(req, res, next){
        if(auth.isLogin(req, res, next)){
            res.status(400).json({proc:false, msg: "접근 제한"});
        } else{
            // 세션 등록
            if(await auth.checkPW(req, res, next)){
            session.addSession(req, res, next);
            return next();
            } else{
            res.status(400).json({proc:false, msg: "아이디 또는 패스워드가 일치하지 않습니다."});
            }
        }
    }
};
