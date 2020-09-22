const Member = require("../model/member");
const mem = new Member();

module.exports = {
  // 세션 추가
  addSession: async function (req, res, next) {
    req.session.isLogin = true;
    req.session.uid = req.body.id;
    const rows = await mem.readById(req.body.id);
    req.session.memno = rows[0].memno;
  },
};
