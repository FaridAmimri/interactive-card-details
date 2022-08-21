/** @format */

import React from 'react'
import BackCard from './assets/back-card.png'
import MuiForm from './components/MuiForm'

function App() {
  return (
    <div className='App'>
      <div className='layout'></div>

      <div className='face-card-details'>
        <div className='card-header'>
          <div className='big-circle'></div>
          <div className='small-circle'></div>
        </div>
        <p className='card-number'>0000 0000 0000 0000</p>
        <div className='card-footer'>
          <p className='card-name'>JANE APPLESEED</p>
          <p className='card-name'>00/00</p>
        </div>
        <div className='oval-container'>
          <div className='oval-pink'></div>
          <div className='oval-orange'></div>
          <div className='oval-blue'></div>
        </div>
      </div>

      <div className='back-card-details'>
        <div className='black-rectangle'></div>
        <div className='grey-rectangle'></div>
        <img src={BackCard} alt='details' className='backcard-png'></img>
      </div>

      <MuiForm />
    </div>
  )
}

export default App
