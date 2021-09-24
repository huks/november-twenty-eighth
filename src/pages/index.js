import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Intro from '../components/Intro'
import Greeting from '../components/greeting/GreetingContainer'
import Calendar from '../components/calendar/CalendarContainer'
import Gallery from '../components/Gallery'
import Map from '../components/map/MapContainer'
import Notice from '../components/Notice'
import Account from '../components/Account'
import Footer from '../components/Footer'

import weddingInfo from '../../data/wedding'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f3f3f3',
  },
}))

function Index({ sessionInfo }) {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="xs">
      <Intro />
      <Greeting />
      <Calendar sessionInfo={sessionInfo} />
      <Gallery />
      <Map />
      <Notice />
      <Account />
      <Footer />
    </Container>
  )
}

export const getServerSideProps = async ({ query }) => {
  console.log('[Index] getServerSideProps')
  const visitor = parseInt(query.visitor)
  let sessionInfo = weddingInfo.sessions[0]

  switch (visitor) {
    case 0: // 가족,친지
      console.log('family')
      sessionInfo = weddingInfo.sessions[0]
      break
    case 1: // 친구,동료
      console.log('friend')
      sessionInfo = weddingInfo.sessions[1]
      break
    default:
      console.log('do something?')
  }

  return {
    props: { sessionInfo },
  }
}

export default Index
