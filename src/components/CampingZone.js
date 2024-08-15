import React from 'react';
import '../css/tnb.css';

const CampingZone = ({ index }) => {
  const imageFiles = [`d_0${index}.jpg`];
  const contents = [
    {
      title: '경북 김천시 캠핑장',
      description: '오토캠핑/카라반',
      price: '30,000원~',
      tag: '#힐링캠핑 #감성캠핑장 #마운틴뷰'
    },
    {
      title: '경기 가평군',
      description: '오토캠핑/카라반',
      price: '70,000~',
      tag: '#신생캠핑 #가족여행'
    },
    {
      title: '경기 가평군',
      description: '돔아일랜드/글램핑',
      price: '130,000원~',
      tag: '#연인과 #추억쌓기'
    },
    {
      title: '옥산호수정원',
      description: '오토캠핑/팬션',
      price: '35,000원~',
      tag: '#반려견과 #함께 #경치맛집'
    }
  ];

  if (index >= 1 && index <= contents.length) {
    return (
        <div className='tnb2_content'>
            <img src={`./d/${imageFiles[0]}`} alt={`Image ${index}`} />
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

export default CampingZone;
