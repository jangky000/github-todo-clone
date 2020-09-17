const express = require('express');
const router = express.Router();

const Card = require('../model/card');
const card = new Card();

/* GET users listing. */
router.get('/:colno', async function(req, res, next) {
  const result =  await card.list();
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