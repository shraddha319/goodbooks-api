const Product = require('../models/product.model');
const { ApplicationError, ErrorTypes } = require('../lib');

const { RESOURCE_NOT_FOUND } = ErrorTypes;

const validateProductId = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  if (!product)
    return next(
      new ApplicationError(RESOURCE_NOT_FOUND, {
        message: `${productId} not found`,
      }),
    );

  req.productId = productId;
  req.product = product;
  return next();
};

module.exports = validateProductId;
