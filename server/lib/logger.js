const Logger = require("../model/logger");
const log = new Logger();

function logCardAdd(req) {
  // 카드 등록: add memno cardno ccontent mvto
  const lgmode = "ADD";
  const cardno = req.locals.newCardno;
  const ccontent = req.body.ccontent; // v
  const mvfrom = null;
  const mvto = req.body.cname;
  const memno = req.session.memno;
  log.create(lgmode, cardno, ccontent, mvfrom, mvto, memno);
}

function logColumnCreate(req) {
  // 칼럼 등록: create mvto memno
  const lgmode = "CREATE";
  const cardno = null;
  const ccontent = null;
  const mvfrom = null;
  const mvto = req.body.cname;
  const memno = req.session.memno;
  log.create(lgmode, cardno, ccontent, mvfrom, mvto, memno);
}

function logMove(req) {
  // lgmode, cardno, ccontent, mvfrom, mvto, memno
  // move: move  cardno ccontent, mvfrom, mvto, memno
  const lgmode = "MOVE";
  const cardno = req.body.currCardno;
  const ccontent = req.body.currCcontent;
  const mvfrom = req.body.fromCname;
  const mvto = req.body.toCname;
  const memno = req.session.memno;
  log.create(lgmode, cardno, ccontent, mvfrom, mvto, memno);
  // res.status(201).json({ proc: true, msg: "카드 이동 성공" });
}

function logColumnRename(req) {
  // lgmode, cardno, ccontent, mvfrom, mvto, memno
  // 칼럼 업데이트: rename mvfrom, mvto memno
  const lgmode = "RENAME";
  const cardno = null;
  const ccontent = null;
  const mvfrom = req.body.cname;
  const mvto = req.body.cname;
  const memno = req.session.memno;
  // res.status(201).json({ proc: true, msg: "칼럼 수정 성공" });
}

function logCardUpdate(req, res, next) {
  // lgmode, cardno, ccontent, mvfrom, mvto, memno
  // 카드 업데이트: update cardno ccontent memno
  const lgmode = "UPDATE";
  const cardno = req.locals.newCardno;
  const ccontent = req.body.ccontent;
  const mvfrom = null;
  const mvto = null;
  const memno = req.session.memno;
  //   res.status(201).json({ proc: true, msg: "카드 수정 성공" });
}

function logCardRemove(req) {
  // lgmode, cardno, ccontent, mvfrom, mvto, memno
  // 카드 삭제: remove cardno ccontent memno
  const lgmode = "REMOVE";
  const cardno = req.params.cardno; //v
  const ccontent = req.body.ccontent;
  const mvfrom = null;
  const mvto = null;
  const memno = req.session.memno;
  log.create(lgmode, cardno, ccontent, mvfrom, mvto, memno);
}

function logColumnDelete(req) {
  // lgmode, cardno, ccontent, mvfrom, mvto, memno
  // 칼럼 삭제: delete mvfrom memno
  const lgmode = "DELETE";
  const cardno = null;
  const ccontent = null;
  const mvfrom = req.body.cname;
  const mvto = null;
  const memno = req.session.memno;
  log.create(lgmode, cardno, ccontent, mvfrom, mvto, memno);
}

module.exports = {
  logger: function (req, res, next) {
    switch (req.method) {
      case "POST":
        if (req.body.ccontent) {
          logCardAdd(req, res, next);
          res.status(201).json({ proc: true, msg: "카드 등록 성공" });
        } else {
          logColumnCreate(req, res, next);
          res.status(201).json({ proc: true, msg: "칼럼 등록 성공" });
        }
        break;
      case "PUT":
        logMove(req);
        break;
      case "DELETE":
        if (req.params.cardno) {
          logCardRemove(req, res, next);
          res.status(201).json({ proc: true, msg: "카드 삭제 성공" });
        } else {
          logColumnDelete(req, res, next);
          res.status(201).json({ proc: true, msg: "칼럼 삭제 성공" });
        }
        break;
    }
    res.status(201).json({ proc: true, msg: "칼럼 등록 성공" });
  },
};
