import { Component, OnInit } from '@angular/core';
//Importamos la configuración básica de formularios de Angular
import { FormControl, FormGroup } from '@angular/forms';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  //Acá declaramos el formulario, indicando los campos que tiene
//Al campo de termino lo dejamos vacío para indicar que de manera predeterminada va a estar vacío
  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });

  //en constructor de declara los servicios
  constructor(
    private tareasService: TareasService
  ) { }

  tarea: any;

onSubmit () {
  console.log('Va bien');
  //conseguir el dato de lo que tipió el usuario
  const { termino } = this.busquedaForm.value;  
  //llamar al servicio y enviarle a la funcion findBooks el termino
  this.tareasService.findTasks(termino).subscribe(tareas => {
  console.log(tareas);
   this.tarea = tareas;
  });


  
}

  ngOnInit(): void {
    
  }

}
