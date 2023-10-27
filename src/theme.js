import '@fontsource/koho'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd012',
      lightYellow: '#fff8ba',
      yellow: '#FFE374',
      white: '#ffffff',
      black: '#000000',
      blue: '#004aad',
      neonBlue: '#466EFD',
      darkGray: '#545454',
      midGray: '#737373',
      lightGray: '#ebebeb',
      red: '#FF0000',
      green: '#008000'
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif']
  }
})
