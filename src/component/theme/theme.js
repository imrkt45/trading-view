'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background:{
      default: 'white',
    },
    btncolor:{
      main:'rgb(98, 90, 252)'
    },
    txtcolor:{
      main:'black',
      header:'rgb(102, 102, 102)',
    },
    txtfieldcolor:{
      main:'rgb(98, 90, 252)'
      // main:'black'
    }
  },
});

export default theme;
