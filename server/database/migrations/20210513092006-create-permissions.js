'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM(
            'admin',
            'supervisor',
            'school_manager',
            'teacher',
            'business_unit_leader',
            'academic_affairs',
        ),
        allowNull: false,
      },
      permission: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      createdBy: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      updatedBy: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('permissions');
  }
};