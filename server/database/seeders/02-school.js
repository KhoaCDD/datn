module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('schools', [
        {   
            areaId: 1,
            name: 'VAS',
            address: 'My Dinh',
            phone: '0975492564',
            email: 'cuducdangkhoa@gmail.com',
            description: 'Quoc te Viet Uc My Dinh',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   
            areaId: 2,
            name: 'VAS Cau Giay',
            address: 'Cau Giay',
            phone: '0812345678',
            email: 'khoacdd@gmail.com',
            description: 'Quoc te Viet Uc Cau Giay',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   
            areaId: 3,
            name: 'VAS Hoang Mai',
            address: '36 Hoang Mai',
            phone: '0812345678',
            email: 'khoacdd@tokyotechlab.com',
            description: 'Quoc Te Viet Uc Hoang Mai',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   
            areaId: 2,
            name: 'VAS Dong Da',
            address: '23 Dong Da',
            phone: '0812345678',
            email: 'khoacdd@tokyotechlab.com',
            description: 'Quoc Te Viet Uc Dong Da',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   
            areaId: 1,
            name: 'Greenfield Doan Thi Diem',
            address: '123 Doan Thi Diem',
            phone: '0812345678',
            email: 'abc@gmail.com',
            description: 'Trường Phổ thông Đoàn Thị Điểm Greenfield',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('schools', null, {})

  };
