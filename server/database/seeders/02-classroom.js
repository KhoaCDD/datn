module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('classrooms', [
        {
            name: 'Room 10A1 floor 1',
            schoolId: 1,
            description: 'Class 10A1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Room 10A2 floor 1',
            schoolId: 1,
            description: 'Class 10A2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Room 10A3 floor 1',
            schoolId: 1,
            description: 'Class 10A3',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Room 11A1 floor 1',
            schoolId: 2,
            description: 'Class 11A1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Room 11A2 floor 1',
            schoolId: 2,
            description: 'Class 11A2',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Room 11A3 floor 1',
            schoolId: 2,
            description: 'Class 11A3',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('classes', null, {})

  };
