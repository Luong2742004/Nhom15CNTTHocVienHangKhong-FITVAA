const mongoose = require("mongoose");

const productDetailSchema = mongoose.Schema({
  product_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",  
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category"
},
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String], // Mảng các tính năng nổi bật
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProductDetail", productDetailSchema);
