const express = require("express")
const router = express.Router()

const asyncMiddleware = require("../middlewares/async.middleware")

const {
    login,
    register,
} = require("../controllers/auth")

router.route("/register").post(asyncMiddleware(register))
router.route("/login").post(asyncMiddleware(login))

module.exports = router; 