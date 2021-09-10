const Joi = require('joi');
const { objectId } = require('./custom.validation');

const postCart = {
  body: Joi.object().keys({
    products: Joi.array().items(objectId).min(1),
  }),
};

const updateCart = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    type: Joi.string()
      .valid('add', 'remove', 'increment', 'decrement')
      .required(),
    products: Joi.array().items(objectId).min(1),
  }),
};

const deleteCart = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  postCart,
  updateCart,
  deleteCart,
};
