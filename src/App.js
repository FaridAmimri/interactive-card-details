/** @format */

import { React, useState } from 'react'
import FrontCard from './components/FrontCard'
import BackCard from './components/BackCard'
import Form from './components/Form'
import Modal from './components/Modal'

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
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='App'>
      <div className='layout'></div>
      <FrontCard values={values} />
      <BackCard values={values} />
      {!openModal && (
        <Form
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default App
