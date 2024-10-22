
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
import Footer from './Components/footer/Footer.jsx';



function App() {
  return (
    <div className='app'>
      <HeaaderContent />
      <Homepage />
      <AboutPage />
      <Service />
      <Bookingpage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
