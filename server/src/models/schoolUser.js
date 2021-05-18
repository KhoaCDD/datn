module.exports = (sequelize, DataTypes) => {
    const SchoolUser = sequelize.define('SchoolUser', {
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        schoolId: {
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
        tableName: 'school_users',
    });
    SchoolUser.associate = function (models) {
        SchoolUser.belongsTo(models.User, {
            as: 'user',
            targetKey: 'id',
            foreignKey: 'userId',
        });
        SchoolUser.belongsTo(models.School, {
            as: 'school',
            targetKey: 'id',
            foreignKey: 'schoolId',
        });
    };
    return SchoolUser;
};
