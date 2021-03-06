const errorHandler = require('./errorHandler');
const notFoundHandler = require('./notFoundHandler');
const tokenVerifier = require('./tokenVerifier');
const validate = require('./validate');
const validateUserId = require('./validateUserId');
const validateCartId = require('./validateCartId');
const validateWishlistId = require('./validateWishlistId');
const validateProductId = require('./validateProductId');

module.exports = {
  errorHandler,
  notFoundHandler,
  tokenVerifier,
  validate,
  validateUserId,
  validateCartId,
  validateWishlistId,
  validateProductId,
};
