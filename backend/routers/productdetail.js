const express = require("express");
const router = express.Router();
const { 
  createProductDetail, 
  getProductDetailById, 
  getProductDetailByProductId, // Thêm endpoint cho product_id
  updateProductDetail, 
  deleteProductDetail 
} = require("../controllers/productdetail");

// Tạo mới chi tiết sản phẩm
router.post("/", createProductDetail);

// Lấy chi tiết sản phẩm theo `productDetailId` (theo `_id`)
router.get("/:productDetailId", getProductDetailById);

// Lấy chi tiết sản phẩm theo `product_id`
router.get("/product-by-productId/:productId", getProductDetailByProductId);

// Cập nhật chi tiết sản phẩm
router.patch("/:productDetailId", updateProductDetail);

// Xóa chi tiết sản phẩm
router.delete("/:productDetailId", deleteProductDetail);

module.exports = router;
