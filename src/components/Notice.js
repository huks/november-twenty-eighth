import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '2rem 0',
  },
  card: {
    margin: '2rem auto 0',
    background: 'hsla(0,0%,100%,.75)',
    padding: '2.5rem 1rem',
    maxWidth: '85%',
    borderTop: '1px solid #d8a588',
  },
}))

export default function Notice() {
  const classes = useStyles()
  return (
    <Box className={classes.root} id="notice">
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ marginBottom: '1.5rem' }}
          >{`<안내사항>`}</Typography>
          <Typography
            variant="body2"
            style={{ lineHeight: '1.5rem', marginBottom: '1.5rem' }}
          >
            코로나로 인해 사회적거리두기 단계격상으로
            <br />
            모든 분들을 초대하고 싶지만
            <br />
            인원 제한으로 인해 소수의 인원으로
            <br />
            결혼식을 예정대로 진행하게 되었습니다.
            <br />
            축하의 마음만으로도 저희에게는 큰 기쁨입니다.
          </Typography>
          <Typography variant="body2">{`* 축하 화환은 정중히 사양합니다. *`}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
