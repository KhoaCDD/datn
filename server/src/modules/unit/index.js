import { authenticate } from '../../middleware/auth';
import {
    getUnitList, getSchoolsList, test
} from './unitController';
// import {
//  getUserListValidator,
// } from './userValidator';

const express = require('express');

module.exports = (app) => {
    const router = express.Router();
    router.get('/', authenticate(), getUnitList);
    router.get('/schools', authenticate(), getSchoolsList);
    router.get('/test', authenticate(), test);
    // router.post('/', authenticate(), createValidator, create);
    // router.get('/:id', authenticate(), getDetail);
    // router.patch('/:id', authenticate(), updateValidator, update);
    // router.patch('/:id/password', authenticate(), updatePasswordValidator, updatePassword);
    // router.delete('/:id', authenticate(), deleteUser);
    app.use('/api/unit', router);
};
