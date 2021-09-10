const Cart = require('../models/cart.model');
const { sendResponse } = require('../lib');

const getCart = async (req, res) => {
  const { userId } = req;
  const cart = await Cart.findOne({ user: userId })
    .populate({
      path: 'products',
      populate: {
        path: 'product',
        model: 'Product',
      },
    })
    .exec();

  return sendResponse({
    res,
    success: true,
    payload: {
      cart,
    },
  });
};

const postCart = async (req, res) => {
  const { userId, body: cart } = req;

  const savedCart = await Cart.create({
    user: userId,
    products: cart.products.map((pId) => ({ quantity: 1, product: pId })),
  });
  const populatedCart = await savedCart
    .populate({
      path: 'products',
      populate: {
        path: 'product',
        model: 'Product',
      },
    })
    .execPopulate();

  return sendResponse({
    res,
    success: true,
    payload: { cart: populatedCart },
    statusCode: 201,
  });
};

const updateCartById = async (req, res) => {
  const { cart, body } = req;
  let cartItemIndex;

  switch (body.type) {
    case 'add':
      cart.products = cart.products.concat(
        body.products.map((pId) => ({ quantity: 1, product: pId })),
      );
      break;

    case 'remove':
      cart.products = cart.products.filter(
        ({ product }) => !body.products.includes(String(product)),
      );
      break;

    case 'increment':
      body.products.forEach((pId) => {
        cartItemIndex = cart.products.findIndex(
          ({ product }) => String(product) === pId,
        );
        if (cartItemIndex >= 0) cart.products[cartItemIndex].quantity += 1;
      });
      break;

    case 'decrement':
      body.products.forEach((pId) => {
        cartItemIndex = cart.products.findIndex(
          ({ product }) => String(product) === pId,
        );
        if (cartItemIndex >= 0) cart.products[cartItemIndex].quantity -= 1;

        if (cart.products[cartItemIndex].quantity <= 0)
          cart.products.splice(cartItemIndex, 1);
      });
      break;

    default:
      break;
  }

  await cart.save();
  return sendResponse({ res, success: true, statusCode: 204 });
};

const deleteCartById = async (req, res) => {
  const { cart } = req;
  await cart.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 204,
  });
};

module.exports = {
  getCart,
  postCart,
  updateCartById,
  deleteCartById,
};
