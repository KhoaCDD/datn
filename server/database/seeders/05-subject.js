module.exports = {
    up: (queryInterface) => {
    return queryInterface.bulkInsert('subjects', [
        {
            subject: 'Math',
            description: 'DO NOT DELETE THIS',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            subject: 'English',
            description: 'DO NOT DELETE THIS',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            subject: 'Japanese',
            description: 'DO NOT DELETE THIS',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            subject: 'Science',
            description: 'DO NOT DELETE THIS',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface) =>
  queryInterface.bulkDelete('subjects', null, {})

  };
