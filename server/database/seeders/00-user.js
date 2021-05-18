const bCrypt = require('bcrypt');
module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
        {
            fullName: 'admin',
            phone: '535352525',
            email: 'cuducdangkhoa@gmail.com',
            password: bCrypt.hashSync('123456', bCrypt.genSaltSync(8), null),
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
        {
            fullName: 'user2',
            phone: '535352525',
            email: 'khoacdd@tokyotechlab.com',
            password: bCrypt.hashSync('123456', bCrypt.genSaltSync(8), null),
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
        {
            fullName: 'user3',
            phone: '535352525',
            email: 'khoacdd1@tokyotechlab.com',
            password: bCrypt.hashSync('123456', bCrypt.genSaltSync(8), null),
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
        {
            fullName: 'manager1',
            phone: '535352525',
            email: 'nhidt@tokyotechlab.com',
            password: bCrypt.hashSync('tt@1234', bCrypt.genSaltSync(8), null),
            role: 'teacher',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
        {
            fullName: 'manager1',
            phone: '535352525',
            email: 'phucpt@tokyotechlab.com',
            password: bCrypt.hashSync('tt@1234', bCrypt.genSaltSync(8), null),
            role: 'teacher',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
        {
            fullName: 'manager1',
            phone: '535352525',
            email: 'lylt@tokyotechlab.com',
            password: bCrypt.hashSync('tt@1234', bCrypt.genSaltSync(8), null),
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 1,
            updatedBy: 1,
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('users', null, {})

  };
