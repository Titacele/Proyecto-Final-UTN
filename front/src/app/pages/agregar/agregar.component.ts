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
    descripcion: new FormControl(),
    empleadoId: new FormControl(),
    lugarId: new FormControl(),
  });

  constructor(
    private tareasService: TareasService,
  ) { }

  empleados: any;
  lugares: any;
  tarea: any;

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

  

  onSubmit() {
   
    // console.log(this.agregarForm.value);
    // console.log(this.agregarForm)
   

    const { fecha } = this.agregarForm.value;
    const { descripcion } = this.agregarForm.value;
    const { empleadoId } = this.agregarForm.value;
    const { lugarId } = this.agregarForm.value;
    this.tareasService.insertarTarea(fecha, descripcion, empleadoId, lugarId).subscribe(tarea => {
      console.log(tarea)
    });

  }


  ngOnInit(): void {
    this.mostrarEmpleados();
    this.mostrarLugares()

  }

}
