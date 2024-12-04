const categoryRouter = require("./category");
const productRouter = require("./product");
const authRouter = require("./auth");
const cartRouter = require("./cart");
const orderRouter = require("./order");
const productDetailRoutes = require("./productdetail");
const bodyParser = require('body-parser'); // Đảm bảo cài đặt body-parser
const cors = require('cors');

const errorHandle = require("../middlewares/error.handle")

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
    app.use("/api/products", productRouter);
    app.use("/api/auth", authRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/order", orderRouter);
    app.use("/api/productDetails", productDetailRoutes);

    app.use(errorHandle);

    app.use(cors());  // Cấu hình CORS nếu frontend và backend khác port
    app.use(bodyParser.json()); // Giúp parse dữ liệu từ body request
}