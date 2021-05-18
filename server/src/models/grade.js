module.exports = (sequelize, DataTypes) => {
    const Grade = sequelize.define('Grade', {
        name: {
            type: DataTypes.STRING,
        },
        description: {
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
    }, {
        tableName: 'grades',
    });
    Grade.associate = function (models) {        
    };
    return Grade;
};
