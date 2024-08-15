import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/tnb.css';
import { Pagination } from 'swiper/modules';

export default function App() {
  const img = [
    '../hd/1.jpg',
    '../hd/2.jpg',
    '../hd/3.jpg',
    '../hd/4.jpg',
    '../hd/5.jpg',
    '../hd/6.jpg',
    '../hd/7.jpg',
    '../hd/8.jpg',
    '../hd/9.jpg',
  ];

  return (
    <div className='home_slide'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={false}
        modules={[Pagination]}
        className="hotissueslider"
      >
        {img.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}