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

  getEmpleados () {
    return this.http.get('/api/empleado');
  }

  getIdEmpleado () {
    return this.http.get('/empleado/:id');
  }

  findEmpleado (termino: string) {
    return this.http.get(`/api/buscar?termino=${termino}`);
  }

  getLugares () {
    return this.http.get('/api/lugares');
  }

  insertarTarea () {
    return this.http.post('/agregar-tarea', tareas);
  }

}

