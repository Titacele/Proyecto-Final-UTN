import { Component, OnInit } from '@angular/core';
// Importamos el servicio de gatitos
import { GatitosService } from 'src/app/services/gatitos.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {

  constructor(
    private gatitosService: GatitosService,

  ) { }

  data: any;

  mostrarInfoGatitos () {
    this.gatitosService.getGatitosInfo().subscribe(respuesta => {
      console.log(respuesta);
      this.data = respuesta;
    });
  }

  // onInit significa cuando se termina de cargar el componente
  ngOnInit(): void {
    this.mostrarInfoGatitos();
  }

}
