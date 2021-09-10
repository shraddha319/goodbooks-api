const Product = require('../models/product.model');
const { sendResponse, deepMerge } = require('../lib');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  return sendResponse({
    res,
    success: true,
    payload: { products },
  });
};

const postProducts = async (req, res) => {
  const savedProducts = await Product.create(req.body.products);
  return sendResponse({
    res,
    success: true,
    payload: { products: savedProducts },
    statusCode: 201,
  });
};

const getProductById = (req, res) => {
  const { product } = req;
  return sendResponse({
    res,
    success: true,
    payload: { product },
  });
};

const updateProductById = async (req, res) => {
  const { product, body: update } = req;
  deepMerge(product, update);
  await product.save();
  return sendResponse({ res, success: true, statusCode: 204 });
};

const deleteProductById = async (req, res) => {
  const { product } = req;
  await product.remove();
  return sendResponse({
    res,
    success: true,
    statusCode: 204,
  });
};

module.exports = {
  getProducts,
  postProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
