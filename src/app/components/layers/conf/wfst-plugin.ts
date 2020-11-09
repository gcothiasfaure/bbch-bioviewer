
declare const L: any;
import './../../../../../node_modules/leaflet-wfst/dist/leaflet-wfst.min.js';
import { environment } from './../../../../environments/environment';
/**
 * Initialize the Leaflet plugin
 */
export function initPlugin(typeNS,typeName) {
  const wfstPointOptions = {
    crs: L.CRS.EPSG4326,
    showExisting: true,
    geometryField: 'geom',
    url: environment.geoserverWFS,
    typeNS: typeNS,
    typeName: typeName,
    //maxFeatures: 100,
    opacity: 1,
    style: (layer) => {
      // you can use if statemt etc
      return {
        color: 'black',
        weight: 1,
      };
    },
  };
  return new L.WFST(
    wfstPointOptions,
    new L.Format.GeoJSON({
      crs: L.CRS.EPSG4326,
      pointToLayer(geoJsonPoint, latlng) {
        return new L.CircleMarker(latlng, {
          radius: 10,
        });
      },
    })
  );
}
