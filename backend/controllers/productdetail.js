const productDetailModel = require("../models/productdetail");

module.exports = {
  // Tạo mới productDetail
  createProductDetail: async (req, res) => {
    const { product_id, name, category, price, description, features, img } = req.body;

    try {
      const newProductDetail = new productDetailModel({
        product_id,
        name,
        category,
        price,
        description,
        features,
        img,
      });

      await newProductDetail.save();
      return res.status(201).json(newProductDetail);
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi khi tạo chi tiết sản phẩm",
        error: error.message,
      });
    }
  },

  // Lấy chi tiết sản phẩm theo productDetailId
  getProductDetailById: async (req, res) => {
    const { productDetailId } = req.params;

    try {
      const productDetail = await productDetailModel.findById(productDetailId);
      if (!productDetail) {
        return res.status(404).json({ message: "Không tìm thấy chi tiết sản phẩm" });
      }
      return res.status(200).json(productDetail);
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi khi lấy chi tiết sản phẩm",
        error: error.message,
      });
    }
  },

  // Lấy chi tiết sản phẩm theo product_id
  getProductDetailByProductId: async (req, res) => {
    const { productDetailId } = req.params;

    try {
      const productDetail = await productDetailModel.findById(productDetailId);
      if (!productDetail) {
        return res.status(404).json({ message: "Không tìm thấy chi tiết sản phẩm cho sản phẩm này" });
      }
      return res.status(200).json(productDetail);
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi khi lấy chi tiết sản phẩm",
        error: error.message,
      });
    }
  },

  // Cập nhật productDetail
  updateProductDetail: async (req, res) => {
    const { productDetailId } = req.params;
    const { name, category, price, description, features, img } = req.body;

    try {
      const updatedProductDetail = await productDetailModel.findByIdAndUpdate(
        productDetailId,
        { name, category, price, description, features, img },
        { new: true }
      );

      if (!updatedProductDetail) {
        return res.status(404).json({ message: "Không tìm thấy chi tiết sản phẩm để cập nhật" });
      }

      return res.status(200).json(updatedProductDetail);
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi khi cập nhật chi tiết sản phẩm",
        error: error.message,
      });
    }
  },

  // Xóa productDetail
  deleteProductDetail: async (req, res) => {
    const { productDetailId } = req.params;

    try {
      const deletedProductDetail = await productDetailModel.findByIdAndDelete(productDetailId);

      if (!deletedProductDetail) {
        return res.status(404).json({ message: "Không tìm thấy chi tiết sản phẩm để xóa" });
      }

      return res.status(200).json({ message: "Chi tiết sản phẩm đã bị xóa" });
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi khi xóa chi tiết sản phẩm",
        error: error.message,
      });
    }
  },
};
