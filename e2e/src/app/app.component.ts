// Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map, tileLayer } from 'leaflet';
import { initPlugin } from './conf/wfst-plugin';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implémenter OnInit
export class AppComponent implements OnInit, AfterViewInit{

  //Variables de classe
  map;
  mapboxAccessToken = "pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw";

  //getteurs
  getMap() {return this.map;}
  getMapboxAccessToken(){return this.mapboxAccessToken;}

  // Fonction d'initialisation de la carte
  
  constructor() {}

  ngOnInit(): void {
    this.map = map('mymap').setView([44.65, 6.12], 5);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      id: 'mapbox.streets',
      accessToken: this.mapboxAccessToken
    }).addTo(this.map);
  }
  ngAfterViewInit():void{
    
  }
  addPlugin(att1,att2,att3){
    const plugin1 = initPlugin(att1,att2,att3);
    plugin1.addTo(this.map);
  }
  
}


  


