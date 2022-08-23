/** @format */

import {React, useState} from 'react'
import FrontCard from './components/FrontCard'
import BackCard from './components/BackCard'
import Form from './components/Form'

const initialValues = {
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: ''
}

function App() {

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  return (
    <div className='App'>
      <div className='layout'></div>
      <FrontCard values={values} />
      <BackCard values={values} />
      <Form values={values} setValues={setValues} errors={errors} setErrors={setErrors} />
    </div>
  )
}

export default App
