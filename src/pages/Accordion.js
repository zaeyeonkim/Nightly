import React, { useState } from 'react';
import '../css/mypage.css';

const Accordion = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const contents = [
    {
      que: '예약내역 조회/확인 어떻게 하나요?',
      ans: '내정보 → 결제 및 예약내역 누르시면 확인 가능합니다.',
    },
    {
      que: '숙박은 하루만 가능한가요?',
      ans: '아쉽게도 그렇습니다..',
    },
    {
      que: '할인쿠폰 쓰는 방법이 궁금해요~',
      ans: '쿠폰함 → 클릭 후 사용하기',
    },
    {
      que: '2박3일 여행 계획인데 연박 가능할까요?',
      ans: '저희 숙소는 무조건 하루만 가능합니다.ㅎㅎ ',
    },
  ];

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className='accordion_container'>
      <h2>자주 찾는 질문</h2>
      <ul className='accordion_list'>
        {contents.map((item, idx) => (
          <li key={idx} className={`accordion_item ${openIdx === idx ? 'open' : ''}`}>
            <div className='accordion_header' onClick={() => handleToggle(idx)}>
              <h3>{item.que}</h3>
              <span>{openIdx === idx ? '-' : '+'}</span>
            </div>
            {openIdx === idx && (
              <div className='accordion_content'>
                <p>{item.ans}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;