import React from 'react'
import Container from '@material-ui/core/Container'
import Intro from '../src/components/Intro'
import Greeting from '../src/components/Greeting'
import Calendar from '../src/components/calendar/CalendarContainer'
import Gallery from '../src/components/Gallery'
import Map from '../src/components/map/MapContainer'
import Notice from '../src/components/Notice'
import Footer from '../src/components/Footer'

export default function Index() {
  return (
    <Container sx={{ bgcolor: 'grey' }}>
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
