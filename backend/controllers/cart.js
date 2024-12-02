const cartModel = require("../models/cart");

module.exports = {
    addToCart: async(req, res)=>{
        const {account_id, product_id, quantity} = req.body;
        let cart = await cartModel.findOne({
            account_id: account_id,
            is_order: false
        })
        // lan dau them vao gio hang
        if (!cart){
            cart = await cartModel.create({
                account_id: account_id,
                brands: [{product: product_id, quantity: quantity || 1}]
            });
        } else {
            const brands = cart.brands;
            const isExists = brands.find((v)=> v.product == product_id);
            if (isExists){
                const brands2 = brands.map((v)=> {
                    if (v.product == product_id){
                        v.quantity++;
                    }
                    return v;
                }) 

                cart = await cartModel.findByIdAndUpdate(cart._id, {brands2}, {new: true});
            } else {
                 brands.push({product: product_id, quantity: quantity || 1});
            }
            
            
            cart = await cartModel.findByIdAndUpdate(cart._id, {brands}, {new: true});
        }

        return res.status(201).json(cart);
    },
    getCart: async(req, res)=>{
        const account_id = req.params.account_id;
        const cart = await cartModel.findOne({
            is_order: false,
            account_id: account_id
        }).populate("brands.product");

        return res.status(200).json(cart || {}); 
    },
    deleteBrands: async(req, res)=>{
        const account_id = req.params.account_id;
        const brand_id = req.params.brand_id; 
        let cart = await cartModel.findOne({
            is_order: false,
            account_id: account_id
        });

        const brands = cart.brands.filter((v)=> v.id != brand_id);

        cart = await cartModel.findByIdAndUpdate(cart._id, {brands}, {new: true});

        return res.status(200).json(cart);
    },
    updateBrands: async(req, res)=>{
        const account_id = req.params.account_id;
        const brand_id = req.params.brand_id; 
        const quantity = req.body.quantity;
        let cart = await cartModel.findOne({
            is_order: false,
            account_id: account_id
        });

        const brands = cart.brands.map((v)=>{
            if(v._id == brand_id){
                v.quantity = quantity;
            } 
            return v;
        })
        cart = await cartModel.findByIdAndUpdate(cart._id, {brands}, {new: true});

        return res.status(200).json(cart);
    }
}