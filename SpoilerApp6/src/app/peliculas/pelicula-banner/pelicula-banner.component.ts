import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg';
  descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  nombrePelicula = 'Tomb Raider';
  descripcionPelicula = 'Alicia vikander,Walton Googins';
  estado = 'Proximamente';

  constructor() {
  }

  ngOnInit() {
  }

}
