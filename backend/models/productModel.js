const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, require: [true, "Please enter product name"] },
  description: {
    type: String,
    require: [true, "Please enter product Description"],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, "Please enter product Description"],
    maxLength: [8, "price cannot exceed 8 characters"],
  },
  ratings: { type: Number, default: 0 },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please enter product category"],
  },
  Stock: {
    type: Number,
    require: [true, "Please enter product stock"],
    maxLength: [4, "Stock cannot exceed 4 caharacters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
