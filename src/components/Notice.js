import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: 440,
    backgroundColor: 'blue',
  },
}))

export default function Notice() {
  const classes = useStyles()
  return <div className={classes.root} id="notice"></div>
}
