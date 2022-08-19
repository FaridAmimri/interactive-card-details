/** @format */

import { TextField } from '@mui/material'

function MuiInput({ name, label, value, onChange }) {

  return (
    <TextField className='muiTextField'
      variant='outlined'
      margin="normal"
      size="small"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}

export default MuiInput
