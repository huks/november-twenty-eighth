import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// import SunBatangLightWoff from '../public/fonts/SunBatang-Light.woff';

const sunBatangLight = {
  fontFamily: 'SunBatangLight',
  src: `url('/fonts/SunBatang-Light.woff') format('woff')`,
}

const sunBatangMedium = {
  fontFamily: 'SunBatangMedium',
  src: `url('/fonts/SunBatang-Medium.woff') format('woff')`,
}

const pretendardRegular = {
  fontFamily: 'Pretendard-Regular',
  src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
}

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [sunBatangLight, sunBatangMedium, pretendardRegular],
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
    text: {
      secondary: '#a96b6c',
    },
  },
})

export default theme
