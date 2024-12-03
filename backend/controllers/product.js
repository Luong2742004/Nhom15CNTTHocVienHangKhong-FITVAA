const productModel = require("../models/product");

module.exports = {
    createProduct: async( req, res)=>{
        const body = req.body;
        const newProduct = await productModel.create(body);
        return res.status(201).json(newProduct);
    },
    getProducts: async (req, res) => {
        try {
          const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là 1
          const limit = parseInt(req.query.limit) || 10; // Số sản phẩm mỗi trang, mặc định là 10
          const skip = (page - 1) * limit; // Bỏ qua số lượng sản phẩm ở các trang trước
    
          const products = await productModel.find().skip(skip).limit(limit); // Lấy sản phẩm với phân trang
          const total = await productModel.countDocuments(); // Tổng số sản phẩm
    
          res.status(200).json({
            products,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
          });
        } catch (err) {
          res.status(500).json({ message: "Lỗi khi lấy danh sách sản phẩm", error: err.message });
        }
      },    
    updateProduct: async(req, res)=>{
        const id = req.params.id;
        const body = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updateProduct);
    },
    deleteProduct: async(req, res)=>{
        const id = req.params.id;
        const deleteProduct = await productModel.findByIdAndDelete(id);
        return res.status(200).json(deleteProduct);
    }
}