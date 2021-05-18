module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define('Area', {
        name: {
            type: DataTypes.STRING,
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
        tableName: 'areas',
    });
    // eslint-disable-next-line no-unused-vars
    Area.associate = function (models) {
        Area.hasMany(models.AreaUser, {
            as: 'managers',
            foreignKey: 'areaId',
            sourceKey: 'id',
        });
        Area.hasMany(models.School, {
            as: 'school',
            foreignKey: 'areaId',
            sourceKey: 'id',
        });
    };
    return Area;
};
