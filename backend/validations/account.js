const Joi = require('joi');

const accountSchemaRegisterValid = Joi.object({
    username: Joi.string().alphanum().min(6).message("Username phải trên 6 ký tự").max(20).message("Username phải nhỏ hơn 20 ký tự").required(),
    password: Joi.string().min(6).max(20).required(),
    phone: Joi.string().required()
})

module.exports = (account) => accountSchemaRegisterValid.validate(account)