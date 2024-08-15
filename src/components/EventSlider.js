import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../css/tnb.css';
import { Autoplay } from "swiper/modules";

export default function App() {
  const banners = [
    './banner/banner_01.png',
    './banner/banner_02.png',
    './banner/banner_03.png',
    './banner/banner_04.png',
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="eventslider"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className=''>
            <img src={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
