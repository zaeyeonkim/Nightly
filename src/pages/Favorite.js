import React, { useState } from 'react'
import '../css/favorite.css'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'


const Favorite = () => {
  const [selecteItem, setSelectedItem] = useState('favList')
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
        <Link to="/home">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ marginTop: '30px', width: '88px', height: '35px' }} />
        </div>
      </Link>

      
      <div className='fav_area'>
        <ul>
          <li onClick={() => handleItemClick('favList')}>
            <a className={selecteItem === 'favList' ? 'active' : ''}>
              리스트보기
            </a>
          </li>
          <li onClick={() => handleItemClick('roomCompare')}>
            <a className={selecteItem === 'roomCompare' ? 'active' : ''}>
              숙소 비교하기
            </a>
          </li>
        </ul>

        <div className='fav_content'>
          {selecteItem === 'favList' && <FavListContent />}
          {selecteItem === 'roomCompare' && <RoomCompareContent />}
        </div>
        </div> 
        <NavBar />
    </div>
  )
}

const FavListContent = () =>
  <div className='favorite_area'>
    <h2>아직 찜한 방이 없습니다.</h2>
  </div>

const RoomCompareContent = () =>
  <div className='favorite_area'>
    <h2>아직 찜한 방이 없습니다.</h2>
  </div>

export default Favorite