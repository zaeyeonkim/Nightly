import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeSlider from './HomeSlider';
import NavBar from './NavBar';
import '../css/detail.css';
import Calendar from './Calendar';
import Calendar2 from './Calendar2';
import KakaoDetailMap from './KakaoDetailMap';

const HotissueDetail = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const navigate = useNavigate();

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleIncrease = () => {
    setPeopleCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    if (peopleCount > 1) {
      setPeopleCount(prevCount => prevCount - 1);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1) {
      setPeopleCount(Number(value));
    }
  };

  const handlePayment = () => {
    alert("일시적 오류입니다. 다시 결제해주세요.");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='reservpage'>
      <button className='back' onClick={handleBack}><img src='/back.png' alt='뒤로가기'></img></button>
      <HomeSlider />
      <div className='title_area'>
        <h1>제주 헤리티지 빌라</h1>
        <h2>애월읍의 위치한 이국적인 느낌의 펜션</h2>
        <button className='reserv' onClick={handlePopupToggle}>예약하기</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup_content">
            <h2>예약 확인</h2>
            <h3>상품명</h3>
            <div className='popup_text'>
              <p className='date'><Calendar /></p>
              <p className='date'><Calendar2 /></p>
              <div className='people_count'>
                <p>인원</p>
                <input
                  type="number"
                  value={peopleCount}
                  onChange={handleChange}
                  min="1"
                />
                <button className='people_plus' onClick={handleDecrease}>-</button>
                <button className='people_minus' onClick={handleIncrease}>+</button>
              </div>

              <div className='tel'>
                <p>연락처</p>
                <input type='tel' placeholder='010-1234-5678' required></input>
              </div>

              <div className='etc_area'>
                <p>비고</p>
                <input className='etc'></input>
              </div>

              <p className='pay'>요금 1박 / 169,000원</p>
            </div>
            <div className='check_box'>
              <button className='check' onClick={handlePayment}>결제하기</button>
              <button className='check cancel' onClick={handlePopupToggle}>취소하기</button>
            </div>
          </div>
        </div>
      )}

      <div className='detail map'>
        <h3>숙소위치</h3>
        <div className='map_area'>
          <KakaoDetailMap place={{ lat: 33.44429891106918, lng: 126.42962997301649 }} />
        </div>
      </div>

      <div className='detail info'>
        <h3>안내사항</h3>
        <div className='info_area'>
          <p>체크인 15:00 / 체크아웃 13:00</p>
          <p>객실 최대인원 2명 / 인원 추가비용 발생</p>
          <p>전 객실 금연</p>
          <p>반려견 동반 가능</p>
          <p>미성년자 보호자동반 없이 투숙불가</p>
          <p>일회용 어메니티, 각종 워시 제공</p>
        </div>
      </div>

      <div className='detail call'>
        <h3>숙소문의</h3>
        <button>전화하기</button>
      </div>

      <div className='detail ivo'>
        <h3>주변 인기시설</h3>
        <div className='ivo'>
          <ul>
            <div>
              <li>
                <img src='../detail/1.png'></img>
                <p>광치기해변</p>
              </li>
              <li>
                <img src='../detail/2.jpg'></img>
                <p>협재해수욕장</p>
              </li>
            </div>
            <div>
              <li>
                <img src='../detail/3.jpg'></img>
                <p>혼인지</p>
              </li>
              <li>
                <img src='../detail/4.jpg'></img>
                <p>종달리수국길</p>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <NavBar />
    </div>
  );
}

export default HotissueDetail