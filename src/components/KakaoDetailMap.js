// KakaoDetailMap.jsx
import React, { useEffect, useRef } from 'react';

function KakaoDetailMap({ place }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=31c89355cd145c15d27a28a5788c048b&libraries=services,clusterer,drawing&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(33.44429891106918, 126.42962997301649),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        if (place) {
          const markerPosition = new window.kakao.maps.LatLng(place.lat, place.lng);
          markerRef.current = new window.kakao.maps.Marker({
            position: markerPosition,
            map: map,
          });
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [place]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%', position: 'sticky' }}></div>;
}

export default KakaoDetailMap;
