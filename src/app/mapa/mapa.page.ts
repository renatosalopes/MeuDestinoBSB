import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss']
})
export class MapaPage {

  constructor(
    public plt: Platform,
    public router: Router) {}

    ngAfterViewInit() {
      this.initMap();
    }

    initMap() {
      const map = new Map('map').setView([33.6396965, -84.4304574], 23);
  
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      const customMarkerIcon = icon({
        iconUrl: 'assets/images/custom-marker-icon.png',
        iconSize: [64, 64], 
        popupAnchor: [0, -20]
      });
    }



}
