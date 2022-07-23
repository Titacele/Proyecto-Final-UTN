import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  agregarForm = new FormGroup({
    fecha: new FormControl(),
    descripcion: new FormControl()

  });

  constructor(
    private tareasService: TareasService,
  ) { }

  empleados: any;
  lugares: any;

  mostrarEmpleados () {
    this.tareasService.getEmpleados().subscribe((empleados: any) => {
      console.log(empleados);
      this.empleados = empleados;
    });
  }

  mostrarLugares () {
   this.tareasService.getLugares().subscribe((lugares: any) => {
      console.log(lugares);
      this.lugares = lugares;
  });
  }

  ngOnInit(): void {
    this.mostrarEmpleados();
    this.mostrarLugares()
  }

}
