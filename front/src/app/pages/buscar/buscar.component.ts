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

 
  constructor(
    private tareasService: TareasService
  ) { }

  tareaFiltrada = false;
  tareas: any;

onSubmit () {
  console.log('Va bien');
  
  const { termino } = this.busquedaForm.value;  
  this.tareasService.findTasks(termino).subscribe(tareas => {
  console.log(tareas);
  let filtrados = []
  for (const [key, value] of Object.entries(tareas)) {
    if (value.descripcion.includes(termino)) {
      filtrados.push(value);
    }
  }

  console.log(filtrados);
  this.tareas = tareas;
  this.tareaFiltrada = true;

  });

  //const { termino } = this.busquedaForm.value;
  //this.tareasService.getTasks( ).subscibe (respuesta => {
    //console.log (respuesta);
  //});

  
}

  ngOnInit(): void {
    
  }

}
