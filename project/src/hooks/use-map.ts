import {MutableRefObject, useEffect, useState} from 'react';
import leaflet, { Map }  from 'leaflet';
import {City} from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>,city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && city?.location) {
      const mapLayer = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(mapLayer);

      setMap(mapLayer);
    }

    if (map !== null && city?.location) {
      map.panTo([city.location.latitude, city.location.longitude]);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
