import React from 'react'
import { Typography } from '@material-ui/core'
import CalendarContext from './CalendarContext'

const CalendarContainer = () => {
  return (
    <>
      <Typography>TITLE</Typography>
      <CalendarContext />
      <Typography>D_DAY</Typography>
    </>
  )
}

export default CalendarContainer
