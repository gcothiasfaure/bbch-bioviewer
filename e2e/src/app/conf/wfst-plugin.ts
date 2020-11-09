declare const L: any;
import 'leaflet-wfst/dist/leaflet-wfst.min.js';

/**
 * Initialize the Leaflet plugin
 */

export function initPlugin(att1,att2,att3) {
  const wfstPointOptions = {
    crs: L.CRS.EPSG4326,
    showExisting: true,
    geometryField: 'geom',
    url: 'http://localhost:8080/geoserver/wfs',
    typeNS: att1,
    typeName: att2,
    maxFeatures: 1000,
    opacity: 1,
    style: (layer) => {
      // you can use if statemt etc
      return {
        color: att3,
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
