module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        birthday: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        gender: {
            allowNull: false,
            type: DataTypes.ENUM('male', 'female', 'other'),
            defaultValue: 'other',
        },
        role: {
            allowNull: false,
            type: DataTypes.ENUM('admin', 'supervisor', 'school_manager', 'teacher', 'business_unit_leader', 'parttime_teacher'),
            defaultValue: 'admin',
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
        tableName: 'users',
    });
    User.associate = function (models) {
        User.belongsToMany(models.Area, {
            as: 'areas',
            through: models.AreaUser,
            otherKey: 'areaId',
            foreignKey: 'userId',
        });
        User.belongsToMany(models.School, {
            as: 'schools',
            thourgh: models.SchoolUser,
            otherKey: 'schoolId',
            foreignKey: 'userId'            
        });
    };
    return User;
};
