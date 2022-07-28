// Importamos los operadores que nos permiten hacer consultas más interesantes
const { Op } = require("sequelize");

// Traemos la DB
const db = require('../models');

// SELECT * FROM tareas
// JOIN ..... empleado
// JOIN ..... lugar
const getTasks = async () => {
    const tareas = await db.tarea.findAll({
                            include: db.empleado,
                            include: db.lugar,
                            order: ['fecha'],
                        })
                        .then(results => {
                            return results;
                        });

    return tareas;
}

const getEmployees = async () => {
    const empleados = await db.empleado.findAll({
                        order: ['nombreCompleto'],
                    }).then(results => {
                        return results;
                    });

    return empleados;
}

const getPlaces = async () => {
    const lugares = await db.lugar.findAll({
                        order: ['localidad'],
                    }).then(results => {
                        return results;
                    });

    return lugares;
}

const getTasksById = async (id) => {
    const tarea = await db.tarea.findByPk(id, {include: db.empleado,
                                               include: db.lugar })
                    .then(result => {
                        return result;
                    });

    return tarea;
};

const getEmployeesById = async (id) => {
    const empleado = await db.empleado.findByPk(id)
                    .then(result => {
                        return result;
                    });

    return empleado;
};

// WHERE descripcion LIKE "%termino%"
const findTaskByDescription = async (termino) => {
    const tareas = await db.tarea.findAll({
                            include: db.empleado,
                            include: db.lugar,
        where: {
            descripcion: {
                [Op.substring]: termino,
            }
        }
    }).then(result => {
        return result;
    });

    return tareas;
}

// WHERE empleado LIKE "%termino%"
const findTaskByEmployee = async (termino) => {
    const tareas = await db.tarea.findAll({
                            include: db.empleado,
                            include: db.lugar,
        where: {
            descripcion: {
                [Op.substring]: termino,
            }
        }
    }).then(result => {
        return result;
    });

    return tareas;
}


const insertTasks = async (fecha, descripcion, empleadoId, lugarId) => {
    const tarea = await db.tarea.create({
        fecha, descripcion, empleadoId, lugarId
    });
    
    return tarea;
}

const insertEmployee = async (nombreCompleto, dni) => {
    const tarea = await db.empleado.create({
        nombreCompleto, dni
    });
    
    return empleado;
}

const insertPlace = async (direccion, localidad, cliente) => {
    const tarea = await db.empleado.create({
        direccion, localidad, cliente
    });
    
    return empleado;
}


module.exports = {
    getTasks,
    getEmployees,
    getEmployeesById,
    getPlaces,
    getTasksById,
    findTaskByDescription,
    insertTasks,
    findTaskByEmployee,
    insertEmployee,
    insertPlace
}
