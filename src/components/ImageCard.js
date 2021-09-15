import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Collapse } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    // maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    // margin: '20px',
  },
  media: {
    // height: 468,
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

export default function ImageCard({ photo, checked }) {
  const classes = useStyles()

  return (
    // <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root} square={true}>
      <CardMedia
        component="img"
        className={classes.media}
        image={photo.imageUrl}
      />
      {/* <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          {photo.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {photo.description}
        </Typography>
      </CardContent> */}
    </Card>
    // </Collapse>
  )
}
