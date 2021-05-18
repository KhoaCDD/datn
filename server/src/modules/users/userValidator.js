import { respondWithError } from '../../helpers/messageResponse';
import { ErrorCodes } from '../../helpers/constants';

const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const Joi = BaseJoi.extend(Extension);


export async function createValidator(req, res, next) {
    const { body } = req;
    const validSchema = Joi.object().keys({
        email: Joi.string().email().required(),
        fullName: Joi.string().max(255).required(),
        password: Joi.string().min(6).max(20).required(),
        gender: Joi.string().valid('male', 'female', 'other').required(),
        birthday: Joi.date().format('YYYY-MM-DD').allow(null,'').optional(),
        phone: Joi.string().allow(null,'').optional(),
    });
    const result = Joi.validate(body, validSchema);

    if (result.error) {
        res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
        return;
    }
    next();
}

export async function updateValidator(req, res, next) {
    const { body } = req;
    const updateValidSchema = Joi.object().keys({
        fullName: Joi.string().max(255).required(),
        gender: Joi.string().valid('male', 'female', 'other').required(),
        birthday: Joi.date().format('YYYY-MM-DD').optional(),
        phone: Joi.string().allow(null,'').optional(),
    });
    const result = Joi.validate(body, updateValidSchema);

    if (result.error) {
        res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
        return;
    }
    next();
}

export async function updatePasswordValidator(req, res, next) {
    const { body } = req;
    const updatePasswordValidSchema = Joi.object().keys({
        oldPassword: Joi.string().min(6).max(20).required(),
        newPassword: Joi.string().min(6).max(20).required(),
        rePassword: Joi.string().valid(Joi.ref('newPassword')).required(),
    });
    const result = Joi.validate(body, updatePasswordValidSchema);

    if (result.error) {
        res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
        return;
    }
    next();
}

const getUserListValidSchema = Joi.object().keys({
    name: Joi.string().max(255).allow(null,''),
    gender: Joi.string().valid('male', 'female', 'other').allow(null,''),
    page: Joi.number().min(1).max(255).allow(null,''),
    limit: Joi.number().min(1).max(255).allow(null,''),
});

export async function getUserListValidator(req, res, next) {
    const { query } = req;

    const result = Joi.validate(query, getUserListValidSchema);

    if (result.error) {
        res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
        return;
    }
    next();
}
