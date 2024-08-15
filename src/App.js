import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Intro from './pages/Intro'
import Community from './pages/Community';
import Search from './pages/Search'; 
import Favorite from './pages/Favorite'; 
import MyPage from './pages/MyPage';
import './App.css';

import HotissueDetail from './components/HotissueDetail';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/hotissue/detail" element={<HotissueDetail />} />
      </Routes>
    </div>
  );
}

export default App;
