import React, { useEffect, useState } from 'react'
import '../css/mypage.css'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
import Logout from './Logout';
import KakaoUserInfo from '../components/KakaoUserInfo';
import Accordion from './Accordion';

const MyPage = () => {


  const [selecteItem, setSelectedItem] = useState('mypage')
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


      <div className='my_area'>
        <ul>
          <li onClick={() => handleItemClick('mypage')}>
            <a className={selecteItem === 'mypage' ? 'active' : ''}>
              내 정보 보기
            </a>
          </li>
          <li onClick={() => handleItemClick('information')}>
            <a className={selecteItem === 'information' ? 'active' : ''}>
              공지 및 안내
            </a>
          </li>
        </ul>

        <div className='my_content'>
          {selecteItem === 'mypage' && <MypageContent />}
          {selecteItem === 'information' && <InformationContent />}
        </div>
      </div>
      <NavBar />
    </div>
  )
}

const MypageContent = () =>
  <div>
    <div className='mypage_area'>
      <div><Logout/>
      <KakaoUserInfo/>
      </div>
      <ul>
        <li><a href='#'>결제 및 예약내역</a></li>
        <li><a href='#'>포인트</a></li>
        <li><a href='#'>개인정보 수정</a></li>
        <li><a href='#'>내가 쓴 글</a></li>
        <li><a href='#'>환경설정</a></li>
      </ul>
    </div>
      
      <div className='mypage_img'>
      <img src={process.env.PUBLIC_URL + '/mypage/my_event.png'} alt="이벤트영역" />
      </div>
  </div>

const InformationContent = () =>
  <div>
    <Accordion/>

    <div className='info_list'>
      <ul>
        <li><a href='#'>공지사항</a></li>
        <li><a href='#'>이용약관</a></li>
        <li><a href='#'>개인정보처리방침</a></li>
        <li><a href='#'>문의사항 및 내역</a></li>
        <li><a href='#'>설정</a></li>
        <li><a href='#'>회원탈퇴 😭</a></li>
      </ul>
    </div>
  </div>

export default MyPage