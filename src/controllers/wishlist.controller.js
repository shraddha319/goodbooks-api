const Wishlist = require('../models/wishlist.model');
const { sendResponse } = require('../lib');

const getWishlist = async (req, res) => {
  const { userId } = req;
  const wishlist = await Wishlist.findOne({ user: userId })
    .populate('products')
    .exec();

  return sendResponse({
    res,
    success: true,
    payload: {
      wishlist,
    },
  });
};

const postWishlist = async (req, res) => {
  const { userId, body: wishlist } = req;
  const savedWishlist = await Wishlist.create({
    user: userId,
    products: wishlist.products,
  });

  const populatedWishlist = await savedWishlist
    .populate('products')
    .execPopulate();

  return sendResponse({
    res,
    success: true,
    payload: { wishlist: populatedWishlist },
    statusCode: 201,
  });
};

const updateWishlistById = async (req, res) => {
  const { wishlist, body } = req;

  switch (body.type) {
    case 'add':
      wishlist.products = wishlist.products.concat(body.products);
      break;

    case 'remove':
      wishlist.products = wishlist.products.filter(
        (product) => !body.products.includes(String(product)),
      );
      break;

    default:
      break;
  }

  await wishlist.save();
  return sendResponse({ res, success: true, statusCode: 204 });
};

const deleteWishlistById = async (req, res) => {
  const { wishlist } = req;
  await wishlist.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 204,
  });
};

module.exports = {
  getWishlist,
  postWishlist,
  updateWishlistById,
  deleteWishlistById,
};
