/** @format */

import React from 'react'
import BackCardPng from '../assets/back-card.png'

function BackCard({ values }) {
  return (
    <div className='back-card'>
      <div className='black-rectangle'></div>
      <div className='grey-rectangle'>
        {values.cvc ? (
          <p className='back-card-cvc'>{values.cvc}</p>
        ) : (
          <p className='back-card-cvc'>000</p>
        )}
      </div>
      <img src={BackCardPng} alt='details' className='backcard-png'></img>
    </div>
  )
}

export default BackCard
