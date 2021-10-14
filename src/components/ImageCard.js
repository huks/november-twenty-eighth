import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import Image from 'next/image'

const useStyles = makeStyles({
  root: {
    // maxWidth: 645,
    background: '#f3f3f3',
    // margin: '20px',
    display: 'block',
  },
  media: {
    // height: 468,
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
  img: {
    width: '100%',
    height: 468,
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
})

export default function ImageCard(imageProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root} square={true}>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        layout="responsive"
        width={375}
        height={562}
        objectFit="contain"
        // objectPosition="bottom"
        placeholder="blur"
        blurDataURL={imageProps.blurDataURL}
      />
    </Card>
  )
}
