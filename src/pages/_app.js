import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import kakao from '../lib/kakao'
import gtm from '../lib/gtm'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'react-magic-slider-dots/dist/magic-dots.css'

import './slick-override.css' // important

// import 'react-calendar/dist/Calendar.css'
import '../components/calendar/Calendar.css'

import { SnackbarProvider } from 'notistack'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const router = useRouter()

  const title = process.env.NEXT_PUBLIC_APP_TITLE

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    // Initialize Kakao JS SDK
    kakao.initialize()
    // Initialize GTM
    gtm.initialize()
  }, [])

  React.useEffect(() => {
    gtm.pageview(router.asPath)
  }, [router.asPath])

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          dense
          maxSnack={1}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={2000}
          style={{
            whiteSpace: 'pre-line',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
