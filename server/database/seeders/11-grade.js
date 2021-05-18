module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('grades', [
        {
            name: 'Khoi 10',
            description: 'Khoi 10',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Khoi 11',
            description: 'Khoi 12',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Khoi 12',
            description: 'Khoi 12',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('area_users', null, {})

  };
