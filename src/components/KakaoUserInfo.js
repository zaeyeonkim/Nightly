const KakaoUserInfo = () => {


    const GetUserInfo = async () => {
        const ACCESS_TOKEN = localStorage.getItem("access_token")
        const response = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "Get",
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })

        const result = await response.json()
        console.log("회원정보: ", result)
        return result;
    }

    return (
        <a href="#" onClick={GetUserInfo}>
            <img src={process.env.PUBLIC_URL + '/mypage/KakaoMypage.png'} alt="로그인 정보" className="KakaoMypage" />
        </a>
    )
}
export default KakaoUserInfo