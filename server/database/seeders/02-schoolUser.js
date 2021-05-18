module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('school_users', [
        {
            userId: 1,
            schoolId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 2,
            schoolId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 3,
            schoolId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 4,
            schoolId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 3,
            schoolId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 4,
            schoolId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('school_users', null, {})

  };
