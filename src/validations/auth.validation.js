const Joi = require('joi');
const { password } = require('./custom.validation');

// TODO - test input schema

const login = {
  headers: Joi.object()
    .keys({
      Authorization: Joi.string(),
    })
    .unknown(true),
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().custom(password),
  }),
};

const token = {
  headers: Joi.object()
    .keys({
      Authorization: Joi.string().required(),
    })
    .unknown(true),
};

module.exports = { login, token };
