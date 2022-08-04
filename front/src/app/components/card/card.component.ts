import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() fecha = Date; 
  @Input() descripcion: string | undefined;
  @Input() empleado: string | undefined;
  @Input() lugar: string | undefined;

  
  ngOnInit(): void {
  }

}
