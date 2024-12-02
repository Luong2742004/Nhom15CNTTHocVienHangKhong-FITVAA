const categoryRouter = require("./category");
const productRouter = require("./product");
const accountRouter = require("./account");
const cartRouter = require("./cart");
const orderRouter = require("./order");

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
    app.use("/api/products", productRouter);
    app.use("/api/accounts", accountRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/order", orderRouter);
}