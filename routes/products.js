const router  = require('./index');
const Product = require('../src/product');

const product = new Product();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', product.get);

router.get('/:product', (req, res) => {
    res.send({
      teste: "Testando essa merda!",
      id_param: parseInt(req.params.product)
    }).json();
});

module.exports = router;
