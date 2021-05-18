module.exports = (sequelize, DataTypes) => {
    const AreaUser = sequelize.define('AreaUser', {
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        areaId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
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
        tableName: 'area_users',
    });
    AreaUser.associate = function (models) {
        AreaUser.belongsTo(models.User, {
            as: 'user',
            targetKey: 'id',
            foreignKey: 'userId',
        });
        AreaUser.belongsTo(models.Area, {
            as: 'area',
            targetKey: 'id',
            foreignKey: 'areaId',
        });
    };
    return AreaUser;
};
