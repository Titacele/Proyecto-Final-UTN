import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  agregarForm = new FormGroup({
    direccion: new FormControl(),
    localidad: new FormControl(),
    cliente: new FormControl(),
  });

  constructor(
    private tareasService: TareasService,
  ) { }

  lugar: any;

   onSubmit() {

      const { direccion } = this.agregarForm.value;
      const { localidad } = this.agregarForm.value;
      const { cliente } = this.agregarForm.value;
      this.tareasService.insertarLugar(direccion, localidad, cliente).subscribe(lugar => {
        console.log(lugar)
      });
    }

  ngOnInit(): void {

  }


}
