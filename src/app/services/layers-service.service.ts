import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LayersServiceService {

  private cswUrl: string= environment.geoserverCSW;
  constructor(private _http: HttpClient) { }

  getXml() {
    const headers = new HttpHeaders().set('Content-Type', 'text/xml');
    return this._http.get(this.cswUrl, { headers, responseType: 'text' });

  }
}
