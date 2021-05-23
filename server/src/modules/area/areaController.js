import i18n from 'i18n';
import { ErrorCodes } from '../../helpers/constants';
import {
    respondSuccess,
    logSystemError,
    respondWithError
} from '../../helpers/messageResponse';
import { getAreas, getSchools } from './areaService'; 
import _ from 'lodash';

const models = require('../../models');
const areaAttributes = ['id', 'description', 'name'];

export async function getAreaList(req, res) {
    try {
        const areas = await getAreas(req.query);
        return res.json(
            respondSuccess({ items: areas.rows, totalItems: areas.count }),
        );
    } catch (error) {
        return logSystemError(res, error, 'userController - getList');
    }
}
export async function getSchoolsList(req, res) {
    try {
        const units = await getSchools(req.query);
        return res.json(
            respondSuccess({ units }),
        );
    } catch (error) {
        return logSystemError(res, error, 'userController - getShoolsList');
    }
}
export async function test(req, res) {
    try {
        const schools = await models.Grade.findOne({
            where : {
                id: req.query.id
            },
            include: 'school'
        });
        return res.json(
            respondSuccess({ schools }),
        );
    } catch (error) {
        return logSystemError(res, error, 'userController - getShoolsList');
    }
}
// export async function create(req, res) {
//     try {
//         let userData = _.pickBy(req.body); 
//         let user = await models.User.findOne({
//             where : {
//                 email: userData.email
//             }
//         });
//         if(user){
//             return res.json(respondWithError(ErrorCodes.ERROR_CODE_ITEM_EXIST, i18n.__('user.create.userExist'), {}));
//         }
//         user = await createUser(userData);
//         return res.json(respondSuccess({user}));
//     } catch (error) {
//         return logSystemError(res, error, 'userController - create');
//     }
// }
// export async function getDetail(req, res) {
//     try {
//         const { id } =req.params;
//         const user = await models.User.findByPk(id, {
//             attributes: userAttributes
//         });
//         return res.json(respondSuccess({user}));
//     } catch (error) {
//         return logSystemError(res, error, 'userController - getDetail');
//     }
// }
// export async function update(req, res) {
//     try {
//         const { id } = req.params;
//         const {
//             fullName, gender, phone, birthday,
//         } = req.body;
//         const user = await models.User.findByPk(id, {
//             attributes: ['id'], 
//         });
//         if(!user)
//         {
//             return res.json(respondWithError(ErrorCodes.ERROR_CODE_ITEM_NOT_EXIST, i18n.__('auth.login.notAUser'), {}));
//         }

//         const updatedUser = await updateUser(id, fullName, gender, phone, birthday);
//         return res.json(respondSuccess({
//             updatedUser
//         }));
//     } catch (error) {
//         return logSystemError(res, error, 'userController - update');
//     }
// }

// export async function updatePassword(req, res) {
//     try {
//         const { id } =req.params;
//         const { oldPassword, newPassword } = req.body;
//         let user = await models.User.findByPk(id, {
//             attributes: ['id', 'password'], //Phai lay ca id thi moi dung duoc save()
//         });
//         if(!user)
//         {
//             return res.json(respondWithError(ErrorCodes.ERROR_CODE_ITEM_NOT_EXIST, i18n.__('auth.login.notAUser'), {}));
//         }
//         if(!isValidPassword(user.password,oldPassword))
//         {
//             return res.json(respondWithError(ErrorCodes.ERROR_CODE_OLD_PASSWORD_NOT_CORRECT, i18n.__('auth.login.oldPasswordIsNotCorrect'), {}));
//         }
//         user.password = hashPassword(newPassword);
//         await user.save();
//         return res.json(respondSuccess());
//     } catch (error) {
//         return logSystemError(res, error, 'userController - updatePassword');
//     }
// }

// export async function deleteUser(req, res) {
//     try {
//         const { loginUser ={} } = req;
//         const { id } = req.params;
//         const user = await models.User.findByPk(id);
//         if(!user)
//         {
//             return res.json(respondWithError(ErrorCodes.ERROR_CODE_ITEM_NOT_EXIST, i18n.__('auth.login.notAUser'), {}));
//         }
//         await _delete(id, loginUser);
//         return res.json(respondSuccess());
//     } catch (error) {
//         return logSystemError(res, error, 'userController - deleteUser');
//     }
// }
