import React from 'react';
import '../css/tnb.css';

const National = ({ index }) => {
  const imageFiles = [`b_0${index}.webp`];
  const contents = [
    {
      title: '제주시의 집',
      description: '프라이빗 황금향밭뷰',
      price: '100,000원~',
      tag: '#힐링여행 #밭뷰 #오션뷰 #테라스O'
    },
    {
      title: '부산의 아파트',
      description: '한 눈에 담는 광안대교',
      price: '55,000~',
      tag: '#초고층 #광안대교정면 #바로입수가능'
    },
    {
      title: '여수밤바다',
      description: 'The 여수_오픈특가',
      price: '66,000원~',
      tag: '#40평대 #복층 #오션뷰'
    },
    {
      title: '양양 서핑',
      description: '오션뷰 20층 프리미엄룸',
      price: '100,000원~',
      tag: '#서핑해변뷰 #고층오션뷰 #인스타맛집'
    }
  ];

  if (index >= 1 && index <= contents.length) {
    return (
        <div className='tnb2_content'>
            <img src={`./b/${imageFiles[0]}`} alt={`Image ${index}`} />
            <h3>{contents[index - 1].title}</h3>
            <div className='description_price'>
              <span>{contents[index - 1].description}</span>
              <span className='price'>{contents[index - 1].price}</span>
            </div>
            <p>{contents[index - 1].tag}</p>
        </div>
    );
  } else {
    return null;
  }
}

export default National;
