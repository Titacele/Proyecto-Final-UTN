import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.scss']
})
export class HamburguesaComponent implements OnInit {

  show = true;

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


  ngOnInit(): void {
  }

}



