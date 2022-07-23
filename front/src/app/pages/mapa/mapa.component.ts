import { Component, OnInit } from '@angular/core';
// Importamos el servicio de gatitos
import { GatitosService } from 'src/app/services/gatitos.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})

// interface InfoGatitos {
//   fact: string;
//   length: number;
// }

export class MapaComponent implements OnInit {

  constructor(
    private gatitosService: GatitosService,

  ) { }

  data: any;
  libros: any;

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
