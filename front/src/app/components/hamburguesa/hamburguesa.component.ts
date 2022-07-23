import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.scss']
})
export class HamburguesaComponent implements OnInit {

  show = window.screen.width>767 ? true : false;

  constructor(
    private tareasService: TareasService,
  ) { }

  empleados: any;
  tareas: any;
  value: any;

  mostrarMenu () {
    this.show=!this.show;
    console.log(this.show);
  }

  devolverValue() {
    this.tareasService.getIdEmpleado().subscribe((value: any) => {
    console.log(value);
    this.value = value;
    });
  }
 
  mostrarEmpleados () {
    this.tareasService.getEmpleados().subscribe((empleados: any) => {
      console.log(empleados);
      this.empleados = empleados;
    });
  }

  mostrarInfoTareas () {
    this.tareasService.getTasks().subscribe((tareas: any) => {
      console.log(tareas);
      this.tareas = tareas;
    });
  }


  ngOnInit(): void {
    this.mostrarEmpleados();
    this.devolverValue();
    this.mostrarInfoTareas();
  }

}



