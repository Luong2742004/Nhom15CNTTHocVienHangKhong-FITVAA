const mongoose = require("mongoose")

const cartScheme = mongoose.Schema({
    is_order: {
        type: Boolean,
        default: false
    },
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "account"
    },
    brands: [
        {
            product: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "product"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

module.exports = mongoose.model("cart", cartScheme);