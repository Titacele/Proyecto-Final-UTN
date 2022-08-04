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
  resultado: number | undefined;

  tareaFiltrada = false;


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

  resultados!:number;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;
  opcion5=false;

  operar() {
    this.resultados=0;
    if (this.opcion1) {
      this.resultados= 1;
      console.log(this.resultados);
      this.opcion1=true;
    }
    if (this.opcion2) {
      this.resultados= 2;
      console.log(this.resultados);
    }
    if (this.opcion3) {
      this.resultados= 3;
      console.log(this.resultados);
    }
    if (this.opcion4) {
      this.resultados= 4;
      console.log(this.resultados);
    }
    if (this.opcion5) {
      this.resultados= 5;
      console.log(this.resultados);
    }

    let resultado = this.resultados;
    this.tareasService.findTasksbyEmpleadoId(resultado).subscribe(tareas => {
    console.log(tareas);

    let filtrados = []
    for (const [key, value] of Object.entries(tareas)) {
      if (value.empleadoId = this.resultado) {
      filtrados.push(resultado);
      }
  }

  console.log(filtrados);
  this.tareas = tareas;
  this.tareaFiltrada = true;

  let x = this.tareaFiltrada
  
   });
     
  }


  ngOnInit(): void {
    this.mostrarEmpleados();
    this.mostrarInfoTareas();
    this.resultado;
    this.tareas;
  }

}



