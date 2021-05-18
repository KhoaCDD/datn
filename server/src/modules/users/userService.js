import _ from 'lodash';
import { error } from 'winston';
import { hashPassword, isValidPassword } from '../auth/authService';

const models = require('../../models');
const userAttributes = ['id', 'email', 'fullName', 'birthday', 'phone', 'gender'];

export async function  getUserList ( { name ='', gender='', page=1, limit=10 } ) {
  try {
    const users = await models.User.findAndCountAll({
        attributes: userAttributes,
        raw: true,
        where: {
            fullName: {
                [models.Op.like]: `%${name}%`
            },
            gender: {
                [models.Op.startsWith]: gender
            }
        },
        limit: +limit,
        offset: (page-1)* +limit,
        order: [
            ['updatedAt', 'DESC']
        ],
    });
    return users;
  } catch (error) {
      throw error;
  }
}
export async function getUserDetail (userId) {
    const user = await models.User.findByPk(userId, {
        attributes: ['id', 'email', 'fullName', 'gender', 'birthday'],
        raw: true,
    });
    return user;
};
export async function createUser (data) {
    try {
        let userData = _.pickBy(data); // Loai bo cac propeties co value null, ''
        userData.password = hashPassword(userData.password);
        const user = await models.User.create(userData);
        const newUser = await models.User.findByPk(user.id, {
            attributes: userAttributes,
        });
        return newUser;
    } catch (error) {
        throw error;
    }
};
export async function updateUser (id, fullName, gender, phone, birthday) {
    try {
        const user = await models.User.update({
        fullName: fullName,
        gender : gender,
        birthday : birthday,
        phone: phone,
        },
        {
            where: {
                id: id,
            }
        });
        const updatedUser = await models.User.findByPk(id, {
            attributes: ['id', 'email', 'fullName', 'gender', 'birthday'],
        });
        return updatedUser;
    } catch (error) {
        throw error;
    }
};
export async function _delete(id, loginUser) {
    try {
        await models.User.update({
            updatedBy: loginUser.id,
            }, 
            {
            where: {
                id,
            },
        });
        await models.User.destroy({
            where: {
              id: id
            }
        });
    } catch (error) {
        throw error;
    }
};
