import _ from 'lodash';

const models = require('../../models');
const areaAttributes = ['id', 'description', 'name'];

export async function  getAreas ( { name ='', page=1, limit=10 } ) {
  try {
    const areas = await models.Area.findAndCountAll({
        attributes: areaAttributes,
        raw: true,
        where: {
            name: {
                [models.Op.like]: `%${name}%`
            },
        },
        limit: +limit,
        offset: (page-1)* +limit,
        order: [
            ['updatedAt', 'DESC']
        ],
    });
    return areas;
  } catch (error) {
      throw error;
  }
}
export async function getSchools ({ id = '', name ='', page=1, limit=10 }) {
    try {
        const units = await models.Unit.findOne({
            where : {
                id: id
            },
            include: 'schools'
        });
        return units;
      } catch (error) {
          throw error;
      }
};
export async function createUnit (data) {
    try {
        let unitData = _.pickBy(data); // Loai bo cac propeties co value null, ''
        const unit = await models.Unit.create(unitData);
        const newunit = await models.unit.findByPk(unit.id, {
            attributes: unitAttributes,
        });
        return newUnit;
    } catch (error) {
        throw error;
    }
};
// export async function updateUser (id, fullName, gender, phone, birthday) {
//     try {
//         const user = await models.User.update({
//         fullName: fullName,
//         gender : gender,
//         birthday : birthday,
//         phone: phone,
//         },
//         {
//             where: {
//                 id: id,
//             }
//         });
//         const updatedUser = await models.User.findByPk(id, {
//             attributes: ['id', 'email', 'fullName', 'gender', 'birthday'],
//         });
//         return updatedUser;
//     } catch (error) {
//         throw error;
//     }
// };
// export async function _delete(id, loginUser) {
//     try {
//         await models.User.update({
//             updatedBy: loginUser.id,
//             }, 
//             {
//             where: {
//                 id,
//             },
//         });
//         await models.User.destroy({
//             where: {
//               id: id
//             }
//         });
//     } catch (error) {
//         throw error;
//     }
// };
