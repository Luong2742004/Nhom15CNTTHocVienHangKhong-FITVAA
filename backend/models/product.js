const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    }
})

module.exports = mongoose.model("Product", productSchema);