/** @format */

import { React, useState } from 'react'
import { Grid } from '@mui/material'
import MuiInput from './MuiInput'
import MuiButton from './MuiButton'
import { useForm } from '../utils/useForm'

const initialFValues = {
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: ''
}

function MuiForm() {
  const { values, setValues, errors, setErrors } = useForm(initialFValues)

  function validate() {
    let temp = {}
    temp.name = values.name ? '' : "Can't be blank"
    temp.number = values.number.length > 16 ? '' : 'Minimum 16 numbers required'
    temp.month = values.month.length === 2 ? '' : '2 numbers required'
    temp.year = values.year === 2 ? '' : '2 numbers required'
    temp.cvc = values.cvc === 3 ? '' : '3 numbers required'
    setErrors({
      ...temp
    })
    return Object.values(temp).every((x) => x === '')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) window.alert('test ok')
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <form className='form-card' onSubmit={handleSubmit}>
      <MuiInput
        className='textField'
        name='name'
        label='e.g. Jane Appleseed'
        helperText='CARDHOLDER NAME'
        value={values.name}
        onChange={handleInputChange}
      />
      <MuiInput
        className='textField'
        name='number'
        label='e.g. 1234 5678 9123 0000'
        helperText='CARD NUMBER'
        value={values.number}
        onChange={handleInputChange}
      />
      <Grid item xs={6} className='formGrid'>
        <MuiInput
          className='textField expDate'
          name='month'
          label='MM'
          helperText='EXP. DATE'
          value={values.month}
          onChange={handleInputChange}
        />
        <MuiInput
          name='year'
          label='YY'
          helperText='(MM/YY)'
          className='textField expDate'
          value={values.year}
          onChange={handleInputChange}
        />
        <MuiInput
          name='cvc'
          label='e.g. 123'
          helperText='CVC'
          className='textField cvc'
          value={values.cvc}
          onChange={handleInputChange}
        />
      </Grid>
      <MuiButton color='violet' text='Confirm' type='submit' />
    </form>
  )
}

export default MuiForm
