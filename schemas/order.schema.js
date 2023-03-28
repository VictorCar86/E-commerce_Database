const Joi = require('joi');

const number = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
    customerId: number.required(),
});

const createItemSchema = Joi.object({
    productAmount: number.required(),
    productId: number.required(),
});

const orderIdSchema = Joi.object({
    id: number.required(),
})

module.exports = {
	orderIdSchema,
	createOrderSchema,
    createItemSchema
};