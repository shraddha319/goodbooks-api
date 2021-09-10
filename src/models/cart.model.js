const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = model('Cart', cartSchema);
