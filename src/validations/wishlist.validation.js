const Joi = require('joi');
const { objectId } = require('./custom.validation');

const postWishlist = {
  body: Joi.object().keys({
    products: Joi.array().items(objectId).min(1),
  }),
};

const updateWishlist = {
  params: Joi.object().keys({
    wishlistId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    type: Joi.string().valid('add', 'remove').required(),
    products: Joi.array().items(objectId).min(1),
  }),
};

const deleteWishlist = {
  params: Joi.object().keys({
    wishlistId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  postWishlist,
  updateWishlist,
  deleteWishlist,
};
