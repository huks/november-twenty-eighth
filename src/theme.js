import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// import SunBatangLightWoff from '../public/fonts/SunBatang-Light.woff';

const sunBatangLight = {
  fontFamily: 'SunBatangLight',
  src: `url('/fonts/SunBatang-Light.woff') format('woff')`,
}

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [sunBatangLight],
        body: {
          touchAction: 'pan-y',
          backgroundColor: '#313131',
        },
      },
    },
  },
  typography: {
    fontFamily: 'SunBatangLight, -apple-system, sans-serif',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
