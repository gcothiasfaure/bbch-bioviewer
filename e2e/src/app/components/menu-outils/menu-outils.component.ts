import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import * as L from 'leaflet';

@Component({
  selector: 'app-menu-outils',
  templateUrl: './menu-outils.component.html',
  styleUrls: ['./menu-outils.component.css']
})
export class MenuOutilsComponent{

  //Si on veut utiliser les fonctions de appComponent :
  constructor(private appComponent: AppComponent) {}

  //variables d'affichage des sous catégories de boutons
  sousBoutonsOptionsCarteVisibility=false;

  //variables d'affichage des cards
  sousMenuBasemapVisibility=false;
  sousMenuContoursTerritoiresVisibility=false;

  //getters pour visibilité des sous menus
  getSousMenuBasemapVisibility(){return this.sousMenuBasemapVisibility;}
  getSousMenuContoursTerritoiresVisibility(){return this.sousMenuContoursTerritoiresVisibility;}

  //setters pour visibilité des sous menus
  setSousMenuBasemapVisibility(x){this.sousMenuBasemapVisibility=x}
  setSousMenuContoursTerritoiresVisibility(x){this.sousMenuContoursTerritoiresVisibility=x}

  //variables des valeurs des tooltips des boutons
  toolTipForBasemapBouton;
  toolTipForContoursTerritoiresBouton;

  //Pour affilier à chaque variable le tooltip correspondant
  setTooltip(){
    this.toolTipForBasemapBouton="Choisir le fond de carte";
    this.toolTipForContoursTerritoiresBouton="Afficher les régions et départements français";
  }


  //Pour afficher les sous bouttons partie layer
  afficheConteneurSousBoutonsOptionsCarte(e){

    //On rend visible l'elelement en rendant true la valeur de la variable correspondante
    this.sousBoutonsOptionsCarteVisibility=!this.sousBoutonsOptionsCarteVisibility;

    //On réinitialise les tooltips au cas ou était sur une autre card
    this.setTooltip();

    //On ferme tous les cards
    this.fermeSousMenu();

    //Si on ouvre la sous-cat on grise sinon style par défaut
    this.setBackgroundColor(e.srcElement.offsetParent.parentElement,this.sousBoutonsOptionsCarteVisibility,'#E9E9E9');
  }

  //Apres un clic sur un sous boutons pour afficher une des cards
  afficheSousMenu(e){
    if (e.srcElement.id==="petite-icone-basemap") {

      //la variable de visibilité passe à true
      this.sousMenuBasemapVisibility=!this.sousMenuBasemapVisibility;

      //On réinitialise les tooltips au cas ou était sur une autre card
      this.setTooltip();

      //On grise le sous bouton
      this.setBackgroundColor(e.srcElement.offsetParent,this.sousMenuBasemapVisibility,"#ABABAB");

      //Si on ouvre le card, on change le tooltip
      if (this.sousMenuBasemapVisibility) { this.toolTipForBasemapBouton='Fermer'; }

      //On supprime le gris de l'autre sous boutons de la categorie
      this.setBackgroundColor('petit-bouton-contours-territoires',false,'');

      //On supprime toutes les autres cards
      this.sousMenuContoursTerritoiresVisibility=false;

    }
    if (e.srcElement.id==="petite-icone-contours-territoires") {

      //la variable de visibilité passe à true
      this.sousMenuContoursTerritoiresVisibility=!this.sousMenuContoursTerritoiresVisibility;

      //On réinitialise les tooltips au cas ou était sur une autre card
      this.setTooltip();

      //On grise le sous bouton
      this.setBackgroundColor(e.srcElement.offsetParent,this.sousMenuContoursTerritoiresVisibility,"#ABABAB");

      //Si on ouvre le card, on change le tooltip
      if (this.sousMenuContoursTerritoiresVisibility) { this.toolTipForContoursTerritoiresBouton='Fermer'; }

      //On supprime le gris de l'autre sous boutons de la categorie
      this.setBackgroundColor('petit-bouton-basemap',false,'');

      //On supprime toutes les autres cards
      this.sousMenuBasemapVisibility=false;

    }
  }


  //Pour fermer la card affichée
  fermeSousMenu(){ this.sousMenuBasemapVisibility=this.sousMenuContoursTerritoiresVisibility=false; }


  //Pour definir couleur (bool=true) ou dégriser (bool=true) si c'est evenement ou id d'1 HTML element
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


  //Sert dans sous menu basempap et contours territoires donc defini ici
  deleteLayer(map,idLayer){
    map.eachLayer(function(layer){
      if (layer.options.id===idLayer) { map.removeLayer(layer); }
    });
  }


}
