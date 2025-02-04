import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  map: any;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    // Localização do Edifício Harmony Premium Business
    this.map = L.map('map').setView([-3.7374098, -38.572069], 16); // Defina a latitude e longitude
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  
    // Adicionando um marcador no Edifício Harmony Premium Business
    L.marker([-3.7374098, -38.572069]).addTo(this.map)
      .bindPopup('Edifício Harmony Premium Business')
      .openPopup();
  }
  

}
