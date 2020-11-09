import { Component, OnInit } from '@angular/core';
import { MenuOutilsComponent } from "../../menu-outils/menu-outils.component";
import { AppComponent } from "../../../app.component";

import * as L from 'leaflet';

@Component({
  selector: 'app-sous-menu-basemap',
  templateUrl: './sous-menu-basemap.component.html',
  styleUrls: ['./sous-menu-basemap.component.css']
})
export class SousMenuBasemapComponent implements OnInit{

  //Si on veut utiliser les fonctions de AppComponent et MenuOutilsComponent:
  constructor(private appComponent: AppComponent,private menuOutilsComponent: MenuOutilsComponent) {}

  //variable de classe contenant l'id de la basempap affichée
  checkedBasemap;

  //Pour trouver quelle basempap est affichee
  ngOnInit(){

    //On récupère la carte
    var map=this.appComponent.getMap();

    //Variable qui contiendra l'id de la basempap affichée
    var quelbase;

    map.eachLayer(function(layer){


      if (layer.options.id && (layer.options.id!='depFr' && layer.options.id!='regFr')) {
          quelbase=layer.options.id;
        }
    });

    //Affectation
    this.checkedBasemap=quelbase;
  }

  //Méthode pour changer de basemap au click sur un radio bouton
  changeBasemap(e){

    //On définie toutes les basemap
    var street_mapbox= L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              id: 'mapbox.streets',
              accessToken: this.appComponent.getMapboxAccessToken()
    });
    var light = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              id: 'mapbox.light',
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +'Imagery © <a href="https://mapbox.com">Mapbox</a>',
              accessToken: this.appComponent.getMapboxAccessToken()
    });
    var OSM= L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{
              id : 'osm',
              attribution : '<a href="https://www.openstreetmap.org/">Open Street Map</a>'
    });
    var streets_osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
              id : 'streets.osm',
              attribution : '<a href="https://www.openstreetmap.org/">Open Street Map</a>'
    });
    var World_topo_Map = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',{
              id : 'world.topo.map',
              attribution : '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
    });
    var World_Imagery = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Imagery/MapServer/tile/{z}/{y}/{x}',{
              id : 'world.imagery',
              attribution : '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
    });
    var World_Shaded_Relief = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' +'World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',{
              id : 'world.shaded.relief',
              maxZoom : 13,
              attribution : '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
    });
    var World_Terrain_Base = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',{
              id : 'world.terrain.base',
              maxZoom : 9,
              attribution : '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
    });
    var World_Street_Map = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Street_Map/MapServer/tile/{z}/{y}/{x}',{
              id : 'world.street.map',
              attribution : '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
    });

    //On les range dans un tableau
    var basemaps=[
      {   "varlayer" : street_mapbox,
          "id" : "mapbox.streets",
          "label" : "Mapbox Streets"
      },
      {   "varlayer" : light,
          "id" : "mapbox.light" ,
          "label" : "Mapbox Light"
      },
      {   "varlayer" : OSM,
          "id" : "osm",
          "label" : "OSM Standard"
      },
      {   "varlayer" : streets_osm,
          "id" : "streets.osm" ,
          "label" : "OSM Streets"
      },
      {   "varlayer" : World_topo_Map,
          "id" : "world.topo.map" ,
          "label" : "ESRI World topo Map"
      },
      {   "varlayer" : World_Imagery,
          "id" : "world.imagery" ,
          "label" : "ESRI World Imagery"
      },
      {   "varlayer" : World_Shaded_Relief ,
          "id" : "world.shaded.relief" ,
          "label" : "ESRI World Shaded Relief "
      },
      {   "varlayer" : World_Terrain_Base ,
          "id" : "world.terrain.base" ,
          "label" : "ESRI World Terrain Base "
      },
      {   "varlayer" : World_Street_Map ,
          "id" : "world.street.map" ,
          "label" : "ESRI World Street Map"
      }];

    //Selon le bouton clické, on supprime toutes les autres basemap et on l'ajoute
    for (let i = 0; i < basemaps.length; i++) {
      this.menuOutilsComponent.deleteLayer(this.appComponent.getMap(),basemaps[i]['id']);
      if (basemaps[i]['id']===e.source.id) {
        basemaps[i]['varlayer'].addTo(this.appComponent.getMap());
      }
    }

  }


}
