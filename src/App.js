/** @format */

import {React, useState} from 'react'
import FrontCard from './components/FrontCard'
import BackCard from './components/BackCard'
import Form from './components/Form'

function App() {

  const [records, setRecords] = useState([])

  return (
    <div className='App'>
      <div className='layout'></div>
      <FrontCard records={records} />
      <BackCard records={records} />
      <Form setRecords={setRecords} />
    </div>
  )
}

export default App
