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
export class AppComponent implements OnInit{

  //Variables de classe
  map;
  mapboxAccessToken = "pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw";

  //Va servir pour cacher les éléments sur la carte lors de l'impression:
  printing=false;

  //Sert à afficher le component info-couche pour avoir des infos sur la couche affichée
  affiching=false;

  /**
    * Setteur de printing
    * @param {bool} x
   */
  setPrinting(x){this.printing=x;}

  /**
    * Setteur de affiching
    * @param {bool} x
   */
  setAffiching(x){this.affiching=x;}

  /**
    * getteur de map
    * @return {map}
   */
  getMap() {return this.map;}

  /**
    * getteur de mapboxAccessToken
    * @return {string}
   */
  getMapboxAccessToken(){return this.mapboxAccessToken;}


  /**
    * Initie la carte
   */
  ngOnInit() {

    //On définie la carte
    this.map= map('mymap').setView([44.65, 6.12], 5);

  	//On ajoute la basemap de départ
    var street_mapbox= tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              id: 'mapbox.streets',
              accessToken: this.mapboxAccessToken
  	}).addTo(this.map);
  }


  /**
    * Récupère les données du plugin et les affiche sur la carte
    * @param {string} nomWorkspace
    * @param {string} nomCouche
    * @param {string} couleur
    * @param {string} or {L.rectangle} filtre
   */
  addPlugin(att1,att2,att3,att4){

    //on récupère la couche grâce au plugin et on l'affiche sur la carte
    const plugin1 = initPlugin(att1,att2,att3,att4);
    plugin1.addTo(this.map);
  }

}
