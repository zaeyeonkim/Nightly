import React, { useEffect, useRef } from 'react';

function KakaoMap({ place }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=31c89355cd145c15d27a28a5788c048b&libraries=services,clusterer,drawing&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.54181455975111, 126.84029626367658),
          level: 3,
        };
        mapInstance.current = new window.kakao.maps.Map(container, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapInstance.current && place) {
      const position = new window.kakao.maps.LatLng(place.y, place.x);
      mapInstance.current.setCenter(position);
    }
  }, [place]);

  return <div ref={mapRef} style={{ width: '100%', height: '320px' }}></div>;
}

export default KakaoMap;
