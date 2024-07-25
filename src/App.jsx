
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent.jsx'

function App() {
  return (
    <>
      <div id="wrapper">
        <HeaaderContent />
      </div>
      <BodyContent></BodyContent>
    </>
  )
}

export default App
