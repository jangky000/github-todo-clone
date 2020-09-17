const express = require('express');
const { map } = require('mysql2/lib/constants/charset_encodings');
const router = express.Router();

const rcolumnService = require('../service/rcolumnService.js');

const Rcolumn = require('../model/rcolumn');
const rcol = new Rcolumn();

/* GET users listing. */
/* rcolumn 과 card 조인 결과 조회 */
router.get('/', async function(req, res, next) {
  const result =  await rcol.listJoinCardMem();
  const parsed = rcolumnService.parseJoinResult(result);
  res.status(200).json(parsed);
  // res.send('respond with a resource');
});

// insert
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

// update
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

// delete
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;