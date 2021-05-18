module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define(
        'Class',
        {
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
        },
        {
            tableName: 'classes',
        },
    );
    // eslint-disable-next-line no-unused-vars
    Class.associate = function (models) {};
    return Class;
};
