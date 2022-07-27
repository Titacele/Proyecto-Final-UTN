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

  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });

//tareaFiltrada = false;
  
  constructor(
    private tareasService: TareasService
  ) { }

  tarea: any;

onSubmit () {
  console.log('Va bien');
  
  const { termino } = this.busquedaForm.value;  
  this.tareasService.findTasks(termino).subscribe(tareas => {
  console.log(tareas);
  this.tarea = tareas;
  });

  //const { termino } = this.busquedaForm.value;
  //this.tareasService.getTasks( ).subscibe (respuesta => {
    //console.log (respuesta);
  //});

  
}

  ngOnInit(): void {
    
  }

}
