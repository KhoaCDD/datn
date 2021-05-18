module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
        schoolId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        port: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 22,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },
        processAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        syncScheduleAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        createdBy: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
    }, {
        tableName: 'devices',
    });
    Device.associate = function (models) {
        Device.belongsTo(models.School, {
            as: 'school',
            targetKey: 'id',
            foreignKey: 'schoolId',
        });
        Device.belongsTo(models.Classroom, {
            as: 'room',
            targetKey: 'id',
            foreignKey: 'classroomId',
        });
    };
    return Device;
};
