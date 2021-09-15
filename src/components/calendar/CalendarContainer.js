import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CalendarContext from './CalendarContext'
import weddingInfo from '../../static/wedding'
import { parseISO, format, formatDistanceToNowStrict, isAfter } from 'date-fns'
import ko from "date-fns/locale/ko"

const useStyles = makeStyles(() => ({
  root: {
    margin: '1px 0',
    padding: '4rem 0',
  },
  title: {
    marginBottom: 20,
  },
  dday: {
    margin: '20px auto',
  },
  highlight: {
    color: '#ea7664',
  },
}))

const now = new Date()

const getDday = (date) => {
  return `${formatDistanceToNowStrict(date, { unit: 'day', locale: ko })}`
}

const getSuffix = (date) => {
  let suffix = '지났습니다.'
  if (isAfter(date, now)) {
    suffix = '남았습니다.'
  }
  return suffix
}

const CalendarContainer = () => {
  const classes = useStyles()
  
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5">{format(parseISO(weddingInfo.date), 'MMM do', { locale: ko })}</Typography>
        <Typography variant="body2">{format(parseISO(weddingInfo.date), 'EEEE B h시', { locale: ko })}</Typography>
      </Box>
      <CalendarContext date={parseISO(weddingInfo.date)}/>
      <Box className={classes.dday}>
        <Typography variant="body2">
          {weddingInfo.groom.firstName}
          <span className={classes.highlight}>♥</span>
          {weddingInfo.bride.firstName}
          {`의 결혼식이`}
          &nbsp;
          <span className={classes.highlight}>{getDday(parseISO(weddingInfo.date))}</span>
          &nbsp;
          {getSuffix(parseISO(weddingInfo.date))}
        </Typography>
      </Box>
    </Box>
  )
}

export default CalendarContainer
