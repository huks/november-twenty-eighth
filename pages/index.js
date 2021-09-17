import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Intro from '../src/components/Intro'
import Greeting from '../src/components/greeting/GreetingContainer'
import Calendar from '../src/components/calendar/CalendarContainer'
import Gallery from '../src/components/Gallery'
import Map from '../src/components/map/MapContainer'
import Notice from '../src/components/Notice'
import Footer from '../src/components/Footer'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f3f3f3',
  },
}))

export default function Index() {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="xs">
      <Intro />
      <Greeting />
      <Calendar />
      <Gallery />
      <Map />
      <Notice />
      <Footer />
    </Container>
  )
}
