const Logout = () => {
    //저장한 토큰 삭제
    const handleLogout = () => {
        localStorage.removeItem('access_token')

    }
    const logoutParam = new URLSearchParams({
        client_id: "31c89355cd145c15d27a28a5788c048b",
        logout_redirect_uri: "http://localhost:3000/"

    })

    return (
        <a href={`https://kauth.kakao.com/oauth/logout?${logoutParam.toString()}`}
            onClick={handleLogout}>
            <img src={process.env.PUBLIC_URL + '/mypage/KakaoLogout.png'} alt="펼치기" className="KakaoLogout" />
        </a>
    )
}
export default Logout