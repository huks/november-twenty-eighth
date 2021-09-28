import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { parseISO, format } from 'date-fns'
import ko from 'date-fns/locale/ko'

import Image from 'next/image'

const useStyles = makeStyles(() => ({
  root: {
    // height: 946,
    backgroundColor: '#fff',
    boxShadow: '1px 1px 3px rgb(0 0 0 / 5%)',
  },
  title: {
    padding: '2rem 1rem',
    display: 'flex',
    // justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    // height: 468,
    objectFit: 'contain',
    objectPosition: 'bottom',
  },
  datePlace: {
    padding: '2rem 0',
  },
}))

export default function Intro({ weddingInfo, sessionInfo }) {
  const classes = useStyles()

  return (
    <Box className={classes.root} id="intro">
      <Box className={classes.title}>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.groom.name}
        </Typography>
        <Typography
          variant="h4"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {format(parseISO(weddingInfo.date), 'M/d')}
        </Typography>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.bride.name}
        </Typography>
      </Box>
      <Box>
        <Image
          src={weddingInfo.imageUrl}
          alt=""
          layout="responsive"
          width={444}
          height={665}
          objectFit="cover"
          objectPosition="bottom"
          placeholder="empty"
        />
      </Box>
      <Box className={classes.datePlace}>
        <Typography variant="body1">
          {format(parseISO(sessionInfo.startTime), 'PPPP B h시', {
            locale: ko,
          })}
        </Typography>
        <Typography variant="body1">{weddingInfo.place.name}</Typography>
      </Box>
    </Box>
  )
}
