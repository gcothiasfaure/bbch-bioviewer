import {AfterViewInit, Component, OnInit } from '@angular/core';
import { LayersServiceService } from './../../services/layers-service.service';
import {ElementRef} from '@angular/core';
import { ViewChild } from '@angular/core';
import * as xml2js from 'xml2js';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';

//import app root
import{AppComponent} from './../../app.component'
@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})
export class LayersComponent implements OnInit, AfterViewInit {
	
  public data : any;
  public xmlString : string;
  public  array_nom_couches: Array<string>=['A'];
  public  array_nom_protocol : Array<string>= [];
  public array_nom_espace : Array<string>= [];
  public  array_service_LayerSelected : Array<string>= [];
  public selected = '';

  

  @ViewChild("layerChoisie", {read: ElementRef}) layerChoisie: ElementRef;
  @ViewChild("container") container: ElementRef;


  constructor(private layersService: LayersServiceService, private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.filteredOptionsN = this.myControlN.valueChanges
    .pipe(
      startWith(''),
      map(valueN => this._filterN(valueN)),
    ); 
 
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
        this.array_nom_couches=array_nom;
        console.log(array_nom)
        this.array_nom_protocol=array_nom_protocol;  
        console.log(array_nom_protocol)
        this.array_nom_espace=array_espace;
        console.log(array_espace);
      }
    )
  }
  myControlN = new FormControl();
  optionsN: string[] = this.array_nom_couches;
  filteredOptionsN: Observable<string[]>;

  private _filterN(value: string): string[] {
    const filterValueN = value.toLowerCase();

    return this.optionsN.filter(layer_name => layer_name.toLowerCase().includes(filterValueN));
  }  
  public addPlug(value:string[]) {

    if (value.includes(this.myControlN.value)){
      this.appComponent.addPlugin('couches',this.myControlN.value.toLowerCase(),'black');
    }
    else{
      alert("La couche recherchée n'existe pas");
    }
  }
  ngAfterViewInit(){
    
  }
  recupNomcouche(){
    return this.array_nom_couches;
  };
  recupNomespace(){;
    return this.array_nom_espace;
  }
  recupNomprotocol(){
    return this.array_nom_protocol;
  }

  SelectLayer(value, array_nom_protocol){
    console.log(value);
    var array_service=[];
    var i,j : string | number;
    var str;
    for(i in array_nom_protocol){
      str= array_nom_protocol[i][0];
      var array = str.split(":");
      if(array[1]==value){
        array_service.push(array_nom_protocol[i][1])
      }
      
    }
    this.array_service_LayerSelected=array_service;
    console.log(this.array_service_LayerSelected)
    
  }

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

  parsing_recup_XML(textXML){
    var parser= new xml2js.Parser(  
      {  
        trim: true,  
        explicitArray: true  
      }); 

    var k: string | number;
    var i: string | number;
    //var j: string | number;
    let array_nom=[]
    let array_res=[]
    let array_nom_protocol=[]
    let inlineRes
    parser.parseString(textXML, function (err, result) {
      var obj_gmd=result['csw:GetRecordsResponse']['csw:SearchResults'][0]['gmd:MD_Metadata'];
      for (k in obj_gmd){
        var nom= obj_gmd[k]['gmd:fileIdentifier'][0]['gco:CharacterString'][0];
        array_nom.push(nom)
        
        
        inlineRes= obj_gmd[k]['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'];
        array_res.push(inlineRes)

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
