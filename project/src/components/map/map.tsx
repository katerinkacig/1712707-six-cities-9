import {useEffect, useRef} from 'react';
import leaflet, { LayerGroup, Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';
import {Offer} from '../../types/offer';
import {URL_ACTIVE_MARKER, URL_MARKER} from '../../const';

type MapProps = {
  points: Offer[],
  activePoint?: Offer | null,
  classMap?: string,
}

function Map({points, activePoint, classMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = points?.[0]?.city;
  const map = useMap(mapRef, city);

  const customIcon = leaflet.icon({
    iconUrl: URL_MARKER,
    iconSize: [27, 39],
    iconAnchor: [13.5, 40],
  });

  const customActiveIcon = leaflet.icon({
    iconUrl: URL_ACTIVE_MARKER,
    iconSize: [27, 39],
    iconAnchor: [13.5, 40],
  });

  useEffect(() => {
    let layerGroup: LayerGroup;
    if (map) {
      const markers = points.map((point) => leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: customIcon,
        }));

      if(activePoint){
        const activeMarker = leaflet
          .marker({
            lat: activePoint.location.latitude,
            lng: activePoint.location.longitude,
          }, {
            icon: customActiveIcon,
          });

        markers.push(activeMarker);
      }

      layerGroup = leaflet.layerGroup(markers);
      layerGroup.addTo(map);
    }

    return () => {
      if (map) {
        (map as LeafletMap).removeLayer(layerGroup);
      }
    };
  });

  return (
    <section className={`${classMap} map`} ref={mapRef}></section>
  );
}

export default Map;
