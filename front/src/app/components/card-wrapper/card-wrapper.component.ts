import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor(
    private tareasService: TareasService,
  ) { }

  tareas: any;
  

  mostrarInfoTareas () {
    this.tareasService.getTasks().subscribe((tareas: any) => {
      console.log(tareas);
      this.tareas = tareas;
    });
  }
  

  title = 'Tareas';

  
  ngOnInit(): void {
    this.mostrarInfoTareas();
  }

}
