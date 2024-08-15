import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/tnb.css'
import EventSlider from './EventSlider';
import Hotissue from './Hotissue';
import CampingZone from './CampingZone';
import National from './National';
import BestView from './BestView';
import HotPhoto from './HotPhoto';

const TNB = () => {
  const [selectedItem, setSelectedItem] = useState('hotissue');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="tnb">
      <ul>
        <li onClick={() => handleItemClick('hotissue')}>
          <Link className={selectedItem === 'hotissue' ? 'active' : ''}>
            <img src={`/tnb/${selectedItem === 'hotissue' ? 'hotissue.on.png' : 'hotissue.png'}`} alt="인기급상승" />
            인기급상승
          </Link>
        </li>

        <li onClick={() => handleItemClick('national')}>
          <Link className={selectedItem === 'national' ? 'active' : ''}>
            <img src={`/tnb/${selectedItem === 'national' ? 'national.on.png' : 'national.png'}`} alt="전국" />
            전국
          </Link>
        </li>

        <li onClick={() => handleItemClick('hotphotozone')}>
          <Link className={selectedItem === 'hotphotozone' ? 'active' : ''}>
            <img src={`/tnb/${selectedItem === 'hotphotozone' ? 'hotphotozone.on.png' : 'hotphotozone.png'}`} alt="핫포토존" />
            핫포토존
          </Link>
        </li>

        <li onClick={() => handleItemClick('campingzone')}>
          <Link className={selectedItem === 'campingzone' ? 'active' : ''}>
            <img src={`/tnb/${selectedItem === 'campingzone' ? 'campingzone.on.png' : 'campingzone.png'}`} alt="캠핑존" />
            캠핑존
          </Link>
        </li>

        <li onClick={() => handleItemClick('bestview')}>
          <Link className={selectedItem === 'bestview' ? 'active' : ''}>
            <img src={`/tnb/${selectedItem === 'bestview' ? 'bestview.on.png' : 'bestview.png'}`} alt="최고의전망" />
            최고의전망
          </Link>
        </li>
      </ul>

      <div className='home_area event'>
        <div className='home_aera event_slider'>
          <EventSlider />
        </div>
      </div>

      <div className='tnb_content'>
        {selectedItem === 'hotissue' && <HotissueContent />}
        {selectedItem === 'national' && <NationalContent />}
        {selectedItem === 'hotphotozone' && <HotPhotoZoneContent />}
        {selectedItem === 'campingzone' && <CampingZoneContent />}
        {selectedItem === 'bestview' && <BestViewContent />}
      </div>
    </div>
  );
}

const HotissueContent = () =>
    <div className='home_area hotissue'>
        <div className='home_title'>
            <h3>하룻밤 <span>Pick</span>!</h3>
            <h4>전체보기</h4>      
        </div>
        <div className='hotissue_text'>
        <ul>
            <li><Hotissue index={1} /></li>
            <li><Hotissue index={2} /></li>
            <li><Hotissue index={3} /></li>
            <li><Hotissue index={4} /></li>
            <li><Hotissue index={5} /></li>
            <li><Hotissue index={6} /></li>
            <li><Hotissue index={7} /></li>
            <li><Hotissue index={8} /></li>
        </ul>
        </div>
    </div>

const NationalContent = () =>
    <div className='home_area national'>
        <div className='home_title'>
            <h3>전국방방 <span>Pick </span>UP!</h3>
            <h4>전체보기</h4>      
        </div>
        <div className='tnb2_text'>
        <ul>
            <li><National index={1} /></li>
            <li><National index={2} /></li>
            <li><National index={3} /></li>
            <li><National index={4} /></li>
        </ul>
        </div>
    </div>

const HotPhotoZoneContent = () =>
    <div className='home_area hotphotozone'>
        <div className='home_title'>
            <h3>하룻밤 <span>HOT </span>Spot!</h3>
            <h4>전체보기</h4>      
        </div>
        <div className='hotphoto_text'>
            <ul>
                <li><HotPhoto index={1} /></li>
                <li><HotPhoto index={2} /></li>
                <li><HotPhoto index={3} /></li>
                <li><HotPhoto index={4} /></li>
                <li><HotPhoto index={5} /></li>
                <li><HotPhoto index={6} /></li>
                <li><HotPhoto index={7} /></li>
                <li><HotPhoto index={8} /></li>
            </ul>
            <ul>
                <li><HotPhoto index={9} /></li>
                <li><HotPhoto index={10} /></li>
                <li><HotPhoto index={11} /></li>
                <li><HotPhoto index={12} /></li>
                <li><HotPhoto index={13} /></li>
                <li><HotPhoto index={14} /></li>
                <li><HotPhoto index={15} /></li>
                <li><HotPhoto index={16} /></li>
            </ul>
        </div>
    </div>

const CampingZoneContent = () =>
    <div className='home_area campingzone'>
        <div className='home_title'>
            <h3>캠 <span>Pick </span>Zone!</h3>
            <h4>전체보기</h4>
        </div>
        <div className='tnb2_text'>
        <ul>
            <li><CampingZone index={1} /></li>
            <li><CampingZone index={2} /></li>
            <li><CampingZone index={3} /></li>
            <li><CampingZone index={4} /></li>
        </ul>
        </div>
    </div>

const BestViewContent = () =>
    <div className='home_area bestview'>
        <div className='home_title'>
            <h3>베스트 <span>오브 </span>Pick!</h3>
            <h4>전체보기</h4>      
        </div>
        <div className='hotissue_text'>
            <ul>
                <li><BestView index={1} /></li>
                <li><BestView index={2} /></li>
                <li><BestView index={3} /></li>
                <li><BestView index={4} /></li>
                <li><BestView index={5} /></li>
                <li><BestView index={6} /></li>
                <li><BestView index={7} /></li>
                <li><BestView index={8} /></li>
            </ul>
        </div>
    </div>

export default TNB;