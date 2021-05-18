module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define(
        'Permission',
        {
            id: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM(
                    'admin',
                    'supervisor',
                    'school_manager',
                    'teacher',
                    'business_unit_leader',
                ),
                allowNull: true,
            },
            permission: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            createdBy: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                allowNull: true,
            },
            updatedBy: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                allowNull: true,
            },
        },
        {
            tableName: 'permissions',
        },
    );
    Permission.associate = function () {
        // associations can be defined here
    };
    return Permission;
};
