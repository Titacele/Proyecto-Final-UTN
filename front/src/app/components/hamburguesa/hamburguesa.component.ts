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


  mostrarMenu () {
    this.show=!this.show;
    console.log(this.show);
  }

  mostrarEmpleados () {
    this.tareasService.getEmpleados().subscribe((empleados: any) => {
      console.log(empleados.id);
      this.empleados = empleados;
    });
  }

  mostrarInfoTareas () {
    this.tareasService.getTasks().subscribe((tareas: any) => {
      console.log(tareas);
      this.tareas = tareas;
    });
  }

  resultado!:number;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;
  opcion5=false;

  operar() {
    this.resultado=0;
    if (this.opcion1) {
      this.resultado= 1;
      console.log(this.resultado);
    }
    if (this.opcion2) {
      this.resultado= 2;
      console.log(this.resultado);
    }
    if (this.opcion3) {
      this.resultado= 3;
      console.log(this.resultado);
    }
    if (this.opcion4) {
      this.resultado= 4;
      console.log(this.resultado);
    }
    if (this.opcion5) {
      this.resultado= 5;
      console.log(this.resultado);
    }
  }


  ngOnInit(): void {
    this.mostrarEmpleados();
    this.mostrarInfoTareas();
    this.resultado
  }

}



