import './App.css';
import AppBanner from './components/AppBanner';
import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage.js'
import ResumePage from './components/ResumePage';
import PhotosPage from './components/PhotosPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <AppBanner></AppBanner>
      <Routes>
            <Route path = "/" element = {<HomePage/>}></Route>
            <Route path = "/aboutme" element = {<AboutMePage/>}></Route>
            <Route path="/resume" element = {<ResumePage/>}></Route>
            <Route path="/photos" element = {<PhotosPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
