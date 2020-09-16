module.exports={
    // 세션 추가
    addSession: function(req, res, next){
        req.session.isLogin = true;
        req.session.id = req.body.id;
    }
};
