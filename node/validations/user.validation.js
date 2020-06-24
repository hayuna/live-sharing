const Joi = require('@hapi/joi')

const validateParam = (schema, name) => {
    return (req, res, next) => {
        const result = schema.validate({
            param: req.params[name]
        })
        if (result.error) {
            return res.status(400).json(result.error.details[0].message)
        } else {
            if (!req.value) req.value = {}
            if (!req.value.params) req.value.params = {}
            req.value.params[name] = result.value.param
            next()
        }
    }
}

const validateBody = schema => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        if (result.error) {
            return res.status(400).json(result.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value.body) req.value.body = {}
            req.value.body = result.value
            next()
        }
    }
}

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(25)
        .required(),
    email: Joi.string()
        .email()
        .required()
})
const schemaId = Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-Z]{24}$/).required()
})

module.exports = { schema, validateBody, validateParam, schemaId }
