module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        areaId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
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
        tableName: 'schools',
    });
    School.associate = function (models) {
        School.belongsTo(models.Area, {
            as: 'area',
            targetKey: 'id',
            foreignKey: 'areaId',
        });
        School.hasMany(models.SchoolUser, {
            as: 'managers',
            foreignKey: 'schoolId',
            sourceKey: 'id',
        });
        School.hasMany(models.SchoolUser, {
            as: 'teachers',
            foreignKey: 'schoolId',
            sourceKey: 'id',
        });
    };
    return School;
};
