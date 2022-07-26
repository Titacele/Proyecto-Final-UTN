import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private http: HttpClient
  ) { }

  getMapsInfo () {
    return this.http.get('https://datosabiertos-transporte-apis.buenosaires.gob.ar:433/get/datos/movilidad/transito');
  }
}
