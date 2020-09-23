const express = require("express");
const router = express.Router();

const Card = require("../model/card");
const card = new Card();

// insert
router.post("/", async function (req, res, next) {
  if (!req.body.memno) {
    res.status(401).json({ proc: false, msg: "로그인 필요" });
  }
  const memno = req.body.memno;
  const colno = req.body.colno;
  const ccontent = req.body.ccontent;
  const newCorder = await card.getNewCorder(colno, memno);
  const insertId = await card.create(memno, colno, ccontent, newCorder);
  if (insertId) {
    res
      .status(201)
      .json({ proc: true, msg: "카드 생성 성공", insertId: insertId });
  } else {
    res.status(400).json({ proc: false, msg: "카드 생성 실패" });
  }
});

// update
router.put("/", async function (req, res, next) {
  const toColno = req.body.toColno;
  const currCardno = req.body.currCardno;
  const toNextCardno = req.body.toNextCardno;
  const toPrevCardno = req.body.toPrevCardno;

  const corder_mid = await card.getCorderMid(toPrevCardno, toNextCardno);
  await card.updateOrder(currCardno, corder_mid, toColno);
  res.status(201).json({ proc: true, msg: "카드 이동 성공" });
});

// delete
router.delete("/:cardno", async function (req, res, next) {
  const cardno = req.params.cardno;
  const result = await card.delete(cardno);
  if (result === 1) {
    res.status(201).json({ proc: true, msg: "카드 삭제 성공" });
  } else if (result === 0) {
    res.status(400).json({ proc: false, msg: "카드 삭제 실패" });
  } else {
    res.status(409).json({ proc: false, msg: "중복 카드 삭제" });
  }
});

module.exports = router;
