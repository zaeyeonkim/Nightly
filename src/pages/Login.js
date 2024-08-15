import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css'

const Login = () => {
  const [isKakaoReady, setIsKakaoReady] = useState(false);

  useEffect(() => {
    // 카카오 SDK 초기화
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    kakaoScript.async = true;
    document.body.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      if (window.Kakao) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        setIsKakaoReady(true);
      }
    };

    return () => {
      document.body.removeChild(kakaoScript);
    };
  }, []);

  const loginWithKakao = () => {
    if (isKakaoReady) {
      window.Kakao.Auth.login({
        success: (authObj) => {
          console.log('Kakao Login Success:', authObj);
        },
        fail: (err) => {
          console.error('Kakao Login Failed:', err);
        },
      });
    } else {
      console.error('Kakao SDK is not ready');
    }
  };


  return (
    <div>
      <img src='/Kakaologin.png' onClick={loginWithKakao} alt='로그인'></img>
    </div>
  );
};

export default Login;
