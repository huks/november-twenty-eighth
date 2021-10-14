import React, { useEffect, useState } from 'react'
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

import { default as getWeddingInfo } from '../../data/wedding'
import { default as getPhotos } from '../../data/photos'
import { getPlaiceholder } from 'plaiceholder'

import { useRouter } from 'next/router'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f3f3f3',
  },
}))

function Index({ weddingInfo, photos }) {
  const classes = useStyles()
  const router = useRouter()

  const [sessionInfo, setSessionInfo] = useState(null)

  useEffect(() => {
    setSessionInfo(weddingInfo.sessions[0])
  }, [weddingInfo])

  return (
    <Container className={classes.root} maxWidth="xs">
      {sessionInfo ? (
        <>
          <Intro weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
          <Greeting weddingInfo={weddingInfo} />
          <Notice weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
          <Calendar weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
          <Gallery photos={photos} />
          <Map weddingInfo={weddingInfo} />
          <Account />
          <Footer weddingInfo={weddingInfo} sessionInfo={sessionInfo} />
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

export const getStaticProps = async () => {
  console.log('[Index] getStaticProps')
  const weddingInfo = getWeddingInfo
  const photos = await Promise.all(
    getPhotos.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src.imageUrl)

      return {
        ...img,
        alt: src.title,
        title: src.title,
        blurDataURL: base64,
      }
    })
  ).then((values) => values)

  return {
    props: { weddingInfo, photos },
  }
}

export default Index
