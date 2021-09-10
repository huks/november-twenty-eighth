import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: 1232,
    backgroundColor: 'green',
  },
}))

export default function GreetingContainer() {
  const classes = useStyles()

  const handleClick = (item) => {
    console.log('handleClick:', item)
  }

  return (
    <Box className={classes.root} id="greeting-container">
      <Button onClick={() => handleClick('A')} href="tel:010-0000-0000">
        A
      </Button>
      <Button onClick={() => handleClick('B')} href="sms:010-0000-0000">
        B
      </Button>
    </Box>
  )
}
