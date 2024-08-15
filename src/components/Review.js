import React from "react";

function Review(props) {
    return (
        <div className='comm_article02'>
            <div className='top_review'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/community/user.png'} alt="프로필사진" />
                    <h2>익명</h2>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/community/menu.png'} alt="메뉴" />
                </div>
            </div>

            <div className='bot_review'>
                <img src={process.env.PUBLIC_URL + `/community/review_0${props.review_number}.jpg`} alt="방 리뷰 사진" className='review_img' />

                <div className='review_list'>
                    <p className="review_title">{props.title}</p>
                    <div className="review_text">{props.review_text}</div>
                    <img src={process.env.PUBLIC_URL + '/community/star.png'} alt="총평" />
                    <img src={process.env.PUBLIC_URL + '/community/star.png'} alt="총평" />
                    <img src={process.env.PUBLIC_URL + '/community/star.png'} alt="총평" />
                    <img src={process.env.PUBLIC_URL + '/community/star.png'} alt="총평" />
                    <img src={process.env.PUBLIC_URL + '/community/star.png'} alt="총평" />
                </div>
            </div>
        </div>
    )
}
export default Review