import {Component} from '@angular/core';
import { AppComponent } from '../../app.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import {LayersComponent} from '../../components/layers/layers.component';
import { LayersServiceService } from './../../services/layers-service.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-module-recherche',
  templateUrl: './module-recherche.component.html',
  styleUrls: ['./module-recherche.component.css']
})
export class ModuleRechercheComponent{

  public xmlString : string;

  //Variables qui vont suivre si l'input de l'utilisateur fait partie du catalogue de couches
  public presentN: boolean= false;
  public present: boolean=false;

  //Variables où on va stocker les différents noms de couches, protocoles et espace de travail
  public  array_nom_protocol : Array<string>= [];
  public array_nom_couches: Array<string>= [];
  public array_nom_types: Array<string>= [];

  //Booleens qui vont déterminer l'affichage d'un message d'information spécifique à la recherche par attribut
  public info:boolean=true;
  public infoCard=false;

  public validerDisa=false;
  public boutSupprDisa=true;


  //Si on veut utiliser les fonctions de appComponent :
  constructor(private appComponent: AppComponent,private layersComponent: LayersComponent,private layersService: LayersServiceService) {

  }
  recup=this.layersService.getXml().subscribe(
    (recup) => {
      this.xmlString= recup;
      var stringxml=this.xmlString;
      
      // parser xml et récuperer les 2 arrays : espace:nom_couche / [nom_couche , protocol]
      var arrays = this.layersComponent.parsing_recup_XML(this.xmlString)
      var nom_couche=arrays[0];

      // var nom_couches=this.recup_nom(nom_couche);
      var nom_couches=[];
      var nom_types=[];
      var str;
      var i : string | number;

      /**
       * Pour la constitution du catalogue, on classe les couches en deux classes 'couches' et
       *'types', qui correspondent à l'espace de travail auquel elles appartiennent
       */
      for (i in nom_couche){
        str= nom_couche[i];
        var array = str.split(":");
        if (array[0]=='couches'){
          nom_couches.push(array[1]);
        }
        else if(array[0]=='types'){
          nom_types.push(array[1]);
        }
      }

      //On stocke les différentes valeurs du catalogue de couches dans les variables définies au départ
      this.array_nom_protocol=nom_couche;
      this.array_nom_couches=nom_couches;
      this.array_nom_types=nom_types;

      //ici pour la recherche par attribut, les options vont être les couches d'espace de travail 'types'
      var options= this.array_nom_types;

      //Portion de code qui permet que la liste des options d'input évolue au fur et à mesure de l'input de l'utilisateur
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => { const filterValue = value.toLowerCase();

          //On teste à chaque fois que l'input change si l'input actuel fait partie du catalogue de couches
          if (options.includes(value)){
            this.present=true;
          }
          else{
            this.present=false;
          }

          return options.filter(option => option.toLowerCase().includes(filterValue));

        }),
      );

      //Procédure analogue pour la recherche par nom avec les couches 'couches'
      var optionsN: string[] = this.array_nom_couches;
      this.filteredOptionsN = this.myControlN.valueChanges
      .pipe(
        startWith(''),
        map(value => { const filterValue = value.toLowerCase();
          if (optionsN.includes(value)){
            this.presentN=true;
          }
          else{
            this.presentN=false;
          }
          return optionsN.filter(option => option.toLowerCase().includes(filterValue));

        }),
      );
    })

  //formControl qui suit l'input de l'utilisateur dans recherche par attribut
  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  //formControl qui suit l'input de l'utilisateur dans recherche par nom
  myControlN = new FormControl();
  filteredOptionsN: Observable<string[]>;

  /**
    * Getteur de array_nom_couches
    * @return {string[]}
   */
  public getArray() {
    return this.array_nom_couches;
  }

  /**
    * fonction qui sert à récuperer seulement le nom de la couche dans un array qui contient
    * espace:nom couche
    * @return {string[]}
   */
  recup_nom(array_espace_nom : Array<string>){
    var array_nom =[];
    var str;
    var i : string | number;
    for (i in array_espace_nom){
      str= array_espace_nom[i];
      var array = str.split(":");
      array_nom.push(array[1]);

    }
    return array_nom
  }

    /**
    * fonction qui sert à récuperer seulement l'espace de travail de la couche dans un array
    *  qui contient espace:nom couche
    * @return {string[]}
   */
  recup_espace(array_espace_nom : Array<string>){
    var array_espace =[];
    var str;
    var i : string | number;
    for (i in array_espace_nom){
      str= array_espace_nom[i];
      var array = str.split(":");
      array_espace.push(array[0]);

    }
    return array_espace
  }


  /**
    * Fait la selection et recherche la couche (pour type)
    * @param {string[]} value
    * @param {bool} present
   */
  recherche(value:string[],present){

    if (!present){ alert('Cette couche est inconnue'); }

    else{

      //On affiche la popup qui nous dit de selectionner une zone
      this.infoCard=true;

      //necessaire pour y faire appel dans les fonctions:
      var self=this;
      var couche=value;

      //On récupère la carte
      var carte=this.appComponent.getMap();

      //On récupère des éléments HTML
      var carteContenant=document.getElementById('mymap');
      var boutValider=document.getElementById('valide1');
      var iconeSuppr=document.getElementById('iconeSuppr');

      //Définition des variables
      var oneCorner;
      var twoCorner;
      var bounds;
      var areaRect;
      var areaRectHa;

      //On doit iniialiser ces variables au hasard et elles seront supprimés:
      var rect=L.rectangle([[1,1],[1,1]], {color:"#ff7800", weight:0.8});
      var rectMove=L.rectangle([[1,1],[1,1]], {color:"#ff7800", weight:1});

      //On active la possibilité de draguer pour dessiner
      carte.on('mousedown', setOneCorner);
      carte.on('mouseup', setTwoCorner);

      //Pour plus de précision lors du drag
      carteContenant.style.cursor='crosshair';
      carte.dragging.disable();


      /**
        * Définie le coint haut gauche du rectangle de selection
        * @param {event} e
       */
      function setOneCorner(e){

        oneCorner = e.latlng;

        //On va dessiner un rectangle au mouvement de la souris pour avoir une idee de ce que on est en train de dessiner
        carte.on('mousemove',onMove);
      }


      /**
        * Définie le coint bas droit du rectangle de selection et le dessine
        * @param {event} e
       */
      function setTwoCorner(e){

        //On supprime le derier rectangle lors du mouvement de souris
        rectMove.remove();

        //On stop l'écoute sur la carte car la selection est finie
        carte.off('mousedown', setOneCorner);
        carte.off('mouseup', setTwoCorner);
        carte.off('mousemove',onMove);

        //On définie le coint bas droit du rectangle et on le dessine
        twoCorner = e.latlng;
        bounds = L.latLngBounds([oneCorner, twoCorner]);
        rect=L.rectangle(bounds, {color:"#ff7800", fill:false,weight:1}).addTo(carte);

        //On calcule l'aire du rectangle selectionné
        let sw=bounds.getSouthWest();
        let nw=bounds.getNorthWest();
        let se=bounds.getSouthEast();
        let ne=bounds.getNorthEast();
        areaRect=sw.distanceTo(nw)*se.distanceTo(ne);
        areaRectHa=areaRect/10000;

        if (areaRectHa<100) {

          //On supprime le rectangle et on réessaie
          rect.remove();
          alert('Selection trop petite, réessayez');
          self.recherche(couche,present);
        }

        else if (areaRectHa>10000000) {

          //On supprime le rectangle et on réessaie
          rect.remove();
          alert('Selection trop grande, réessayez');
          self.recherche(couche,present);
        }

        else{
          //On revient aux reglages carte d'origine
          carte.dragging.enable();
          carteContenant.style.cursor='grab';

          //On demande au plugin d'afficher la couche
          self.addPlug(couche,rect);

          //On supprime la popup info
          self.infoCard=false;

          //On active la bouton supprimer couche
          self.boutSupprDisa=false;
          iconeSuppr.classList.remove('butt-disabled');
          iconeSuppr.classList.add('butt-enable');
        }

      }


      /**
        * Dessine le rectange intermediaire lors du mvt de la souris
        * @param {event} e
       */
      function onMove(e) {
        rectMove.remove();
        rectMove=L.rectangle([oneCorner, e.latlng], {color:"#ff7800", weight:1}).addTo(carte);
      }

    }


  }


  /**
    * Supprime la selection
   */
  deleteSelection() {
    var carte=this.appComponent.getMap();
    carte.eachLayer(function(layer){
      if (layer.options.geometryField) { layer.remove();  }
      if (layer.options.color) { layer.remove();  }
    });
  }


  /**
    * Demande au plugin d'afficher la couche
    * @param {string[]} value
    * @param {L.rectangle} filtre
   */
  public addPlug(value:string[],filtre) {
      this.appComponent.addPlugin('types',this.myControl.value.toLowerCase(),'red',filtre);
  }


  /**
    * Si la couche existe, alors on demande au plugin d'afficher la couche
    * @param {string[]} value
    * @param {bool} present
   */
  public addPlugN(value:string[],present){
    if(present){ this.appComponent.addPlugin('couches',this.myControlN.value.toLowerCase(),'red','sans filtre'); }
    else{ alert('Cette couche est inconnue'); }
  }


  /**
    * change le focus de mat tab group
   */
  public reverseInfo(){
    this.info=!this.info;
  }


}
