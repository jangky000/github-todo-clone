const express = require("express");
const session = require("../lib/session");
const router = express.Router();

const Card = require("../model/card");
const card = new Card();

/* GET users listing. */
// router.get("/:colno", async function (req, res, next) {
//   const result = await card.listByColno(colno);
//   res.status(200).json(result);
//   // res.send('respond with a resource');
// });

// insert
router.post("/", async function (req, res, next) {
  if (!req.body.memno) {
    res.status(401).json({ proc: false, msg: "로그인 필요" });
  }
  const memno = req.body.memno;
  const colno = req.body.colno;
  const ccontent = req.body.ccontent;
  const newCorder = await card.getNewCorder(colno, memno);
  const result = await card.create(memno, colno, ccontent, newCorder);
  if (result === 1) {
    res.status(201).json({ proc: true, msg: "카드 생성 성공" });
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
router.delete("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
