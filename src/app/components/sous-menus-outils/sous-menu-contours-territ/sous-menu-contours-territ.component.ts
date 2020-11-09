import { Component, OnInit } from '@angular/core';
import { MenuOutilsComponent } from "../../menu-outils/menu-outils.component";
import { AppComponent } from "../../../app.component";
import { environment } from '../../../../environments/environment';

import * as L from 'leaflet';

@Component({
  selector: 'app-sous-menu-contours-territ',
  templateUrl: './sous-menu-contours-territ.component.html',
  styleUrls: ['./sous-menu-contours-territ.component.css']
})
export class SousMenuContoursTerritComponent implements OnInit{

  /**
    * Appel des components parents
    * @param {component} appComponent
    * @param {component} menuOutilsComponent
   */
  constructor(private appComponent: AppComponent,private menuOutilsComponent: MenuOutilsComponent) {}


  //variables de classes qui définissent si les checkobox sont cochées ou non
  checkedReg;
  checkedDep;


  /**
    * Trouve quel contour est affiché à l'affiche du sous-menu
   */
  ngOnInit(){

    //On récupère la carte et définie la liste des id des frontières affichées
    var map=this.appComponent.getMap();
    var quelcont=[];

    //On remplit la liste avec les id des frontières affichées
    map.eachLayer(function(layer){
      if (layer.options.id=='regFr' || layer.options.id=='depFr') { quelcont.push(layer.options.id); }
    });

    //On check les check box necessaires selon les frontières affichées
    this.checkedDep=this.checkedReg=false;
    quelcont.forEach(elem => {
      if (elem=='depFr') {this.checkedDep=true;}
      if (elem=='regFr') {this.checkedReg=true;}
    });
  }


  /**
    * Affiche les frontières des dép et rég
    * @param {event} e
   */
  afficheFrontieres(e){

    //Définition des deux couches de frontières :
    var coucheFrontieresDepartements = L.tileLayer.wms(environment.geoserverURL+'frontieres'+"/wms?service=WMS", {
      layers: 'fontieres:departements',
      format: 'image/png',
      transparent: true,
      attribution: '<a href="https://www.data.gouv.fr/fr/">data.gouv.fr</a>',
      id:'depFr'
    }).setZIndex(1000);

    var coucheFrontieresRegions = L.tileLayer.wms(environment.geoserverURL+'frontieres'+"/wms?service=WMS", {
      layers: 'frontieres:regions',
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

        //On ajoute une couche :
        if (coucheFrontieres[i]["id"] === e.source.id) { coucheFrontieres[i]["varlayer"].addTo(this.appComponent.getMap()); }
      }
    }

    //On supprime une couche :
    else { this.menuOutilsComponent.deleteLayer(this.appComponent.getMap(),e.source.id); }

  }


}
