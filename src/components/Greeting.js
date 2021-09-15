import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: 1232,
    backgroundColor: 'red',
  },
}))

export default function Greeting() {
  const classes = useStyles()
  return <div className={classes.root} id="greeting"></div>
}
