export const getToken = async()=> {
    const search = new URLSearchParams(window.location.search)

    const code = search.get("code")
    if(!code) {
        return {}
    }

    const param = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "31c89355cd145c15d27a28a5788c048b",
        redirect_uri: "http://localhost:3000/home",
        code    
    })

    const response = await fetch("https://kauth.kakao.com/oauth/token",{
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: param
    })
    
    const result = await response.json()
    console.log("result: ", result)
    return result
}