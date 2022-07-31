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


  devolverValue () {
     this.tareasService.findTasksbyEmpleadoId().subscribe((resultado: number) =>{
     console.log (resultado);
    });
  }

  // resultado!:string;
  // opcion1=false;
  // opcion2=false;
  // opcion3=false;
  // opcion4=false;
  // opcion5=false;

  // operar() {
  //   this.resultado='';
  //   if (this.opcion1) {
  //     this.resultado+= 1;
  //   }
  //   if (this.opcion2) {
  //     this.resultado+= 2;
  //   }
  //   if (this.opcion3) {
  //     this.resultado+= 3;
  //   }
  //   if (this.opcion4) {
  //     this.resultado+= 4;
  //   }
  //   if (this.opcion5) {
  //     this.resultado+= 5;
  // }
//}




  ngOnInit(): void {
    this.mostrarEmpleados();
    this.mostrarInfoTareas();
    //this.resultado
  }

}



