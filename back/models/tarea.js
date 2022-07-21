module.exports = (sequelize, DataTypes) => {
    const Tarea = sequelize.define('tarea', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: DataTypes.DATE,
        descripcion: DataTypes.STRING(1000),
    }, {
        freeTableName: true,
        timestamps: false
    });

    // Conectarlo con la tabla de empleado y lugar
    Tarea.associate = (models) => {
        Tarea.belongsTo(models.empleado);
        Tarea.belongsTo(models.lugar);
    }

    return Tarea;
}
