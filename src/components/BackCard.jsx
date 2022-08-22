/** @format */

import React from 'react'
import BackCardPng from '../assets/back-card.png'

function BackCard({ records }) {
  return (
    <div className='back-card-details'>
      <div className='black-rectangle'></div>
      <div className='grey-rectangle'>
        {records.cvc ? (
          <p className='back-card-cvc'>{records.cvc}</p>
        ) : (
          <p className='back-card-cvc'>000</p>
        )}
      </div>
      <img src={BackCardPng} alt='details' className='backcard-png'></img>
    </div>
  )
}

export default BackCard
