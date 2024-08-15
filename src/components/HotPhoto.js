import React from 'react';
import '../css/tnb.css';

const HotPhoto = ({ index }) => {
    const imageFiles = [`c_${index}.jpg`];
    const contents = [
        {
            name: 'o._.ssssuu',
            title: '#제주 #함덕해수욕장',
        },
        {
            name: 'hrim_iz',
            title: '#남자친구랑 #제주향밭',
        },
        {
            name: 'mdwxter._',
            title: '#경북 #김천 #캠핑장',
        },
        {
            name: 'eunsu_',
            title: '#강릉 #경포대',
        },
        {
            name: 'tkddj.hj',
            title: '#꿈같던 강릉 앞바다',
        },
        {
            name: 'jun._.',
            title: '#일본 #유니버셜스튜디오',
        },
        {
            name: 'jun._.',
            title: '#부산 #해운대',
        },
        {
            name: 'o._.ssssuu',
            title: '#제주 #함덕해수욕장',
        },

        {
            name: '____jaeyeon____',
            title: '#제주 #비밀의숲',
        },
        {
            name: 'ji_won_e',
            title: '#서울 #한옥마을',
        },
        {
            name: 'yk_nara',
            title: '#스위스 #융프라우',
        },
        {
            name: 'dimt_slov',
            title: '#제주 #돌고래',
        },
        {
            name: 'hyenppy',
            title: '#프랑스 #독립문',
        },
        {
            name: 'nara_yk',
            title: '#스위스 #베이스타운',
        },
        {
            name: 'dimt_slov',
            title: '#제주 #우도',
        },
        {
            name: 'jaeyeone',
            title: '#강릉 #뮤지엄',
        }
    ];

    if (index >= 1 && index <= contents.length) {
        return (
                <div className='hotphoto_content'>
                    <img src={`./c/${imageFiles[0]}`} alt={`Image ${index}`} />
                    <h3>{contents[index - 1].name}</h3>
                    <p>{contents[index - 1].title}</p>
                </div>
        );
    } else {
        return null;
    }
}

export default HotPhoto;