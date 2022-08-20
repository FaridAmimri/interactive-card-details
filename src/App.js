/** @format */

import React from 'react'
import { Grid } from '@mui/material'
import MuiInput from './components/MuiInput'
import MuiButton from './components/MuiButton'
import BackCard from './assets/back-card.png'

function App() {
  return (
    <div className='App'>
      <div className='layout'></div>

      <div className='card-details'>
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
      </div>

      <form className='form-card'>
        <MuiInput
          name='name'
          label='e.g. Jane Appleseed'
          helperText='CARDHOLDER NAME'
          className='textField'
        />
        <MuiInput
          name='name'
          label='e.g. 1234 5678 9123 0000'
          type='number'
          helperText='CARD NUMBER'
          className='textField'
        />
        <Grid item xs={6} className='formGrid'>
          <MuiInput
            name='month'
            label='MM'
            type='number'
            helperText='EXP. DATE'
            className='textField expDate'
          />
          <MuiInput
            name='year'
            label='YY'
            type='number'
            helperText='(MM/YY)'
            className='textField expDate'
          />
          <MuiInput
            name='cvc'
            label='e.g. 123'
            type='number'
            helperText='CVC'
            className='textField cvc'
          />
        </Grid>
        <MuiButton color='violet' text='Confirm' />
      </form>
    </div>
  )
}

export default App
