const express = require("express");
const router = express.Router();

const Card = require("../model/card");
const card = new Card();

const { logger } = require("../lib/logger.js");

// insert
router.post(
  "/",
  async function (req, res, next) {
    if (!req.body.memno) {
      res.status(401).json({ proc: false, msg: "로그인 필요" });
    }
    const memno = req.body.memno;
    const colno = req.body.colno;
    const ccontent = req.body.ccontent;
    const newCorder = await card.getNewCorder(colno, memno);
    const insertId = await card.create(memno, colno, ccontent, newCorder);
    res.locals.newCardno = insertId;
    if (insertId) {
      res.locals.resp = {
        proc: true,
        msg: "카드 생성 성공",
        insertId: insertId,
      };
    }
    next();
    // res.status(400).json({ proc: false, msg: "카드 생성 실패" });
  },
  logger
);

// update
router.put(
  "/",
  async function (req, res, next) {
    // try {
    const toColno = req.body.toColno;
    const currCardno = req.body.currCardno;
    const toNextCardno = req.body.toNextCardno;
    const toPrevCardno = req.body.toPrevCardno;
    const corder_mid = await card.getCorderMid(toPrevCardno, toNextCardno);
    await card.updateOrder(currCardno, corder_mid, toColno);
    next();
    // } catch (error) {
    //   res.status(500).json({ proc: false, msg: "카드 이동 실패" });
    // }
  },
  logger
);

router.put(
  "/:cardno/ccontent",
  async function (req, res, next) {
    const cardno = req.params.cardno;
    const newCcontent = req.body.new_ccontent;
    const result = await card.updateCcontent(cardno, newCcontent);
    // res.status(201).json({ proc: true, msg: "카드 수정 성공" });
    next();
  },
  logger
);

// delete
router.delete(
  "/:cardno",
  async function (req, res, next) {
    const cardno = req.params.cardno;
    const result = await card.delete(cardno);
    next();
  },
  logger
);

module.exports = router;
