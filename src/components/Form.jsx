/** @format */

import { React } from 'react'
import { Grid } from '@mui/material'
import MuiInput from './MuiInput'
import MuiButton from './MuiButton'

function Form({ values, setValues, errors, setErrors,openModal, setOpenModal }) {

  function validate() {
    let temp = {}
    temp.name = values.name ? '' : "Can't be blank"
    temp.number = (/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/).test(values.number) ? '' : "16 numbers"
    temp.month = (/^[0-9]{2}$/).test(values.month) ? '' : "2 numbers"
    temp.year = (/^[0-9]{2}$/).test(values.year) ? '' : "2 numbers"
    temp.cvc = (/^[0-9]{3}$/).test(values.cvc) ? '' : "3 numbers"
    setErrors({
      ...temp
    })
    return Object.values(temp).every((x) => x === '')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(validate()) {
      setOpenModal(!openModal)
    }
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
        error={errors.name}
      />
      <MuiInput
        className='textField'
        name='number'
        label='e.g. 1234 5678 9123 0000'
        helperText='CARD NUMBER'
        value={values.number}
        onChange={handleInputChange}
        error={errors.number}
      />
      <Grid item xs={6} className='formGrid'>
        <MuiInput
          className='textField expDate'
          name='month'
          label='MM'
          helperText='EXP. DATE'
          value={values.month}
          onChange={handleInputChange}
          error={errors.month}
        />
        <MuiInput
          name='year'
          label='YY'
          helperText='(MM/YY)'
          className='textField expDate'
          value={values.year}
          onChange={handleInputChange}
          error={errors.year}
        />
        <MuiInput
          name='cvc'
          label='e.g. 123'
          helperText='CVC'
          className='textField cvc'
          value={values.cvc}
          onChange={handleInputChange}
          error={errors.cvc}
        />
      </Grid>
      <MuiButton color='violet' text='Confirm' type='submit' />
    </form>
  )
}

export default Form
