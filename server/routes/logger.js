const express = require("express");
const router = express.Router();

const Logger = require("../model/logger");
const log = new Logger();

/* log 조회 */
router.get("/", async function (req, res, next) {
  const rows = await log.readByMemno(req.session.memno);
  res.status(200).json(rows);
});

module.exports = router;
