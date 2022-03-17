import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import {Offer, City} from '../../types/offer';
import {URL_MARKER} from '../../const';

type MapProps = {
  city: City,
  points: Offer[],
}

function Map({city, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const customIcon = leaflet.icon({
    iconUrl: URL_MARKER,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.map((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: customIcon,
          })
          .addTo(map);
      });
    }
  });

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
