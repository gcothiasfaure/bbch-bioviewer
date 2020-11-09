import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../../app.component";
import { InfoCoucheComponent } from "../info-couche/info-couche.component";

import * as L from 'leaflet';

@Component({
  selector: 'app-recherche-selection',
  templateUrl: './recherche-selection.component.html',
  styleUrls: ['./recherche-selection.component.css']
})
export class RechercheSelectionComponent implements OnInit {

  constructor(private appComponent: AppComponent, private infoCoucheComponent: InfoCoucheComponent) { }

  selectionning=false;
  boutRechercheDisabled=true;
  hiddenButRecherche=true;

  ngOnInit(): void {

    var listCouchesTypes=[['zn','red'],['nat','black'],['inpg','green'],['ep','yellow']];
    var listCouchesNoms=[['baseexp_stations','red'],['baseexp_traits','black'],['donneesstations_languedocroussillon','green'],['metrop_znieff1','yellow'],['metrop_znieff2','purple']];

    var self=this;
    var app=this.appComponent;
    var info=this.infoCoucheComponent;

    var carte=this.appComponent.getMap();

    var buttCommencer=document.getElementById('boutCommencer');
    var buttRechercherType=document.getElementById('boutRechercherType');
    var buttRechercherNom=document.getElementById('boutRechercherNom');

    var carteContenant=document.getElementById('mymap');

    var choice=false;

    var listePoints=[];
    var listLatLng=[];

    var oneCorner;
    var twoCorner;

    var bounds;
    var rect=L.rectangle([[1,1],[1,1]], {color:"#ff7800", weight:0.8});
    var rectMove=L.rectangle([[1,1],[1,1]], {color:"#ff7800", weight:1});
    var areaRect;
    var areaRectHa;

    L.DomEvent.on(buttCommencer, 'click',selectionner, this);


    function selectionner() {

      choice=!choice;

      if (choice) {
        carte.on('mousedown', setOneCorner);
        carte.on('mouseup', setTwoCorner);
        carte.dragging.disable();
        buttCommencer.innerHTML='Annuler la selection';
        buttCommencer.classList.add('butt-red');
        buttCommencer.classList.remove('butt-green');
        carteContenant.style.cursor='crosshair';
        this.hiddenButRecherche=false;
      }
      else{
        deleteSelection();
        carte.dragging.enable();
        carte.off('mousedown', setOneCorner);
        carte.off('mouseup', setTwoCorner);
        self.boutRechercheDisabled=true;
        buttCommencer.innerHTML='Commencer la selection';
        buttCommencer.classList.add('butt-green');
        buttCommencer.classList.remove('butt-red');

        carteContenant.style.cursor='grab';
        this.hiddenButRecherche=true;
      }
    }


    function setOneCorner(e){

      oneCorner = e.latlng;
      carte.on('mousemove',onMove);
    }


    function setTwoCorner(e){

      rectMove.remove();

      carte.off('mousemove',onMove);
      carte.off('mousedown', setOneCorner);
      carte.off('mouseup', setTwoCorner);

      carte.dragging.enable();
      carteContenant.style.cursor='grab';

      twoCorner = e.latlng;
      bounds = L.latLngBounds([oneCorner, twoCorner]);

      rect=L.rectangle(bounds, {color:"#ff7800", fill:false,weight:1}).addTo(carte);

      let sw=bounds.getSouthWest();
      let nw=bounds.getNorthWest();
      let se=bounds.getSouthEast();
      let ne=bounds.getNorthEast();
      areaRect=sw.distanceTo(nw)*se.distanceTo(ne);
      areaRectHa=areaRect/10000;
      if (areaRectHa<100) { alert('Selection trop petite'); }
      else if (areaRectHa>2000000) { alert('Selection trop grande'); }
      else{ self.boutRechercheDisabled=false; }

      L.DomEvent.on(buttRechercherType, 'click',rechercherType, this);

      L.DomEvent.on(buttRechercherNom, 'click',rechercherNom, this);

    }

    function onMove(e) {
      rectMove.remove();
      rectMove=L.rectangle([oneCorner, e.latlng], {color:"#ff7800", weight:1}).addTo(carte);
    }


    function deleteSelection() {
      app.setAffiching(false);
      carte.eachLayer(function(layer){
        if (layer.options.geometryField) { layer.remove();  }
      });
      rect.remove();
    }


    function rechercherType() {

      app.setAffiching(true);
      info.afficheCoucheType(listCouchesTypes);

      self.boutRechercheDisabled=true;

      listCouchesTypes.forEach(elem => {
        app.addPlugin('types',elem[0],elem[1],rect);
      });

    }


    function rechercherNom() {

      app.setAffiching(true);
      info.afficheCoucheNom(listCouchesNoms);

      self.boutRechercheDisabled=true;

      listCouchesNoms.forEach(elem => {
        app.addPlugin('couches',elem[0],elem[1],rect);
      });

    }



  }

}
