import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    height: 576,
  },
}))

export default function Calendar() {
  const classes = useStyles()
  return <div className={classes.root} id="calendar"></div>
}
