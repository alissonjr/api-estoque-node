const express = require('express');
const router  = express.Router();
const product = require('../src/Product');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', product.getAll);

router.get('/:product', product.get);

module.exports = router;
