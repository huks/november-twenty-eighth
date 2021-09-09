import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: 946,
    backgroundColor: 'red',
  },
}))

export default function Intro() {
  const classes = useStyles()
  return <div className={classes.root} id="intro"></div>
}
