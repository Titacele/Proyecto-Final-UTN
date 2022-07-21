module.exports = (sequelize, DataTypes) => {
    const Lugar = sequelize.define('lugar', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direccion: DataTypes.STRING(150),
        localidad: DataTypes.STRING(100),
        cliente: DataTypes.STRING(100,)
        },
        {
            freezeTableName: true,
            timestamps: false
        });
        
    Lugar.associate = (models) => {
        Lugar.hasMany(models.tarea);
    };
    return Lugar;
}
    