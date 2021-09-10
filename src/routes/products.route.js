const express = require('express');
const { validate, validateProductId } = require('../middlewares');
const {
  getProducts,
  postProducts,
  getProductById,
} = require('../controllers/product.controller');
const validation = require('../validations/product.validation');
const { catchAsync } = require('../lib');

const router = express.Router();

/**
 * GET /products
 * POST /products; body: [{PRODUCT}]
 * GET /products/:id
 *
 */

router
  .route('/')
  .get(catchAsync(getProducts))
  .post(validate(validation.postProducts), catchAsync(postProducts));

router.use('/:productId', catchAsync(validateProductId));

router
  .route('/:productId')
  .get(validate(validation.getProductById), getProductById);

module.exports = router;
