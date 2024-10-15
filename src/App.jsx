
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent.jsx'
import Homepage from './pages/home/Home.jsx'
import AboutPage from './pages/about/About.jsx'
import Service from './pages/service/Service.jsx';
import Bookingpage from './pages/booking/Bookingpage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <HeaaderContent />
    </div>
  )
}

export default App
