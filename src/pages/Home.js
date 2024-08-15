import React from 'react'
import NavBar from '../components/NavBar';
import TNB from '../components/TNB';

const Home = () => {
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/logo.png" alt="로고" style={{ marginTop: '30px', width: '88px', height: '35px' }} />
        </div>
        <TNB />

        <NavBar />
    </div>
  )
}

export default Home;