import { amber, red, deepOrange, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            secondary: grey,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            action:{
               hover :  amber[100],
              }
          }
        : {
            // palette values for dark mode
            primary: grey,
            secondary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
            action:{
            //  hover :  grey[800],
            }
          }),
    },
  });
  

  
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });