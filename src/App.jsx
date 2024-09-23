
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent.jsx'
import Homepage from './pages/home/Home.jsx'
import AboutPage from './pages/about/About.jsx'
import Service from './pages/service/Service.jsx';
import Bookingpage from './pages/booking/Bookingpage.jsx';


function App() {
  return (
    <>
      <div id="wrapper">
        <HeaaderContent />
      </div>
      <Homepage />
      <AboutPage />
      <Service />
      <Bookingpage />
    </>
  )
}

export default App
