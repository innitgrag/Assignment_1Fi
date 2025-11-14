const mongoose = require("mongoose");

const emiPlanSchema = new mongoose.Schema({
  tenureMonths: Number,
  monthly: Number,
  interestRate: Number,
  cashback: Number,
});

const variantSchema = new mongoose.Schema({
  name: String,
  extraPrice: Number,
  emiPlans: [emiPlanSchema],
});

const productSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  name: String,
  mrp: Number,
  price: Number,
  imageUrl: String,
  variants: [variantSchema],
});

module.exports = mongoose.model("Product", productSchema);
