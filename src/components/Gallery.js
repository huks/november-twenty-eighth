import React, { createRef, useEffect } from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import ImageCard from './ImageCard'
// import photos from '../../data/photos'
// import useWindowPosition from './hooks/useWindowPosition'
import * as gtag from '../lib/gtag'
import gtm from '../lib/gtm'

import MagicSliderDots from 'react-magic-slider-dots'

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

const isBottom = (el) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight
}

export default function Gallery({ photos }) {
  const classes = useStyles()
  const containerRef = createRef()

  const onSlideChange = (index) => {
    // console.log('onSlideChange:', index)
    gtm.event({
      action: 'vue_item',
      category: 'gallery',
      index: index,
      item_name: photos[index].title,
    })
  }

  const handleScroll = () => {
    const el = document.getElementById('gallery')
    if (isBottom(el)) {
      window.removeEventListener('scroll', handleScroll)
      gtm.event({
        action: 'vue_item',
        category: 'gallery',
        index: 0,
        item_name: photos[0].title,
        non_interaction: true,
      })
    }
  }

  const settings = {
    dots: true,
    lazyLoad: false,
    infinite: false,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
    afterChange: (current) => onSlideChange(current),
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
    },
  }

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Box className={classes.root} id="gallery">
      <Box className={classes.title}>
        <Typography variant="h5" color="textSecondary">
          갤러리
        </Typography>
        <Typography variant="body2" color="textSecondary">
          GALLERY
        </Typography>
      </Box>
      <Box ref={containerRef}>
        <Slider {...settings}>
          {photos.map((imageProps) => (
            <ImageCard key={imageProps.src} {...imageProps} checked={false} />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
