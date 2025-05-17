'use client';

import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

function FocusMap({ lat, lng }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      //   map.setView([lat, lng], 17); // zoom level 17
      map.flyTo([lat, lng], 17, { duration: 1.5 });
    }
  }, [lat, lng, map]);

  return null; // nothing to render
}

export default FocusMap;
