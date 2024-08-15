import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/detail.css';

const Calendar = () => {
    
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='calendar'>
        <label>시작날짜</label>
        <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="yyyy-MM-dd"
            style={{ height: '35px'}}
        />
    </div>
  );
};

export default Calendar;