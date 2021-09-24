import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CalendarContext from './CalendarContext'
import weddingInfo from '../../../data/wedding'
import { parseISO, format, formatDistanceToNowStrict, isAfter } from 'date-fns'
import ko from 'date-fns/locale/ko'
import PropTypes from 'prop-types'

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

const CalendarContainer = ({ sessionInfo }) => {
  console.log('[CalendarContainer] sessionInfo:', sessionInfo)
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5" color="textSecondary">
          {format(parseISO(sessionInfo.startTime), 'MMM do', { locale: ko })}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {format(parseISO(sessionInfo.startTime), 'EEEE B h시', {
            locale: ko,
          })}
        </Typography>
      </Box>
      <CalendarContext date={parseISO(sessionInfo.startTime)} />
      <Box className={classes.dday}>
        <Typography variant="body2">
          {weddingInfo.groom.firstName}
          <span className={classes.highlight}>♥</span>
          {weddingInfo.bride.firstName}
          {`의 결혼식이`}
          &nbsp;
          <span className={classes.highlight}>
            {getDday(parseISO(sessionInfo.startTime))}
          </span>
          &nbsp;
          {getSuffix(parseISO(sessionInfo.startTime))}
        </Typography>
      </Box>
    </Box>
  )
}

CalendarContainer.propTypes = {
  sessionInfo: PropTypes.object,
}

// CalendarContainer.defaultProps = {
//   sessionInfo: {},
// }

export default CalendarContainer
