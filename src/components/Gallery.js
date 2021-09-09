import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import ImageCard from './ImageCard'
import photos from '../static/photos'
// import useWindowPosition from './hooks/useWindowPosition'

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //   flexDirection: 'column',
    // },
    backgroundColor: 'blue',
    marginBottom: 25,
    padding: '4rem 0',
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
      <Slider {...settings}>
        <ImageCard photo={photos[0]} checked={false} />
        <ImageCard photo={photos[1]} checked={false} />
        <ImageCard photo={photos[2]} checked={false} />
      </Slider>
    </Box>
  )
}
