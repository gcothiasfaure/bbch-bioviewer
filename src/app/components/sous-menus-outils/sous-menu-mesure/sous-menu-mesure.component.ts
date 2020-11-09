import { Component, OnInit } from '@angular/core';
import { MenuOutilsComponent } from "../../menu-outils/menu-outils.component";
import { AppComponent } from "../../../app.component";

import * as L from 'leaflet';

@Component({
  selector: 'app-sous-menu-mesure',
  templateUrl: './sous-menu-mesure.component.html',
  styleUrls: ['./sous-menu-mesure.component.css']
})
export class SousMenuMesureComponent implements OnInit {


  /**
    * Appel des components parents si on en a besoin
    * @param {component} appComponent
    * @param {component} menuOutilsComponent
   */
  constructor(private appComponent: AppComponent,private menuOutilsComponent: MenuOutilsComponent) {}


  /**
    * Initie le sous-menu mesure à l'affichage
   */
  ngOnInit(): void {

    //On récupère les éléments HTML dont on aura besoin
    var carte=this.appComponent.getMap();
    var carteContenant=document.getElementById('mymap');
    var boutonsMenu=document.getElementById('conteneur-boutons-du-menu-outils');
    var distDP=document.getElementById('distDernierPoint');
    var distTot=document.getElementById('distTot');
    var butt=document.getElementById('boutton');
    var contPoints=document.getElementById('conteneur-points');

    //Variable qui définie si on est en mode start ou reset : false -> start
    var choice=false;

    //Définition des variables
    var listePoints=[];
    var pointCourant;
    var distance_km;
    var distanceTotale=0;
    var avantDernierPoint;
    var dernierPoint;
    var distance_m;
    var i=1;

    //On écoute le bouton pour commencer et pour reset
    L.DomEvent.on(butt, 'click',toggle, this);


    /**
      * Suivant la nature du bouton, on commence ou rest une mesure
     */
    function toggle() {
      choice=!choice;

      //On est au start :
      if (choice) {
        
        carte.doubleClickZoom.disable();

        carte.doubleClickZoom.disable();

        //On écoute la carte pour tracer les points et lignes
        carte.on('click', onClick, this);

        //On empeche l'accès aux boutons pendant la mesure et start devient reset
        this.menuOutilsComponent.disableMenu(true);
        carteContenant.style.cursor='crosshair';
        butt.innerHTML='Réinitialiser la mesure';
      }

      //On est au reset :
      else{

        carte.doubleClickZoom.enable();

        //On arrête d'écouter la carte et on supprime les mesures
        carte.off('click', onClick, this);
        deleteMeasures();

        //On rétablit les boutons et reset devient start
        this.menuOutilsComponent.disableMenu(false);
        carteContenant.style.cursor='grab';
        butt.innerHTML='Commencer la mesure';
      }
    }

    /**
      * Affiche les lignes, points
      * @param {event} e
     */
    function onClick(e) {

      //On rempli la liste des points à mesurer
      listePoints.push( [e.latlng.lat,e.latlng.lng] );
      let l=listePoints.length;

      //On trace la polyligne et calcul la distance à partir de deux points dans la liste
      if (l>1) {

        calculDistances(listePoints);
        L.polyline([[listePoints[l-1][0],listePoints[l-1][1]],[listePoints[l-2][0],listePoints[l-2][1]]],{fillOpacity :1,color:'#EC3816'}).addTo(carte);
      }

      //On trace les points aux extrémités des lignes et on affiche les coordonnées des points
      L.circleMarker(e.latlng,{radius:4,color:'#EC3816',fillColor:'#EC3816',fillOpacity:1}).addTo(carte);
      contPoints.style.border='solid';
      contPoints.innerHTML+='<p style="margin-bottom: 0; height:14px;"><strong>Point '+i+' :</strong> </p><p style="margin-bottom: 0;">lat : '+listePoints[l-1][0].toFixed(5)+' ; '+' long : '+listePoints[l-1][1].toFixed(5)+'</p>';

      i=i+1;
    }


    /**
      * Supprime les mesures de la carte et du menu
     */
    function deleteMeasures(){

      //On remet les variables à 0 pour une nouvelle mesure
      i=1;
      listePoints=[];
      distanceTotale=0;

      //On remet à null les contenants des informations précédentes
      distDP.innerHTML=distTot.innerHTML=contPoints.innerHTML='';
      contPoints.style.border=distDP.style.border=distTot.style.border='';

      //On supprime les couches qui ont une valeur fillOpacity (seules les éléments de la mesure en ont)
      carte.eachLayer(function(layer){
        if (layer.options.fillOpacity) { carte.removeLayer(layer); }
      });
    }


    /**
      * Mesure et affiche les distances avec les points de la liste
      * @param {array} listePoints
     */
    function calculDistances(listePoints) {

        //On rend les contours des div des resultats visibles :
        distDP.style.border='solid';
        distTot.style.border='solid';

        let l = listePoints.length;
        avantDernierPoint =L.latLng(listePoints[l-2][0],listePoints[l-2][1]);
        dernierPoint=L.latLng(listePoints[l-1][0],listePoints[l-1][1]);

        //On calcule la distance au dernier points (m puis km)
        distance_m=dernierPoint.distanceTo(avantDernierPoint);
        distance_km=(distance_m/1000);

        //Distance totale depuis le permier point :
        distanceTotale=distanceTotale+distance_km;

        //On afffiche ces résultats :
        distDP.innerHTML='<span style="font-weight:bold;">Au dernier point : </span>'+distance_km.toFixed(3)+' km';
        distTot.innerHTML='<span style="font-weight:bold">Distance totale : </span>' + distanceTotale.toFixed(3)+' km';
      }

  }

}
