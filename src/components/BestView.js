import React from 'react';

const BestView = ({ index }) => {
  const imageFiles = [`e_0${index}.webp`];
  const contents = [
    {
      title: '서울 여의도 고층',
      description: '여의도 도시 전망',
      price: '95,000원'
    },
    {
      title: '안면도 언덕위의 하얀집',
      description: '바다경관과 일출이 아름다운 언덕',
      price: '55,000원'
    },
    {
      title: '인천 앞바다',
      description: '해변 및 바다 전망',
      price: '205,000원'
    },
    {
      title: '강릉 오션뷰 펜션',
      description: '반려동물 동반 허용되는 숙소',
      price: '109,000원'
    },
    {
      title: '초특가 광안대교뷰',
      description: '방안에서 광안대교 정면뷰를 즐길 수 있는 숙소',
      price: '60,000원'
    },
    {
      title: '수영구의 아파트',
      description: '와인증정이벤트 정면오션뷰 테라스',
      price: '75,000원'
    },
    {
      title: '여수 은수네 하우스',
      description: '신축 고층에서 즐기는 여수 밤바다',
      price: '289,000원'
    },
    {
      title: '전라남도 위치한 펜션',
      description: '아름다운 낙조 보며 쉴 수 있는 숙소',
      price: '79,000원'
    }
  ];

  if (index >= 1 && index <= contents.length) {
    return (
        <div className='hotissue_content'>
            <img src={`./e/${imageFiles[0]}`} alt={`Image ${index}`} />
            <h3>{contents[index - 1].title}</h3>
            <p>{contents[index - 1].description}</p>
            <p>{contents[index - 1].price}</p>
        </div>
    );
  } else {
    return null;
  }
}

export default BestView;