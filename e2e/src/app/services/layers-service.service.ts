import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayersServiceService {

  private cswUrl: string="http://localhost:8080/geoserver/csw?service=CSW&version=2.0.2&request=GetRecords&typeNames=gmd:MD_Metadata&maxRecords=1000&resultType=results&elementSetName=full&outputSchema=http://www.isotc211.org/2005/gmd"
  constructor(private _http: HttpClient) { }
  
  getXml() {
    const headers = new HttpHeaders().set('Content-Type', 'text/xml');
    return this._http.get(this.cswUrl, { headers, responseType: 'text' });
      
  }
}
