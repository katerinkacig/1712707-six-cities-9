import React, {useEffect, useRef} from 'react';
import leaflet, { LayerGroup, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import {URL_ACTIVE_MARKER, URL_MARKER} from '../../const';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';

type activePointProps = {
  activePoint: Offer,
}

function MapNear({activePoint}:activePointProps): JSX.Element {
  const mapRef = useRef(null);
  const { nearOffers } = useAppSelector((state) => state);
  const city = activePoint?.city;
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
      const nearMarkers = nearOffers.slice(0, 3).map((point, index) => leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: customIcon,
        }));
      const activeMarker = leaflet
        .marker({
          lat: activePoint.location.latitude,
          lng: activePoint.location.longitude,
        }, {
          icon: customActiveIcon,
        });

      layerGroup = leaflet.layerGroup([activeMarker, ...nearMarkers]);
      layerGroup.addTo(map);
    }

    return () => {
      if (map) {
        (map as Map).removeLayer(layerGroup);
      }
    };
  });

  return (
    <section className="property__map map" ref={mapRef}></section>
  );
}

export default MapNear;
