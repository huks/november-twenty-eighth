import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Calendar from 'react-calendar'

const useStyles = makeStyles(() => ({
  root: {
    // height: 576,
  },
}))

export default function CalendarContext() {
  const classes = useStyles()
  return (
    <div className={classes.root} id="calendar-context">
      <Calendar value={new Date()} showNavigation={false} />
    </div>
  )
}
