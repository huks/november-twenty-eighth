import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import Gallery from '../src/Gallery'

export default function Index() {
  return (
    <Container sx={{ bgcolor: 'red' }}>
      <Box sx={{ bgcolor: 'blue' }} id="header">
        <Typography variant="h4" component="h1" gutterBottom>
          november-twenty-eighth
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
      <Gallery />
    </Container>
  )
}
