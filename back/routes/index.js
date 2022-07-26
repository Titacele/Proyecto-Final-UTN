var express = require('express');
var router = express.Router();

// Importamos nuestra api
const api = require('../api');

/* GET home page. */
router.get('/tareas', async (req, res) => {
  const tareas = await api.getTasks();
  res.send(tareas);
});

router.get('/tarea/:id', async (req, res) => {
  const tarea = await api.getTasksById(req.params.id);
  res.send(tarea);
});

router.get('/empleado/:id', async (req, res) => {
  const empleado = await api.getEmployeesById(req.params.id);
  res.send(empleado);
});

// Mostrar el listado en JSON de todos los empleados
router.get('/empleado', async (req, res) => {
  const empleados = await api.getEmployees();
  res.send(empleados);
});

// Mostrar el listado en JSON de todos los lugares
router.get('/lugares', async (req, res) => {
  const lugares = await api.getPlaces();
  res.send(lugares);
});

/* POST agregar-tarea */
router.post('/agregar-tarea', async (req, res) => {
  let {fecha, descripcion, empleadoId, lugarId} = req.body;
  console.log(fecha, descripcion, empleadoId, lugarId);

  const respuesta= await api.insertTasks(fecha, descripcion, empleadoId, lugarId);
  console.log(respuesta);

  res.status(200).send('ok');
});

/* POST agregar-empleado */
router.post('/agregar-empleado', async (req, res) => {
  let {nombreCompleto, dni} = req.body;
  console.log(nombreCompleto, dni);

  const respuesta= await api.insertEmployee(nombreCompleto, dni);
  console.log(respuesta);

  res.status(200).send('ok');
});

/* POST agregar-lugar */
router.post('/agregar-lugar', async (req, res) => {
  let {direccion, localidad, cliente} = req.body;
  console.log(direccion, localidad, cliente);

  const respuesta= await api.insertPlace(direccion, localidad, cliente);
  console.log(respuesta);

  res.status(200).send('ok');
});


/* GET buscar (Desde el frontend llamamos a: localhost:3000/api/buscar?termino=sarasa) */
router.get('/buscar', async (req, res) => {
  const { termino } = req.query;
  const results = await api.findTaskByDescription(termino);

  //Devuelvo el resultado de esa búsqueda en formato JSON
  res.send(results);
});

router.get('/buscar-empleadoId', async (req, res) => {
  const { termino } = req.query;
  const results = await api.findTaskByEmployee(termino);
  //Devuelvo el resultado de esa búsqueda en formato JSON
  res.send(results);
});




module.exports = router;
