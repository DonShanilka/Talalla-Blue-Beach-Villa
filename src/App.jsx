
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent.jsx'
import Homepage from './pages/home/Home.jsx'
import AboutPage from './pages/about/About.jsx'


function App() {
  return (
    <>
      <div id="wrapper">
        <HeaaderContent />
      </div>
      <Homepage />
      <AboutPage />
    </>
  )
}

export default App
