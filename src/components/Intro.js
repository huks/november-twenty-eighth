import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { parseISO, format } from 'date-fns'
import ko from 'date-fns/locale/ko'
import weddingInfo from '../static/wedding'

const useStyles = makeStyles(() => ({
  root: {
    // height: 946,
    backgroundColor: '#fff',
    boxShadow: '1px 1px 3px rgb(0 0 0 / 5%)',
  },
  title: {
    padding: '3rem 1rem',
    display: 'flex',
    // justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  datePlace: {
    padding: '3rem 0',
  },
}))

export default function Intro() {
  const classes = useStyles()

  return (
    <Box className={classes.root} id="intro">
      <Box className={classes.title}>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.groom.name}
        </Typography>
        <Typography
          variant="h4"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {format(parseISO(weddingInfo.date), 'M/d')}
        </Typography>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.bride.name}
        </Typography>
      </Box>
      <Box>
        <img src={weddingInfo.imageUrl} width="100%"></img>
      </Box>
      <Box className={classes.datePlace}>
        <Typography variant="body1">
          {format(parseISO(weddingInfo.date), 'PPPP B h시', { locale: ko })}
        </Typography>
        <Typography variant="body1">{weddingInfo.place}</Typography>
      </Box>
    </Box>
  )
}
