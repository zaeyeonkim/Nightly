import React from "react";

function InfoContent(props) {
    return (
            <div className='acc_que'>
                {props.que}
                <div className='arrow_wrap'>
                    <span class="arrow_top">
                        <img src={process.env.PUBLIC_URL + '/mypage/arrow_up.png'} alt="펼치기" />
                    </span>
                    <span class="arrow_bottom">
                        <img src={process.env.PUBLIC_URL + '/mypage/arrow_down.png'} alt="접기" />
                    </span>
                </div>
                <div class="acc_ans">
                   {props.ans}
                </div>

            </div>
    )
}

export default InfoContent