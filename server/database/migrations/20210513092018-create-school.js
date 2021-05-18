'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      areaId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: true,
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
    return queryInterface.dropTable('schools');
  }
};