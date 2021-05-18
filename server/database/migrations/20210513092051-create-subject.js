'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('subjects');
  }
};