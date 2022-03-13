import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import {ZOOM_MAP} from '../const';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const mapLayer = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: ZOOM_MAP,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(mapLayer);

      setMap(mapLayer);
    }

    if (map !== null && city) {
      map.panTo([city.lat, city.lng]);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
