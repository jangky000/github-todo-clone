const express = require("express");
const router = express.Router();

const loggerRouter = require("./logger");
const memberRouter = require("./member");
const rcolumnRouter = require("./rcolumn");
const cardRouter = require("./card");

/* init */
router.get("/", function (req, res, next) {
  res.render("init", { title: "init 화면" });
});

router.use("/logger", loggerRouter);
router.use("/member", memberRouter);
router.use("/rcolumn", rcolumnRouter);
router.use("/card", cardRouter);

module.exports = router;
