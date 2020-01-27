// import React, {useState, useRef, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1Ijoid2FzcDg0NTYiLCJhIjoiY2s1Z29pODllMDliZTNva2V4dWd6dmtxYSJ9.cULX617QPNJrqQjGGU3QzA';

// const Map = (props) => {

//     const [longitude, setLongitude] = useState('5');
//     const [latitude, setLatitude] = useState('34');
//     const [zoom, setZoom] = useState('2');
//     const mapContainer = useRef(null);

//     useEffect(() => {
//         const map = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/wasp8456/ck5gonrzl0adu1iqg4mywmqap',
//             center: [2.3488, 48.8534],
//             zoom: 12
//         });

//     });

//     return <div className='map' ref={el => (mapContainer.current = el)}/>;
// };

// export default Map;