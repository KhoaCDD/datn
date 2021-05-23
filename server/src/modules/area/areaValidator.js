import { respondWithError } from '../../helpers/messageResponse';
import { ErrorCodes } from '../../helpers/constants';

const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const Joi = BaseJoi.extend(Extension);


export async function createValidator(req, res, next) {
    const { body } = req;
    const validSchema = Joi.object().keys({
        name: Joi.string().max(255).required(),
        description: Joi.string().max(255).allow('').allow(null),
        managerIds: Joi.array().items(Joi.number()).allow([]).required(),
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
    });
    const result = Joi.validate(body, updateValidSchema);

    if (result.error) {
        res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
        return;
    }
    next();
}


const getUserListValidSchema = Joi.object().keys({
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
