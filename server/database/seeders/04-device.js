module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('devices', [
        {
            schoolId: 1,
            name: '60.113.213.164',
            description: 'REAL DEVICE - Nha Anh Nghia - N0 US3 FR0M 19 - 7',
            ipAddress: '60.113.213.164',
            port: '22',
            username: 'shozemi',
            password: 'szyokohama55!',
            status: 'active',
            configFolder: '',
            room: 'A1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            schoolId: 2,
            name: 'Jetson Nano (Fujisawa)',
            description: 'REAL DEVICE',
            ipAddress: '183.77.181.221',
            port: '22',
            username: 'shozemi',
            password: 'fake!',
            status: 'active',
            configFolder: '',
            room: 'A2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            schoolId: 3,
            name: 'Jetson Nano (Ofuna)',
            description: 'REAL DEVICE',
            ipAddress: '183.77.181.222',
            port: '22',
            username: 'fake',
            password: 'fake!',
            status: 'active',
            configFolder: '',
            room: 'A3',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            schoolId: 4,
            name: '4th Device',
            description: 'first',
            ipAddress: '10.0.12.19',
            port: '255',
            username: 'whatever',
            password: 'password',
            status: 'active',
            configFolder: '',
            room: 'A4',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('devices', null, {})

  };
