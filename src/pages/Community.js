import React, { useState } from 'react'
import '../css/community.css'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Review from '../components/Review'



const Community = () => {
  const [selecteItem, setSelectedItem] = useState('freeBoard')

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const clickWrite = () => {
    alert("아직은 작성할 수 없습니다.")
  }

  return (
    <div>
      <Link to="/home">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ marginTop: '30px', width: '88px', height: '35px' }} />
        </div>
      </Link>

      <div className='comm_area'>
        <ul>
          <li onClick={() => handleItemClick('freeBoard')}>
            <a className={selecteItem === 'freeBoard' ? 'active' : ''}>
              자유게시판
            </a>
          </li>
          <li onClick={() => handleItemClick('review')}>
            <a className={selecteItem === 'review' ? 'active' : ''}>
              숙소리뷰
            </a>
          </li>
        </ul>

        <div className='comm_content'>
          {selecteItem === 'freeBoard' && <FreeBoardContent />}
          {selecteItem === 'review' && <ReviewContent />}
        </div>

        <div className='comm_write' onClick={clickWrite}>
          <img src={process.env.PUBLIC_URL + '/community/pencil.png'} alt="펼치기" />
        </div>
      </div>
      <NavBar />
    </div>
  )
}

const FreeBoardContent = () =>
  <div>

    <Card text="마니산 하산 후 맛집 추천해주세요!! 조개구이나 백숙 생각하고 있습니다 :)"/>
    <Card text="제주도 숙소랑 맛집 추천해주세용~~!!"/>
    <Card text="여자친구랑 여행가는데 분위기 좋은 곳 없을까요?" />
    <Card text="부산쪽 애견 동반 숙소 추천해주세요~" />
    <Card text="6.10 ~ 6.11 가평 숙소 반가격에 판매합니다." />

  </div>


const ReviewContent = () =>
  <div>

    <Review review_number={1} title="[가평] Unai Pension" review_text="사장님도 친절하시고, 잘 쉬다 갑니다^^" />
    <Review review_number={2} title="[서울] Cafe de Seoul" review_text="여자친구가 하루종일 피드 업데이트 했습니다. 예쁘긴 하네요ㅋㅋ" />
    <Review review_number={3} title="[부산] Dragon Hotel" review_text="룸 퀄리티가 좋아서 사진 찍기 좋았어요. 조식 꿀맛" />

  </div>

export default Community