const express = require('express');
const { catchAsync } = require('../lib');
const { validate, validateWishlistId } = require('../middlewares');
const {
  getWishlist,
  postWishlist,
  updateWishlistById,
  deleteWishlistById,
} = require('../controllers/wishlist.controller');
const validation = require('../validations/wishlist.validation');

const router = express.Router();

/**
 * GET /user/:userId:/wishlist
 * POST /user/:userId/wishlist
 * POST /user/:userId/wishlist/:wishlistId
 * DELETE /user/:userId/wishlist/:wishlistId
 */

router
  .route('/')
  .get(catchAsync(getWishlist))
  .post(validate(validation.postWishlist), catchAsync(postWishlist));

router.use('/:wishlistId', catchAsync(validateWishlistId));

router
  .route('/:wishlistId')
  .post(validate(validation.updateWishlist), catchAsync(updateWishlistById))
  .delete(validate(validation.deleteWishlist), catchAsync(deleteWishlistById));

module.exports = router;
