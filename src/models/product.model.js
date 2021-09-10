const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: String,
    quantity: Number,
    isbn: String,
    author: String,
    bookCoverURL: String,
    description: String,
    price: {
      value: Number,
      unit: String,
    },
    genre: String,
    language: String,
    pages: Number,
    dimensions: {
      width: Number,
      length: Number,
      height: Number,
      unit: String,
    },
    format: String,
    weight: {
      value: Number,
      unit: String,
    },
    publication: {
      publisher: String,
      date: String,
    },
    review: {
      popular: [
        {
          name: String,
          review: String,
        },
      ],
    },
    rating: {
      5: Number,
      4: Number,
      3: Number,
      2: Number,
      1: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', productSchema);
