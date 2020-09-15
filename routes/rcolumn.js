const express = require('express');
const router = express.Router();

const Rcolumn = require('../model/rcolumn');
const rcol = new Rcolumn();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result =  await rcol.list();
  res.status(200).json(result);
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