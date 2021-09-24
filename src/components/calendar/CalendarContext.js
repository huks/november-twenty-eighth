import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

// import 'react-calendar/dist/Calendar.css'

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem 1rem',
    margin: '0 1rem',
    border: '1px solid hsla(8,26%,54%,.3)',
    borderLeft: 0,
    borderRight: 0,
  },
}))

export default function CalendarContext(props) {
  const { date } = props
  const classes = useStyles()
  return (
    <div className={classes.root} id="calendar-context">
      <Calendar
        value={date}
        calendarType="US"
        formatDay={(locale, date) => format(date, 'd')}
        formatShortWeekday={(locale, date) => format(date, 'EEEEE')}
        locale="en-US"
        showNavigation={false}
      />
    </div>
  )
}

CalendarContext.propTypes = {
  date: PropTypes.instanceOf(Date),
}
