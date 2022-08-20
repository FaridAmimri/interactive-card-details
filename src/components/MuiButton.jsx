/** @format */

import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function MuiButton({ text, size, color, variant, onClick, ...other }) {
  
  const theme = createTheme({
    palette: {
      violet: {
        main: '#21092F',
        contrastText: '#fff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Button
        className='muiButton'
        variant={variant || 'contained'}
        size={size || 'large'}
        color={color || 'primary'}
        onClick={onClick}
        {...other}
      >
        {text}
      </Button>
    </ThemeProvider>
  )
}

export default MuiButton
