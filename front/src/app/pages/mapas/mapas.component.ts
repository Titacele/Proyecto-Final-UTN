import { Component, OnInit } from '@angular/core';
// Importamos el servicio de gatitos
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {

  constructor(
    private mapsService: MapsService,

  ) { }

  varios: any;
  gatos: any;

  mostrarInfoMaps () {
    this.mapsService.getMapsInfo().subscribe(respuesta => {
      console.log(respuesta);
      this.varios = respuesta;
    });
  }

  
  ngOnInit(): void {
    this.mostrarInfoMaps();
    
  }

}
