/** @format */

import React from 'react'

function FrontCard({ values }) {
  return (
    <>
      <div className='face-card-details'>
        <div className='card-header'>
          <div className='big-circle'></div>
          <div className='small-circle'></div>
        </div>
        <div className='card-main'>
          {values.number ? (
            <p className='card-number'>{values.number}</p>
          ) : (
            <p className='card-number'>0000 0000 0000 0000</p>
          )}
        </div>
        <div className='card-footer'>
          <div className='card-name'>
            {values.name ? (
              <p>{values.name.toUpperCase()}</p>
            ) : (
              <p>JANE APPLESEED</p>
            )}
          </div>
          <div className='card-date'>
            {values.month ? <p>{values.month}/</p> : <p>00/</p>}
            {values.year ? <p>{values.year}</p> : <p>00</p>}
          </div>
        </div>
        <div className='oval-container'>
          <div className='oval-pink'></div>
          <div className='oval-orange'></div>
          <div className='oval-blue'></div>
        </div>
      </div>
    </>
  )
}

export default FrontCard
