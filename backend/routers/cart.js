const express = require("express");
const router = express.Router();

const {
    addToCart,
    getCart,
    deleteBrands,
    updateBrands
} = require("../controllers/cart");

router
    .route("/")
    .post(addToCart)

router
    .route("/account/:account_id")
    .get(getCart);

router
    .route("/account/:account_id/brand/:brand_id")
    .delete(deleteBrands)
    .patch(updateBrands);

module.exports = router;