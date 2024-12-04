const productModel = require("../models/product");

// Hàm phân trang
const paginate = async (model, page, limit) => {
  const skip = (page - 1) * limit;
  const products = await model.find().skip(skip).limit(limit); // Lấy sản phẩm với phân trang
  const total = await model.countDocuments(); // Tổng số sản phẩm

  return {
    products,
    total,
    totalPages: Math.ceil(total / limit),
  };
};

module.exports = {
  // Tạo sản phẩm mới
  createProduct: async (req, res) => {
    const body = req.body;
    const newProduct = await productModel.create(body);
    return res.status(201).json(newProduct);
  },

  // Lấy tất cả sản phẩm
  getProducts: async (req, res) => {
    try {
      // Kiểm tra xem có query phân trang không
      const page = parseInt(req.query.page) || 1;  // Trang hiện tại, mặc định là 1
      const limit = parseInt(req.query.limit) || 10;  // Số sản phẩm mỗi trang, mặc định là 10

      // Kiểm tra nếu không cần phân trang, trả về tất cả sản phẩm
      if (!req.query.page && !req.query.limit) {
        const products = await productModel.find(); // Lấy tất cả sản phẩm
        return res.status(200).json({
          products,
          total: products.length,
          totalPages: 1,
          currentPage: 1,
        });
      }

      // Nếu có phân trang, sử dụng paginate
      const result = await paginate(productModel, page, limit);
      return res.status(200).json({
        products: result.products,
        total: result.total,
        totalPages: result.totalPages,
        currentPage: page,
      });
    } catch (err) {
      res.status(500).json({ message: "Lỗi khi lấy danh sách sản phẩm", error: err.message });
    }
  },

  // Cập nhật sản phẩm
  updateProduct: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).json(updateProduct);
  },

  // Xóa sản phẩm
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    const deleteProduct = await productModel.findByIdAndDelete(id);
    return res.status(200).json(deleteProduct);
  },
};
