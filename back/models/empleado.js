module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define('empleado', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCompleto: DataTypes.STRING(100),
        dni: DataTypes.INTEGER,
        },
        {
            freezeTableName: true,
            timestamps: false
        });
        
    Empleado.associate = (models) => {
        Empleado.hasMany(models.tarea);
    };
    return Empleado;
}
    