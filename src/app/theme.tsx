import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Open Sans', sans-serif`,
      color: '#333',
    },

    h1: {
      fontWeight: 600,
      fontSize: 26,
    },

    h2: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 36 / 26,
    },

    h3: {
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 36 / 26,
    },

    subtitle1: {
      fontSize: 22,
      lineHeight: 36 / 26,
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: '#352E73',
    },
    secondary: {
      main: '#fff',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          outline: 'none',
        },
      },
    },
    MuiTypography: {
      // styleOverrides: {
      //   root: {
      //     color: '#323232',
      //   },
      // },
      defaultProps: {},
    },
    MuiInputBase: {
      styleOverrides: {
        // input: {
        //   borderRadius: 4,
        //   position: 'relative',
        //   backgroundColor: '#fcfcfb',
        //   // backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
        //   border: '1px solid #ced4da',
        //   fontSize: 16,
        //   width: 'auto',
        //   padding: '10px 12px',
        //   // transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        //   // Use the system font instead of the default Roboto font.
        //   fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        //   ].join(','),
        //   '&:focus': {
        //     // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     // borderColor: theme.palette.primary.main,
        //   },
        // },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          transform: 'translate(24px, 22px) scale(1)',
        },
        shrink: {
          fontSize: '16px',
          transform: 'translate(24px, -11px) scale(1)',
        },
      },
    },
    MuiOutlinedInput: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: '100px',
      //     padding: '11px',
      //   },
      //   input: {
      //     fontSize: '20px',
      //     padding: '10px 16px',
      //   },
      //   inputAdornedStart: {
      //     padding: '10px 16px 10px 61px',
      //     marginLeft: '-3px',
      //   },
      //   notchedOutline: {
      //     padding: '0 18px',
      //     legend: {
      //       fontSize: '16px',
      //       backgroundColor: 'white',
      //       visibility: 'initial',
      //       span: {
      //         visibility: 'hidden',
      //       },
      //     },
      //   },
      // },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          width: 0,
          left: '18px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
