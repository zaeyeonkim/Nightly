import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/community" 
            className={activeIcon === 'community' ? 'active' : ''}
          >
            <img 
              src={`/icons/${activeIcon === 'community' ? 'community.on.png' : 'community.png'}`} 
              alt='커뮤니티' 
              className={activeIcon === 'community' ? 'active-img' : ''}
              onClick={() => setActiveIcon('community')}
            />
            커뮤니티
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/search" 
            className={activeIcon === 'search' ? 'active' : ''}
          >
            <img 
              src={`/icons/${activeIcon === 'search' ? 'search.on.png' : 'search.png'}`} 
              alt='검색' 
              className={activeIcon === 'search' ? 'active-img' : ''}
              onClick={() => setActiveIcon('search')} 
            />
            검색
          </NavLink>
        </li>

        <li className='logo_home'>
          <NavLink 
            to="/home" 
            className={activeIcon === 'home' ? 'active' : ''}
          >
            <img 
              src={`/icons/${activeIcon === 'home' ? 'home.on.png' : 'home.png'}`} 
              alt='홈' 
              className={activeIcon === 'home' ? 'active-img' : ''}
              onClick={() => setActiveIcon('home')} 
            />
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/favorite" 
            className={activeIcon === 'favorite' ? 'active' : ''}
          >
            <img 
              src={`/icons/${activeIcon === 'favorite' ? 'favorite.on.png' : 'favorite.png'}`} 
              alt='찜' 
              className={activeIcon === 'favorite' ? 'active-img' : ''}
              onClick={() => setActiveIcon('favorite')} 
            />
            찜
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/mypage" 
            className={activeIcon === 'mypage' ? 'active' : ''}
          >
            <img 
              src={`/icons/${activeIcon === 'mypage' ? 'mypage.on.png' : 'mypage.png'}`} 
              alt='내정보' 
              className={activeIcon === 'mypage' ? 'active-img' : ''}
              onClick={() => setActiveIcon('mypage')}
            />
            내정보
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
