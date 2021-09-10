const Cart = require('../models/cart.model');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validateCartId = async (req, res, next) => {
  const { cartId } = req.params;
  const cart = await Cart.findById(cartId);

  if (!cart)
    return next(
      new ApplicationError(RESOURCE_NOT_FOUND, {
        message: `${cartId} not found`,
      }),
    );

  req.cartId = cartId;
  req.cart = cart;
  return next();
};

module.exports = validateCartId;
