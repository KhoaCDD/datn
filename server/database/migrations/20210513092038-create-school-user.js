'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('school_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      schoolId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      createdBy: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedBy: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('school_users');
  }
};