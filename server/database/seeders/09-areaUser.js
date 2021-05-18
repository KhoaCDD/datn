module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('area_users', [
        {
            userId: 1,
            areaId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 2,
            areaId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 3,
            areaId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 4,
            areaId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 2,
            areaId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 2,
            areaId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('area_users', null, {})

  };
