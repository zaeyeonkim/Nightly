import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Login from './Login';


const Intro = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/home')
  }

  return (
    <div className='intro'>
        <div className='intro_logo'>
        <img src="/logo_01.png" alt="로고" />
        </div>
      <div className='intro_area'>
        <img src="/intro_text.png" alt="메인타이틀" />
        <img src="/intro_text02.png" alt="메인타이틀02" />
      </div>
      <button onClick={gotoHome}>
        <Login/>
      </button>
    </div>
  )
}

export default Intro;