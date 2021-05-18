module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('areas', [
        {
            name: 'Hoang Mai',
            description: 'quan Hoang Mai',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'My Dinh',
            description: 'quan My dinh',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Cau Giay',
            description: 'quan Cau Giay',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('areas', null, {})

  };
