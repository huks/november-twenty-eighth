import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import ImageCard from './ImageCard'
import photos from '../static/photos'
// import useWindowPosition from './hooks/useWindowPosition'

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

export default function Gallery() {
  const classes = useStyles()

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Box className={classes.root} id="gallery">
      <Box className={classes.title}>
        <Typography variant="h5">갤러리</Typography>
        <Typography variant="body2">GALLERY</Typography>
      </Box>
      <Slider {...settings}>
        <ImageCard photo={photos[0]} checked={false} />
        <ImageCard photo={photos[1]} checked={false} />
        <ImageCard photo={photos[2]} checked={false} />
      </Slider>
    </Box>
  )
}
