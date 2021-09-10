const Wishlist = require('../models/wishlist.model');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validateWishlistId = async (req, res, next) => {
  const { wishlistId } = req.params;
  const wishlist = await Wishlist.findById(wishlistId);

  if (!wishlist)
    return next(
      new ApplicationError(RESOURCE_NOT_FOUND, {
        message: `${wishlistId} not found`,
      }),
    );

  req.wishlistId = wishlistId;
  req.wishlist = wishlist;
  return next();
};

module.exports = validateWishlistId;
