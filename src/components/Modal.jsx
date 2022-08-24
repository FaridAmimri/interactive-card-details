/** @format */

import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import MuiButton from './MuiButton'

function Modal({ setOpenModal }) {
  return (
    <div className='modal'>
      <div className='circleIcon'>
        <CheckIcon />
      </div>
      <div className='thanking'>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
      </div>
      <MuiButton
        color='violet'
        text='Continue'
        onClick={() => {
          setOpenModal(false)
        }}
      />
    </div>
  )
}

export default Modal
