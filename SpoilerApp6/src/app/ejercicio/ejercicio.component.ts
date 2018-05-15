import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  colorActual = 'Rojo';
  claseColor = 'alert alert-danger';

  constructor() {
  }

  ngOnInit() {
  }

  cambiarColor() {
    if (this.colorActual === 'Rojo') {
      this.colorActual = 'Amarillo';
      this.claseColor = 'alert alert-warning';
    } else {
      if (this.colorActual === 'Amarillo') {
        this.colorActual = 'Verde';
        this.claseColor = 'alert alert-success';
      } else {
        if (this.colorActual === 'Verde') {
          this.colorActual = 'Rojo';
          this.claseColor = 'alert alert-danger';
        }
      }
    }


  }

}
