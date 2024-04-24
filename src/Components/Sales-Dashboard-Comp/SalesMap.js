// import React, { useEffect, useState } from 'react';
// import ChoroplethMap from './ChoroplethMap';
// import salesData from '../../salesData.json';

// const SalesMap = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(salesData);
//   }, []);

//   return (
//     <div className="sales-map">
//       <ChoroplethMap data={data} />
//     </div>
//   );
// };

// export default SalesMap;




/////////////

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const SalesMap = () => {
  return (
    <div className="sales-map">
      <h2>Sales Map</h2>
      <MapContainer center={[29.3759, 47.9774]} zoom={9} style={{ width:'100%', height: '600px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default SalesMap;
