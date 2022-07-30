import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})

export class EmpleadoComponent implements OnInit {

  agregarForm = new FormGroup({
    nombreCompleto: new FormControl(),
    dni: new FormControl(),
  });

  constructor(
    private tareasService: TareasService,
  ) { }

  empleado: any;

   onSubmit() {

      const { nombreCompleto } = this.agregarForm.value;
      const { dni } = this.agregarForm.value;
      this.tareasService.insertarEmpleado(nombreCompleto, dni).subscribe(empleado => {
        console.log(empleado)
      });
    }

  ngOnInit(): void {
  }

}
