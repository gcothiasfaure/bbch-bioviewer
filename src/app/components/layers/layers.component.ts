import {AfterViewInit, Component, OnInit } from '@angular/core';
import { LayersServiceService } from './../../services/layers-service.service';
import {ElementRef} from '@angular/core';
import { ViewChild } from '@angular/core';

// importer le module xml2js to transformer/parser un string xml en objet javascript 
import * as xml2js from 'xml2js';

//importer leaflet pour ajouter les couches à la carte 
import * as L from 'leaflet';

// importer initPlugin pour instancier le plugin leaflet-wfst
import { initPlugin } from './conf/wfst-plugin';

// importer environnement pour récuperer les urls du geoserver utilisés
import { environment } from './../../../environments/environment';

//importer app root pour récuperer la map
import{AppComponent} from './../../app.component'

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})
export class LayersComponent implements OnInit {
  //définir les attributs de la classe 
  public data : any;
  public xmlString : string;
  public  array_nom_couches: Array<string>=['A'];
  public  array_nom_protocol : Array<string>= [];
  public array_espace : Array<string>= [];
  public  array_service_LayerSelected : Array<string>= [];
  public selected = '';
  public num_selectedlayers = 0;
  public  array_espace_nom : Array<Object>= [];
  public layerSelected;

  // definir des attributs qui seront ajoutés aux éléments HTML
  htmlVariable: string = "";

  buttons=[];// bouttons pour les services de publication de chaque couche
  //=[{disabled: ..., color: '...', label: '...', service:".."}...]

  selectedLayers=[]; // array qui stocke les couches séléctionnées par l'utilisateur et ajoutées à la carte leaflet 
  //=[{name: ..., legendTitle:..., layerObj: ... }...]

  // récuperer les elements HTML dans le .ts
  @ViewChild("layerChoisie", {read: ElementRef}) layerChoisie: ElementRef;
  @ViewChild("container") container: ElementRef;
  @ViewChild("buttonWMS") buttonWMS: ElementRef;

  // on injecte le service layersService et le composant appCompoant dasn le constructeur de la classe pour pouvoir accéder à leurs fcts.
  constructor(private layersService: LayersServiceService, private appComponent:AppComponent) { }

  ngOnInit(): void {
    //lors de l'initiation du composant, récuperer xml du CSW sous format texte.
    //subscribe() permet de manipuler les objets Observable (réponse de la requête)
    this.data=this.layersService.getXml().subscribe(
      (data) => {
        this.xmlString= data;
        var stringxml=this.xmlString;

        // parser xml et récuperer les 2 arrays : espace:nom_couche / [nom_couche , protocol]
        var arrays = this.parsing_recup_XML(this.xmlString);
        var array_espace_nom =  arrays[0];
        var array_nom_protocol= arrays[1];

        // récuperer seulement le nom des couches
        var array_nom= this.recup_nom(array_espace_nom)
        var array_espace=this.recup_espace(array_espace_nom)

        // ajouter les valeurs aux variables de la classe
        this.array_espace_nom=array_espace_nom;
        this.array_nom_couches=array_nom;
        this.array_nom_protocol=array_nom_protocol;
        this.array_espace=array_espace;

      }
    )
  }
  // fct à utiliser dans le composant recherche
  // fct pour récuperer un array contenant les noms des couches publiées sur le geoserever
  recupNomcouche(){
    return this.array_nom_couches;
  };
  // fct pour récuperer un array contenant les espaces des couches publiées sur le geoserever
  recupNomespace(){;
    return this.array_espace;
  }
  // fct pour récuperer un array contenant les protocoles de publication 
  recupNomprotocol(){
    return this.array_nom_protocol;
  }


  // fct pour supprimer les couches ajoutées à la carte et dans l'element HTML Légende
  deleteLayer(layer,name){
    //supprimer la couche de la carte
    this.appComponent.getMap().removeLayer(layer);
    // supprimer la couche de Légende
    for (let i = 0; i < this.selectedLayers.length; i++ ){
      if(this.selectedLayers[i].name== name){
        this.selectedLayers.splice(i, 1);
        break;
      }
    }
    //modifier le nombre des couches ajoutées à la carte
    this.num_selectedlayers= this.num_selectedlayers-1
  }

  // fct qui permet de construire la requete WMS pour une couche
  WMSLayer(LayerSelected, array_espace_nom){
    var i: string | number;
    var str;
    var espace_travail : string;
    for (i in array_espace_nom){
      str= array_espace_nom[i];
      var array = str.split(":");
      if(array[1]==LayerSelected){
        espace_travail= array[0];
      }
    }
    // la fct tileLayer.wms de leaflet permer d'ajouter les couches publiées en WMS  
    var couche = L.tileLayer.wms(environment.geoserverURL+espace_travail+"/wms?service=WMS", {
      layers: espace_travail+ ':' +LayerSelected,// propriété pour définir l'espace et le nom de la couche 'espace:nom'
      format: 'image/png',// format de réponse 
      transparent: true,
      attribution: LayerSelected,
      version: '1.1.0', // version WMS utilisée
    })

    return couche;
  }

  //fct pour ajouter une couche WMS à la carte 
  addWMSLayer(LayerSelected, array_espace_nom){
    var couche = this.WMSLayer(LayerSelected, array_espace_nom).addTo(this.appComponent.getMap());
    console.log('add WMS layer')
    return couche;
  }

  //fct pour ajouter une couche WFS à la carte
  addWFSLayer(LayerSelected, array_espace_nom){
    var i: string | number;
    var str;
    var espace_travail : string;
    for (i in array_espace_nom){
      str= array_espace_nom[i];
      var array = str.split(":");
      if(array[1]==LayerSelected){
        espace_travail= array[0];
      }
    }
    //initier le plugin lefalet-wfst pour la couche choisie 
    const plugin = initPlugin(espace_travail,LayerSelected);
    plugin.addTo(this.appComponent.getMap());
    return plugin;
  }

  // selon le choix d'utilisateur on ajoute les couche (choix de service)
  loadLayer(service){
    if(service=="WMS"){
      //ajouter la couche
      var lyr1 =this.addWMSLayer(this.layerSelected,this.array_espace_nom);
      //créer des elements à ajouter à la légende pour chaque WMS couche ajoutée  
      var str1= this.layerSelected;
      var str2= "WMS :"+ this.layerSelected;
      this.num_selectedlayers= this.num_selectedlayers+1
      this.selectedLayers.push({name: str1, legendTitle:str2, layerObj: lyr1 });
    }
    if(service=="WFS"){
      //ajouter la couche
      var lyr2= this.addWFSLayer(this.layerSelected,this.array_espace_nom);
      //créer des elements à ajouter à la légende pour chaque WFS couche ajoutée 
      var str1= this.layerSelected;
      var str2= "WFS :"+ this.layerSelected;
      this.num_selectedlayers= this.num_selectedlayers+1
      this.selectedLayers.push({name: str1, legendTitle:str2, layerObj: lyr2 });
    }
  }
  // fct pour permettre à l'utilisateur de choisir la couche qu'il veut afficher sur la carte
  SelectLayer(value, array_nom_protocol){
    // recreer les bouttons pour la couches sélectionée
    this.buttons=[];
    this.layerSelected= value;
    var array_service=[];
    var i,j: string | number;
    var str;
    // recuperer les services de publication de la couche choisie dans un array
    for(i in array_nom_protocol){
      str= array_nom_protocol[i][0];
      var array = str.split(":");
      console.log(array[1])
      if(array[1]==value){
        array_service.push(array_nom_protocol[i][1])
      }

    }
    // ajouter les informations aux elemnts HTML
    this.array_service_LayerSelected=array_service;
    var ligne1="<br> <p>Services de publication disponibles : </p>"
    var serviceWMS: boolean;
    var serviceWFS: boolean;
    for(j in array_service){
      if(array_service[i]="OGC:WMS"){
        serviceWMS= true;
      }
      if(array_service[i]="OGC:WFS"){
        serviceWFS= true;
      }
    }

    this.htmlVariable= ligne1;
    if(serviceWMS){
      var buttonWMS= this.buttons.push({disabled: false, color: 'primary', label: 'Ajouter couche WMS', service:"WMS"});

    }
    if(serviceWFS){
      var buttonWFS= this.buttons.push({disabled: false, color: 'primary', label: 'Ajouter couche WFS', service:"WFS"});

    }

  }

  // fct pour récuperer les noms des couches publiées.
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
  // fct pour récuperer les espaces des couches publiées.
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
  // fct qui permet de parser lxm et parcourir l'objet JS pour récuperer les metadonnées des couches publiées.
  parsing_recup_XML(textXML){
    //définition du parser 
    var parser= new xml2js.Parser(
      {
        trim: true,
        explicitArray: true
      });
    // définir les variables
    var k: string | number;
    var i: string | number;
    let array_nom=[]
    let array_res=[]
    let array_nom_protocol=[]
    let inlineRes
    // parser xml sous format txt
    parser.parseString(textXML, function (err, result) {
      // récuperer les objets gmd du CSW 
      var obj_gmd=result['csw:GetRecordsResponse']['csw:SearchResults'][0]['gmd:MD_Metadata'];
      // récuperer les (noms+espaces) de toutes les couches dans un array
      for (k in obj_gmd){
        var nom= obj_gmd[k]['gmd:fileIdentifier'][0]['gco:CharacterString'][0];
        array_nom.push(nom)


        inlineRes= obj_gmd[k]['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'];
        array_res.push(inlineRes)
        // récuperer les protocoles des couches. 
        for(i in inlineRes){
          var elmnt_array= inlineRes[i];
          var protocol= elmnt_array['gmd:protocol'][0]['gco:CharacterString'][0];
          array_nom_protocol.push([nom,protocol]);

        }

      }

  });
  return [array_nom, array_nom_protocol];
  }

}
