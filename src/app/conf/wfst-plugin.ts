declare const L: any;
import 'leaflet-wfst/dist/leaflet-wfst.min.js';
import { environment } from './../../environments/environment';


/**
  * Initialise le plugin pour afficher une couche wfs
  * @param {string} nomWorkspace
  * @param {string} nomCouche
  * @param {string} couleur
  * @param {string} or {L.rectangle} filtre
 */
export function initPlugin(nomWorkspace,nomCouche,couleur,filtre) {

  //Options du plugin de récupération de wfst
  var wfstPointOptions;

  //on initialise le filtre d'afficage des donnnées
  var filter = new L.Filter.Within('geom_gene',filtre, L.CRS.EPSG3857);
  filter.toGml();

  //On initialise d'abord les options du plugin
  //Si on ne demande pas de filtre
  if (filtre=='sans filtre') {

     wfstPointOptions = {
      crs: L.CRS.EPSG4326,
      showExisting: true,
      geometryField: 'geom',
      url: 'http://localhost:8080/geoserver/wfs',
      typeNS: nomWorkspace,
      typeName: nomCouche,
      maxFeatures: 1000,
      opacity: 1,
      style: (layer) => {
        return {
          color: couleur,
          weight: 1 };
      }

    };

  }

  //Si on demande un filtre
  else{
     wfstPointOptions = {
      crs: L.CRS.EPSG4326,
      showExisting: true,
      geometryField: 'geom',
      url: 'http://localhost:8080/geoserver/wfs',
      typeNS: nomWorkspace,
      typeName: nomCouche,
      opacity: 1,
      //On prend le filtre en compte :
      filter:filter,
      style: (layer) => {
        return {
          color: couleur,
          weight: 1 };
      }

    };

  }

  //On rtourne enuite les données wfst transformées en GeoJSON
  return new L.WFST(

    //On utilise les options :
    wfstPointOptions,

    new L.Format.GeoJSON({

      crs: L.CRS.EPSG4326,

      pointToLayer(geoJsonPoint, latlng) {
        return new L.CircleMarker(latlng, {
          radius: 10, });
      }

    })

  );


}
