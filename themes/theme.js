import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import orange from '@material-ui/core/colors/orange';


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: pink[300],
      // main: "rgb(216,67,61) linear-gradient(90deg, rgba(216,67,61,1) 0%, rgba(248,125,51,1) 19%, rgba(248,62,127,1) 50%, rgba(255,0,204,1) 100%)",
      main: pink[500],
      dark: pink[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    danger: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    third: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    fourth: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },

    background: {
      default: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 4
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: "14px",
        color: "#aaa"
      }
    },
    MuiInput:{
      formControl:{
        '&:before': {
          borderColor: "#D2D2D2 !important"
        }
      }
    },
    MuiPaper: {
      root: {
        //padding: "24px 32px"
      },
      elevation2: {
        //boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
      },
      elevation4: {
        //boxShadow: "0 0px 4px 2px rgba(0, 0, 0, 0.14)"
      },
      rounded: {
        borderRadius: 6
      }
    },
  },
  drawerWidth: 260
});

export default theme;
