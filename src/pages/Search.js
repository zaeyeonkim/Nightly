import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../css/search.css'
import { Autoplay } from "swiper/modules";
import KakaoMap from './KakaoMap';
import KakaoSearch from './KakaoSearch';


const Search = () => {

  return (
    <div>
      <Link to="/home">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ marginTop: '30px', width: '88px', height: '35px' }} />
        </div>
      </Link>
      <div className='search_title'>
        <h2>실시간 검색 순위</h2>
      </div>


      <div className="Swiper_rank">
        <Swiper className='Swiper_list'
          modules={[Autoplay]}
          direction="vertical"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => {/*console.log('slide change')*/}}
        >
          <SwiperSlide>
            <div>1. 여수</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>2. 강원도</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>3. 부산</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>4. 제주도</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>5. 양양</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>6. 여수</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <NavBar />

      <div>
        <KakaoSearch/>
      </div>
    </div>
  )

}

export default Search