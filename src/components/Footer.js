import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: 166,
    backgroundColor: 'grey',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return <div className={classes.root} id="footer"></div>
}
