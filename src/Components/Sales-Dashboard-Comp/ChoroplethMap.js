// import { MapContainer, TileLayer } from "react-leaflet";

// const center = [29.913178161011906, 47.506284930172825];
// const Chrolopath = () => {
//   return (
//     <div className="map-box" style={{width:'300px', height:'100px'}}>
//       <MapContainer
//         center={center}
//         zoom={10}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
//           url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     </div>
//   );
// };

// export default Chrolopath;


import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import * as d3 from 'd3';

const ChoroplethMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([29.3759, 47.9774], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <MapContainer ref={mapContainerRef} className="choropleth-map" style={{ height: '600px', width: '100%' }}></MapContainer>;
};

export default ChoroplethMap;
