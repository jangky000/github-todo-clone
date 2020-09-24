const express = require("express");
const router = express.Router();

const rcolumnService = require("../service/rcolumnService.js");

const Rcolumn = require("../model/rcolumn");
const rcol = new Rcolumn();

/* GET users listing. */
/* rcolumn 과 card 조인 결과 조회 */
router.get("/", async function (req, res, next) {
  const result = await rcol.listJoinCardMem(req.session.memno);
  const parsed = rcolumnService.parseJoinResult(result);
  res.status(200).json(parsed);
});

// insert
router.post("/", async function (req, res, next) {
  console.log("칼럼 추가");
  const cname = req.body.cname;
  const corder = req.body.corder;
  const insertId = await rcol.create(cname, corder);
  if (insertId) {
    res
      .status(201)
      .json({ proc: true, msg: "칼럼 추가 성공", insertId: insertId });
  } else {
    res.status(400).json({ proc: false, msg: "칼럼 추가 실패" });
  }
});

// update
router.put("/:colno/cname", async function (req, res, next) {
  const colno = req.params.colno;
  const newCname = req.body.new_cname;
  const result = await rcol.updateCname(colno, newCname);
  res.status(201).json({ proc: true, msg: "칼럼 수정 성공" });
});

// delete
router.delete("/:colno", async function (req, res, next) {
  const colno = req.params.colno;
  const result = await rcol.delete(colno);
  if (result === 1) {
    res.status(201).json({ proc: true, msg: "칼럼 삭제 성공" });
  } else if (result === 0) {
    res.status(400).json({ proc: false, msg: "칼럼 삭제 실패" });
  } else {
    res.status(409).json({ proc: false, msg: "중복 칼럼 삭제" });
  }
});

module.exports = router;
