/** @format */

import { useState } from 'react'

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues)
  const [errors, setErrors] = useState({})

  return {
    values,
    setValues,
    errors,
    setErrors
  }
}
