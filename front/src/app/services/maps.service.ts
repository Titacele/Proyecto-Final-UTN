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
    return this.http.get('http://datosabiertos-transporte-apis.buenosaires.gob.ar:443/datos/movilidad/transito/application/json');
  }
}




