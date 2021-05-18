'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      birthday: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('male', 'female', 'other'),
        defaultValue: 'other',
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'supervisor', 'school_manager', 'teacher', 'business_unit_leader', 'parttime_teacher'),
        defaultValue: 'admin',
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
    return queryInterface.dropTable('users');
  }
};