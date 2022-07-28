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

  findEmployeeTasks (termino: string) {
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

}

