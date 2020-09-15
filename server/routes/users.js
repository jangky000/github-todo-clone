const express = require('express');
const router = express.Router();

const Member = require('../model/member');
const mem = new Member();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result = await mem.list();
  res.status(200).json(result);
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
