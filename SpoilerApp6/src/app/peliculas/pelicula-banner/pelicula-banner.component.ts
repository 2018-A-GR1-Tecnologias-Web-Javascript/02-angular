import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit, OnChanges {

  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;

  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();


  textoEstreno: string;
  claseEstreno: string;

  constructor() {
    // undefined
  }

  ngOnInit() {
    console.log("Inicio y seteo color", this.nombrePelicula);
    this.setearColorYClase();
  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno) {
      this.setearColorYClase();
    }
  }

  setearColorYClase() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

  hizoClickEnEstado() {
    this.dioClickEnEstado.emit(true);
  }

}
