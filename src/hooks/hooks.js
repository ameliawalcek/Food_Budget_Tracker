import { createMuiTheme } from '@material-ui/core'

export const useTheme = darkState => {
    const palletType = darkState ? "dark" : "light"
    const mainPrimaryColor = darkState ? '#303030' : '#673ab7'
    const mainSecondaryColor = darkState ? '#9f66b7' : '#009688'
  
    return createMuiTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor
        },
        secondary: {
          main: mainSecondaryColor
        }
      },
      overrides: {
        MuiButton: {
          text: {
            background: mainPrimaryColor
          }
        },
        MuiCssBaseline: {
          '@global': {
            body: {
              backgroundColor: mainPrimaryColor
            }
          }
        }
      }
    })
  }