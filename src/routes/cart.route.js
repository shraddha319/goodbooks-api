const express = require('express');
const { catchAsync } = require('../lib');
const { validate, validateCartId } = require('../middlewares');
const {
  getCart,
  postCart,
  updateCartById,
  deleteCartById,
} = require('../controllers/cart.controller');
const validation = require('../validations/cart.validation');

const router = express.Router();

/**
 * GET /user/:userId:/cart
 * POST /user/:userId/cart
 * POST /user/:userId/cart/:cartId
 * DELETE /user/:userId/cart/:cartId
 */

router
  .route('/')
  .get(catchAsync(getCart))
  .post(validate(validation.postCart), catchAsync(postCart));

router.use('/:cartId', catchAsync(validateCartId));

router
  .route('/:cartId')
  .post(validate(validation.updateCart), catchAsync(updateCartById))
  .delete(validate(validation.deleteCart), catchAsync(deleteCartById));

module.exports = router;
