import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {
  nombre = 'Adrian';
  apellido = 'Eguez';
  edad = 28;
  sueldo = 1;
  fechaNacimiento = new Date('1989-06-10');
  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';

  cambiarClaseDeTitulo() {
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if (nombreClaseEsTitulo) {
      this.nombreClase = 'sa-subtitulo';
    } else {
      this.nombreClase = 'sa-titulo';
    }
  }
}



