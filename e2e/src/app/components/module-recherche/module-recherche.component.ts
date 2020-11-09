import {Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import {LayersComponent} from '../../components/layers/layers.component';
import { LayersServiceService } from './../../services/layers-service.service';


@Component({
  selector: 'app-module-recherche',
  templateUrl: './module-recherche.component.html',
  styleUrls: ['./module-recherche.component.css']
})
export class ModuleRechercheComponent implements OnInit {

  public xmlString : string;
  public  array_nom_protocol : Array<string>= [];
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
      this.array_nom_protocol=nom_couche;
      console.log(this.array_nom_protocol);
  
    })

  
  myControl = new FormControl();
  options: string[] = ['ZN','MAI','ADM','STA','EP','INPG','NAT'];
  filteredOptions: Observable<string[]>;



  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );

  }
  public addPlug(value:string[]) {
    if (value.includes(this.myControl.value)){
      this.appComponent.addPlugin('types',this.myControl.value.toLowerCase(),'red');
    }
    else{
      alert("La couche recherchée n'existe pas");
    }
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }   
 
}

