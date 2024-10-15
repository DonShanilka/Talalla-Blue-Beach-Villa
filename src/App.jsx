
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent.jsx'
import Homepage from './pages/home/Home.jsx'
import AboutPage from './pages/about/About.jsx'
import Service from './pages/service/Service.jsx';
import Bookingpage from './pages/booking/Bookingpage.jsx';
import ContactPage from './pages/contact/contactPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='app'>
      <HeaaderContent />
      <AboutPage />
      <Service />
      <Bookingpage />
      <ContactPage />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/booking' element={<Bookingpage />} />
      </Routes>
    </div>
  )
}

export default App
