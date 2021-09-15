import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import KakaoMap from './KakaoMap'

const useStyles = makeStyles(() => ({
  root: {
    padding: '4rem 0',
  },
  title: {
    marginBottom: 20,
  },
  waytocome: {
    padding: '3rem 0',
  }
}))

const MapContainer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5">오시는 길</Typography>
        <Typography variant="body2">LOCATION</Typography>
      </Box>
      <KakaoMap />
      <Box className={classes.waytocome}>
        <Typography>WAY_TO_COME</Typography>
      </Box>
    </Box>
  )
}

export default MapContainer
