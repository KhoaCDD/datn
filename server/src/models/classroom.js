module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define('Classroom', {
        schoolId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
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
        tableName: 'classrooms',
    });
    Classroom.associate = function (models) {
        Classroom.belongsTo(models.School, {
            as: 'school',
            targetKey: 'id',
            foreignKey: 'schoolId',
        });
    };
    return Classroom;
};
