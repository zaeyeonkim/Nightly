import React, { useState } from 'react';
import KakaoMap from './KakaoMap';

function KakaoSearch() {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    if (!keyword.trim()) {
      setError('Please enter a keyword');
      return;
    }

    setError('');
    const service = new window.kakao.maps.services.Places();
    service.keywordSearch(keyword, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(result);
        setSelectedPlace(result[0]); 
      } else {
        setPlaces([]);
        setError('No results found');
      }
    });
  };

  return (
    <div>
      <div className='search'>
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="장소를 검색해보세요!"
          className='search_area'
        />
        <button className='btn_search' onClick={handleSearch}>검색</button>
      </div>

      <KakaoMap place={selectedPlace} />

      <div id="search_results">
        <h2>주변 공간</h2>
        {error && <p>{error}</p>}
        <ul>
          {places.map((place, index) => (
            <li key={index}>{place.place_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KakaoSearch;
