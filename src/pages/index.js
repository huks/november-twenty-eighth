import React from 'react'
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
import photos from '../../data/photos'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f3f3f3',
  },
}))

function Index({ weddingInfo, sessionInfo, photos }) {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="xs">
      <Intro weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
      <Greeting weddingInfo={weddingInfo} />
      <Calendar weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
      <Gallery photos={photos} />
      <Map weddingInfo={weddingInfo} />
      <Notice />
      <Account />
      <Footer weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
    </Container>
  )
}

export const getServerSideProps = async ({ query }) => {
  console.log('[Index] getServerSideProps:', query)
  const { visitor } = query
  let sessionInfo = {}

  switch (visitor) {
    case 'family': // 가족,친지
      console.log('invite to first session')
      sessionInfo = weddingInfo.sessions[0]
      break
    case 'friend': // 친구,동료
      console.log('invite to second session')
      sessionInfo = weddingInfo.sessions[1]
      break
    default:
      console.log('do something?')
      sessionInfo = weddingInfo.sessions[1]
  }

  return {
    props: { weddingInfo, sessionInfo, photos },
  }
}

export default Index
