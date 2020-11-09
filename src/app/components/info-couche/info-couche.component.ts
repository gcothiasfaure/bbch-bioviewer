import { Component } from '@angular/core';

@Component({
  selector: 'app-info-couche',
  templateUrl: './info-couche.component.html',
  styleUrls: ['./info-couche.component.css']
})

export class InfoCoucheComponent{


  /**
    * Affiche les infos de couches par nom
    * @param {array} listCouches
   */
  afficheCoucheNom(listCouches){

    //On affiche que l'on affiche les couches par nom et on vide le contenu préalable
    document.getElementById('couche').innerHTML='nom';
    document.getElementById('aRemplir').innerHTML='';

    //Remplir la légende
    listCouches.forEach(elem => {
      document.getElementById('aRemplir').innerHTML+='<div style="background-color:' + elem[1]+ ';height:10px; width: 10px;display:inline-block;"></div> '+elem[0]+'<br>';
    });
  }


  /**
    * Affiche les infos de couches par nom
    * @param {array} listCouches
   */
  afficheCoucheType(listCouches){

    //On affiche que l'on affiche les couches par nom et on vide le contenu préalable
    document.getElementById('couche').innerHTML='type';
    document.getElementById('aRemplir').innerHTML='';

    //Remplir la légende
    listCouches.forEach(elem => {
      document.getElementById('aRemplir').innerHTML+='<div style="background-color:' + elem[1]+ ';height:10px; width: 10px;display:inline-block;"></div> '+elem[0]+'<br>';
    });
  }

}
