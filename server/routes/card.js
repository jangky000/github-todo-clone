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
  // console.log(req.session);
  // res.status(401).json(JSON.stringify(req.session));
  // return;
  if (!req.body.memno) {
    res.status(401).json({ proc: false, msg: "로그인 필요" });
  }
  const result = await card.create(
    req.body.memno,
    req.body.colno,
    req.body.ccontent,
    req.body.corder
  );
  if (result === 1) {
    res.status(201).json({ proc: true, msg: "카드 생성 성공" });
  } else if (result === 0) {
    res.status(400).json({ proc: false, msg: "카드 생성 실패" });
  } else {
    res.status(409).json({ proc: false, msg: "중복 카드 생성" });
  }
});

// update
router.put("/", async function (req, res, next) {
  // res.status(200).json(req.body);
  // return;
  if (req.body.fromNextCardno) {
    const currCardVO = await card.readByCardno(req.body.currCardno);
    await card.updateOrder(
      req.body.fromNextCardno,
      currCardVO.corder,
      currCardVO.colno
    );
  }

  if (req.body.toNextCardno) {
    const nextCardVO = await card.readByCardno(req.body.toNextCardno);
    await card.updateOrder(
      req.body.toNextCardno,
      req.body.currCardno,
      req.body.toColno
    );
    await card.updateOrder(
      req.body.currCardno,
      nextCardVO.corder,
      req.body.toColno
    );
  } else if (req.body.toPrevCardno) {
    await card.updateOrder(
      req.body.currCardno,
      req.body.toPrevCardno,
      req.body.toColno
    );
  } else {
    await card.updateOrder(req.body.currCardno, 0, req.body.toColno);
  }
  res.status(201).json({ proc: true, msg: "카드 생성 성공" });
});

// delete
router.delete("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
