const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const accountModel = require("../models/account")
const accountValid = require("../validations/account")
const ErrorResponse = require("../helpers/ErrorResponse")

module.exports = {
    login: async(req, res)=>{
        const { username, password } = req.body;
        
        const account = await accountModel.findOne({
            username: username
        })
        if (!account){
            throw new ErrorResponse(400, "Tài khoản hoặc mật khẩu không đúng");
        }

        const checkPass = bcryptjs.compareSync(password, account.password);
        if (!checkPass){
            throw new ErrorResponse(400, "Tài khoản hoặc mật khẩu không đúng");
        }

        const token = jwt.sign(
            { userId: account._id, role: account.role },
            process.env.JWT_SECRET,  
            { expiresIn: "1h" }    
        );

        return res.status(200).json({
            statusCode: 200,
            message: "Đăng nhập thành công",
            token: token
        })

    },
    register: async(req, res)=>{
        const body = req.body;
        const {error, value} = accountValid(body);
        if (error){
            return res.status(400).json({
                statusCode: 400,
                message: error.message
            })
        }

        //luu lai value
        const account = await accountModel.create(value);
        return res.status(201).json(account);
    },
}