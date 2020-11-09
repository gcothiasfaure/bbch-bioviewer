import { Component, OnInit } from '@angular/core';
import { MenuOutilsComponent } from "../../menu-outils/menu-outils.component";
import { AppComponent } from "../../../app.component";

import * as L from 'leaflet';

@Component({
  selector: 'app-sous-menu-contours-territ',
  templateUrl: './sous-menu-contours-territ.component.html',
  styleUrls: ['./sous-menu-contours-territ.component.css']
})
export class SousMenuContoursTerritComponent implements OnInit{

  //On va se servir des components parents :
  constructor(private appComponent: AppComponent,private menuOutilsComponent: MenuOutilsComponent) {}

  //On récupère checkedRegM et checkedDepM nous iniquant quels boutons sont cochés
  checkedReg;
  checkedDep;


  //Pour trouver quel contour est affiche
  ngOnInit(){
    //On récupère la carte
    var map=this.appComponent.getMap();

    var quelcont=[];
    map.eachLayer(function(layer){
      if (layer.options.id=='regFr' || layer.options.id=='depFr') {
        quelcont.push(layer.options.id);
      }
    });
    this.checkedDep=this.checkedReg=false;
    quelcont.forEach(elem => {
      if (elem=='depFr') {this.checkedDep=true;}
      if (elem=='regFr') {this.checkedReg=true;}
    });
  }


  //Méthode pour afficher les frontières des dép et rég
  afficheFrontieres(e){

    //Définition des deux couches de frontières :
    var coucheFrontieresDepartements = L.tileLayer.wms("http://localhost:8081/geoserver/gaspard_workspace_projet_dev/wms?service=WMS", {
      layers: 'gaspard_workspace_projet_dev:dep',
      format: 'image/png',
      transparent: true,
      attribution: '<a href="https://www.data.gouv.fr/fr/">data.gouv.fr</a>',
      id:'depFr'
    }).setZIndex(1000);
    var coucheFrontieresRegions = L.tileLayer.wms("http://localhost:8081/geoserver/gaspard_workspace_projet_dev/wms?service=WMS", {
      layers: 'gaspard_workspace_projet_dev:reg',
      format: 'image/png',
      transparent: true,
      attribution: '<a href="https://www.data.gouv.fr/fr/">data.gouv.fr</a>',
      id:'regFr'
    }).setZIndex(1000);

    //On les range dans un tableau
    var coucheFrontieres=[
      {   "varlayer" : coucheFrontieresDepartements,
          "id" : "depFr" ,
          "label" : "Couche des frontières départementales"
      },
      {   "varlayer" : coucheFrontieresRegions,
          "id" : "regFr" ,
          "label" : "Couche des frontières régionales"
      }];

    //Suivant si on coche et décoche une des deux chekbox, on ajoute ou supprime couche
    if (e.checked) {
      for (let i = 0; i < coucheFrontieres.length; i++) {
        if (coucheFrontieres[i]["id"] === e.source.id) {
          coucheFrontieres[i]["varlayer"].addTo(this.appComponent.getMap());
        }
      }
    }
    else { this.menuOutilsComponent.deleteLayer(this.appComponent.getMap(),e.source.id); }
  }

}
