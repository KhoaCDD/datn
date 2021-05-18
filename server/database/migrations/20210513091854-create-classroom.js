'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      schoolId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      description: {
          type: Sequelize.STRING,
          allowNull: true,
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
    return queryInterface.dropTable('classrooms');
  }
};