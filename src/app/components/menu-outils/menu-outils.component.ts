import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import * as L from 'leaflet';

@Component({
  selector: 'app-menu-outils',
  templateUrl: './menu-outils.component.html',
  styleUrls: ['./menu-outils.component.css']
})
export class MenuOutilsComponent{


  /**
    * Appel des components parents si on en a besoin
   */
  constructor(private appComponent: AppComponent) {}

  //variable pour disable les boutons pendant la mesure sur la carte
  menuDisabled=false;

  //variables d'affichage des sous catégories de boutons
  sousBoutonsOptionsCarteVisibility=false;
  sousBoutonsOutilsVisibility=false;

  //variables d'affichage des cards
  sousMenuBasemapVisibility=false;
  sousMenuContoursTerritoiresVisibility=false;
  sousMenuMesureVisibility=false;

  //variables des valeurs des tooltips des boutons
  toolTipForBasemapBouton;
  toolTipForContoursTerritoiresBouton;
  toolTipForMesureBouton;
  toolTipForImpressionBouton;

  /////////getters pour visibilité des sous menus
  /**
    * Getteur de sousMenuBasemapVisibility
    * @return {bool}
   */
  getSousMenuBasemapVisibility(){return this.sousMenuBasemapVisibility;}

  /**
    * Getteur de sousMenuContoursTerritoiresVisibility
    * @return {bool}
   */
  getSousMenuContoursTerritoiresVisibility(){return this.sousMenuContoursTerritoiresVisibility;}

  /**
    * Getteur de sousMenuMesureVisibility
    * @return {bool}
   */
  getSousMenuMesureVisibility(){return this.sousMenuMesureVisibility;}

  /////////setters pour visibilité des sous menus
  /**
    * Setteur de sousMenuBasemapVisibility
    * @param {bool} x
   */
  setSousMenuBasemapVisibility(x){this.sousMenuBasemapVisibility=x}

  /**
    * Setteur de sousMenuContoursTerritoiresVisibility
    * @param {bool} x
   */
  setSousMenuContoursTerritoiresVisibility(x){this.sousMenuContoursTerritoiresVisibility=x}

  /**
    * Setteur de sousMenuMesureVisibility
    * @param {bool} x
   */
  setSousMenuMesureVisibility(x){this.sousMenuMesureVisibility=x;}


  /**
    * Affilie à chaque variable le tooltip correspondant
   */
  setTooltip(){
    this.toolTipForBasemapBouton="Choisir le fond de carte";
    this.toolTipForContoursTerritoiresBouton="Afficher les frontières administratives";
    this.toolTipForMesureBouton='Mesurer sur la carte';
    this.toolTipForImpressionBouton='Impression de la carte';
  }


  /**
    * Affiche les sous bouttons partie option carte
    * @param {event} e
   */
  afficheConteneurSousBoutonsOptionsCarte(e){

    //On rend visible l'elelement en rendant true la valeur de la variable correspondante
    this.sousBoutonsOptionsCarteVisibility=!this.sousBoutonsOptionsCarteVisibility;

    //On réinitialise les tooltips au cas ou était sur une autre card
    this.setTooltip();

    //On ferme tous les cards
    this.fermeSousMenu();

    //On ferme les sous-boutton sde l'autre categorie et on lui remet style par defaut
    this.sousBoutonsOutilsVisibility=false;
    this.setBackgroundColor('conteneur-boutons-outils',false,'');

    //Si on ouvre la sous-cat on grise sinon style par défaut
    this.setBackgroundColor(e.srcElement.offsetParent.parentElement,this.sousBoutonsOptionsCarteVisibility,'#656565');
  }


  /**
    * Affiche les sous bouttons partie outils
    * @param {event} e
   */
  afficheConteneurSousBoutonsOutils(e){

    //On rend visible l'elelement en rendant true la valeur de la variable correspondante
    this.sousBoutonsOutilsVisibility=!this.sousBoutonsOutilsVisibility;

    //On réinitialise les tooltips au cas ou était sur une autre card
    this.setTooltip();

    //On ferme tous les cards
    this.fermeSousMenu();

    //On ferme les sous-boutton sde l'autre categorie et on lui remet style par defaut
    this.setBackgroundColor('conteneur-boutons-options-carte',false,'');
    this.sousBoutonsOptionsCarteVisibility=false;

    //Si on ouvre la sous-cat on grise sinon style par défaut
    this.setBackgroundColor(e.srcElement.offsetParent.parentElement,this.sousBoutonsOutilsVisibility,'#656565');
  }


  /**
    * Affiche les sous-menus
    * @param {event} e
   */
  afficheSousMenu(e){
    if (e.srcElement.id==="petite-icone-basemap") {

      //la variable de visibilité passe à true
      this.sousMenuBasemapVisibility=!this.sousMenuBasemapVisibility;

      //On réinitialise les tooltips au cas ou était sur une autre card
      this.setTooltip();

      //On rend vert l'icone et blanche l'autre du sous-menu
      this.setIconColor('petite-icone-contours-territoires',false,'');
      this.setIconColor(e.srcElement,this.sousMenuBasemapVisibility,"#8BE7BA");

      //Si on ouvre le card, on change le tooltip
      if (this.sousMenuBasemapVisibility) { this.toolTipForBasemapBouton='Fermer'; }

      //On supprime le gris de l'autre sous boutons de la categorie
      this.setBackgroundColor('petit-bouton-contours-territoires',false,'');

      //On supprime toutes les autres cards
      this.sousMenuContoursTerritoiresVisibility=this.sousMenuMesureVisibility=false;

    }
    if (e.srcElement.id==="petite-icone-contours-territoires") {

      //la variable de visibilité passe à true
      this.sousMenuContoursTerritoiresVisibility=!this.sousMenuContoursTerritoiresVisibility;

      //On réinitialise les tooltips au cas ou était sur une autre card
      this.setTooltip();

      //On rend vert l'icone et blanche l'autre du sous-menu
      this.setIconColor('petite-icone-basemap',false,'');
      this.setIconColor(e.srcElement,this.sousMenuContoursTerritoiresVisibility,"#8BE7BA");

      //Si on ouvre le card, on change le tooltip
      if (this.sousMenuContoursTerritoiresVisibility) { this.toolTipForContoursTerritoiresBouton='Fermer'; }

      //On supprime toutes les autres cards
      this.sousMenuBasemapVisibility=this.sousMenuMesureVisibility=false;

    }
    if (e.srcElement.id==="petite-icone-mesure") {

      //la variable de visibilité passe à true
      this.sousMenuMesureVisibility=!this.sousMenuMesureVisibility;

      //On rend vert l'icone
      this.setIconColor(e.srcElement,this.sousMenuMesureVisibility,"#8BE7BA");

      //Si on ouvre le card, on change le tooltip
      if (this.sousMenuMesureVisibility) { this.toolTipForMesureBouton='Fermer'; }

      //On supprime toutes les autres cards
      this.sousMenuBasemapVisibility=this.sousMenuContoursTerritoiresVisibility=false;

    }
    if (e.srcElement.id==="petite-icone-impression") {

      //On lance l'impression
      this.impressionCarte();

      //On réinitialise les tooltips au cas ou était sur une autre card
      this.setTooltip();

      //On rend blanc l'autre icone du sous-menu
      this.setIconColor('petite-icone-mesure',false,'');

      //On supprime toutes les autres cards
      this.sousMenuBasemapVisibility=this.sousMenuContoursTerritoiresVisibility=this.sousMenuMesureVisibility=false;
    }
  }


  /**
    * Ferme tous les sous menus
   */
  fermeSousMenu(){ this.sousMenuBasemapVisibility=this.sousMenuContoursTerritoiresVisibility=this.sousMenuMesureVisibility=false; }


  //Pour definir couleur (bool=true) ou dégriser (bool=true) si c'est evenement ou id d'1 HTML element
  /**
    * Définie la couleur ou dégrise si bool=true
    * Fonctionne pour l'id d'un HTMLElement ou pour un evenement
    * @param {string} elem
    * @param {bool} bool
    * @param {string} color
   */
  setBackgroundColor(elem,bool,color){
    if (typeof elem==="string") {
      if (bool) { document.getElementById(elem).style.backgroundColor=color; }
      else{ document.getElementById(elem).style.backgroundColor=''; }
    }
    else{
      if (bool) { elem.style.backgroundColor=color; }
      else{ elem.style.backgroundColor=''; }
    }
  }


  /**
    * Définie la couleur ou dégrise si bool=true
    * Fonctionne pour l'id d'un HTMLElement ou pour un evenement
    * @param {string} or {HTMLElement} elem
    * @param {bool} bool
    * @param {string} color
   */
  setIconColor(elem,bool,color){
    if (typeof elem==="string") {
      if (bool) { document.getElementById(elem).style.color=color; }
      else{ document.getElementById(elem).style.color=''; }
    }
    else{
      if (bool) { elem.style.color=color; }
      else{ elem.style.color=''; }
    }
  }


  /**
    * Sert dans sous menu basempap et contours territoires donc defini ici
    * Supprime les couches quo ont l'idLayer
    * @param {map} map
    * @param {string} idLayer
   */
  deleteLayer(map,idLayer){
    map.eachLayer(function(layer){
      if (layer.options.id===idLayer) { map.removeLayer(layer); }
    });
  }


  /**
    * Désactive le menu lorsqu'on mesure sur la carte
    * @param {bool} bool
   */
  disableMenu(bool){
    var menu=document.getElementById('conteneur-boutons-du-menu-outils');
    if (bool) { menu.classList.add('non-clickable'); }
    else{ menu.classList.remove('non-clickable'); }
    this.menuDisabled=bool;
  }


  ///IMPRESSION DE LA CARTE///

  /**
    * Lance l'impression de la carte
   */
  impressionCarte(){
    this.hideMenu(true);
    setTimeout(() => {
      window.print();
      this.hideMenu(false);
    }, 1);
  }

  /**
    * Cache les éléments au dessus de la carte lors de l'impression
    * @param {bool} x
   */
  hideMenu(x){
    var elem=document.getElementsByClassName('leaflet-top leaflet-left')[0] as HTMLElement;
    if (x) {elem.style.visibility='hidden';}
    else{ elem.style.visibility='visible';}
    this.appComponent.setPrinting(x);
  }

  ///FIN IMPRESSION DE LA CARTE///


}
