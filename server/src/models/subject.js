module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        subject: {
            allowNull: false,
            type: DataTypes.STRING,
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
        tableName: 'subjects',
    });
    // eslint-disable-next-line no-unused-vars
    Subject.associate = function (models) {   
    };
    return Subject;
};
