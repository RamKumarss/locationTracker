'use client'
import dynamic from 'next/dynamic';
import React from 'react';

const LeafletWrapper = dynamic(
  () => import('@/app/leaflet/leaflet-wrapper/leaflet-wrapper'),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>
  }
);

const Leaflet = () => {
  return <LeafletWrapper></LeafletWrapper>;
};

export default Leaflet;
