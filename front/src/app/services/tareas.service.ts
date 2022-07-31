import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks () {
    return this.http.get('/api/tareas');
  }

  findTasks (termino: string) {
    return this.http.get(`/api/buscar?termino=${termino}`);
  }

  findTasksbyEmpleadoId (resultado: number) {
    return this.http.get(`/api/buscar-empleadoId?termino=${resultado}`);
  }


  findEmployeeTasks (termino: number) {
    return this.http.get(`/api/buscar-empleado?termino=${termino}`);
  }

  getEmpleados () {
    return this.http.get('/api/empleado');
  }

  getIdEmpleado () {
    return this.http.get('/api/empleado/:id');
  }

  findEmpleado (termino: string) {
    return this.http.get(`/api/buscar?termino=${termino}`);
  }

  getLugares () {
    return this.http.get('/api/lugares');
  }

insertarTarea ( fecha: Date, descripcion: string, empleadoId: any, lugarId: any ) {
  console.log( descripcion );
  return this.http.post('/api/agregar-tarea', {
    fecha: fecha,
    descripcion: descripcion,
    empleadoId : empleadoId,
    lugarId: lugarId
  });
 }

 insertarLugar ( direccion: string, localidad: string, cliente: string ) {
  console.log( direccion );
  return this.http.post('/api/agregar-lugar', {
    direccion: direccion,
    localidad : localidad,
    cliente: cliente
  });
 }

 insertarEmpleado ( nombre: any, dni: any ) {
  console.log( nombre );
  return this.http.post('/api/agregar-empleado', {
    nombre: nombre,
    dni: dni,
  });
 }




}

