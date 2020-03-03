import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import L, { Map, tileLayer, marker, icon, latLng } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { logging } from 'protractor';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaPage {

  constructor(
    public plt: Platform,
    public router: Router,
    private geolocation: Geolocation,
    private cd: ChangeDetectorRef) {}

    ngAfterViewInit() {
      this.initMap();
    }
    
    initMap() {
      var latlng = L.latLng(-15.794230,-47.882166);

      const map = new Map('map').setView(latlng, 10);
    
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        const customMarkerIcon = icon({
          iconUrl: 'assets/images/custom-marker-icon.png',
          iconSize: [64, 64], 
          popupAnchor: [0, -20]
        });
        
        this.geolocation.getCurrentPosition().then((position) =>{
          latlng = L.latLng(position.coords.latitude,position.coords.longitude);
          this.cd.detectChanges();
        }, (err) => {        
          console.log(err);
        });
      map.flyTo(latlng, 23);
    }

}
