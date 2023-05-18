const Joi = require('joi');

const id = Joi.number().integer();
const names = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
// const role = Joi.string().min(5)

const userInfoSchema = Joi.object({
    firstName: names.required(),
    lastName: names.required(),
    email: email.required(),
    password: password.required(),
    // role,
});

const patchUserSchema = Joi.object({
    firstName: names,
    lastName: names,
    email,
    password,
    // role,
});

const userIdSchema = Joi.object({
    id: id.required(),
});

module.exports = { userInfoSchema, patchUserSchema, userIdSchema };