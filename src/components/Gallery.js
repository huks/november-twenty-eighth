import React, { createRef, useEffect } from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import ImageCard from './ImageCard'
import photos from '../static/photos'
// import useWindowPosition from './hooks/useWindowPosition'
import * as gtag from '../../lib/gtag'

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //   flexDirection: 'column',
    // },
    // backgroundColor: 'red',
    padding: '4rem 0',
  },
  title: {
    marginBottom: 20,
  },
}))

let firstClientX, clientX

const preventTouch = (e) => {
  const minValue = 10 // threshold

  clientX = e.touches[0].clientX - firstClientX

  // Vertical scrolling does not work when you start swiping horizontally.
  if (Math.abs(clientX) > minValue) {
    e.preventDefault()
    e.returnValue = false

    return false
  }
}

const touchStart = (e) => {
  firstClientX = e.touches[0].clientX
}

export default function Gallery() {
  const classes = useStyles()
  const containerRef = createRef()

  const onSlideChange = (index) => {
    // console.log('onSlideChange:', index)
    gtag.event({
      action: 'view_item',
      category: 'engagement',
      value: index,
      index: index,
    })
  }

  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => onSlideChange(current),
  }

  useEffect(() => {
    gtag.event({
      action: 'view_item',
      category: 'engagement',
      value: 0,
      index: 0,
    })
  })

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('touchstart', touchStart)
      containerRef.current.addEventListener('touchmove', preventTouch, {
        passive: false,
      })
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListner('touchstart', touchStart)
        containerRef.current.removeEventListner('touchmove', preventTouch, {
          passive: false,
        })
      }
    }
  })

  return (
    <Box className={classes.root} id="gallery">
      <Box className={classes.title}>
        <Typography variant="h5">갤러리</Typography>
        <Typography variant="body2">GALLERY</Typography>
      </Box>
      <Box ref={containerRef}>
        <Slider {...settings}>
          <ImageCard photo={photos[0]} checked={false} />
          <ImageCard photo={photos[1]} checked={false} />
          <ImageCard photo={photos[2]} checked={false} />
        </Slider>
      </Box>
    </Box>
  )
}
