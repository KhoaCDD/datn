'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      schoolId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ipAddress: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    port: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 22,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    position: {
        type: Sequelize.ENUM('back', 'front'),
        allowNull: false,
        defaultValue: 'front',
    },
    relatedDeviceId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
    },
    configFolder: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    room: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        allowNull: false,
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    },
    processAt: {
        allowNull: true,
        type: Sequelize.DATE
    },
    syncScheduleAt: {
        allowNull: true,
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('devices');
  }
};