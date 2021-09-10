const Joi = require('joi');
const { objectId } = require('./custom.validation');

const product = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  isbn: Joi.string(),
  author: Joi.string(),
  bookCoverURL: Joi.string(),
  description: Joi.string(),
  price: {
    value: Joi.number().required(),
    unit: Joi.string().default('INR'),
  },
  genre: Joi.string(),
  language: Joi.string(),
  pages: Joi.number(),
  dimensions: {
    width: Joi.number(),
    length: Joi.number(),
    height: Joi.number(),
    unit: Joi.string(),
  },
  format: Joi.string(),
  weight: {
    value: Joi.number(),
    unit: Joi.string(),
  },
  publication: {
    publisher: Joi.string(),
    date: Joi.string(),
  },
  review: {
    popular: [
      {
        name: Joi.string(),
        review: Joi.string(),
      },
    ],
  },
  rating: {
    5: Joi.number().default(0),
    4: Joi.number().default(0),
    3: Joi.number().default(0),
    2: Joi.number().default(0),
    1: Joi.number().default(0),
  },
});

const getProductById = {
  params: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
  }),
};

const postVideos = {
  body: Joi.object().keys({
    products: Joi.array().items(product),
  }),
};

module.exports = {
  getProductById,
  postVideos,
  product,
};
