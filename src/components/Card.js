import React from "react";

function Card(props) {
    return (
        <div className='comm_article'>
            <div>
                <img src={process.env.PUBLIC_URL + '/community/user.png'} alt="프로필사진" />
            </div>
            <div>
                <h2>익명</h2>
                {props.text}
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/community/menu.png'} alt="펼치기" />
            </div>
        </div>
    )
}

export default Card