import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { parseISO, format } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 0',
  },
  card: {
    margin: '2rem auto 0',
    background: 'hsla(0,0%,100%,.75)',
    padding: '2.5rem 0',
    maxWidth: '90%',
    borderTop: '1px solid #d8a588',
  },
  highlight: {
    color: theme.palette.text.secondary,
  },
}))

export default function Notice({ weddingInfo, sessionInfo }) {
  const classes = useStyles()
  return (
    <Box className={classes.root} id="notice">
      <Card className={classes.card}>
        <CardContent style={{ padding: 0 }}>
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
            인원 제한으로 인해 소수의 인원으로
            <br />
            결혼식을 진행하게 되었습니다.
            <br />
            <br />
            축하해 주시는 마음만으로도 감사히 여기니,
            <br />
            무리해서 참석하지 않으셔도
            <br />
            괜찮다는 말씀을 드리고 싶습니다.
            <br />
            <br />
            축하의 마음만으로도 저희에게는 큰 기쁨입니다.
          </Typography>
          <Typography variant="body2">{`* 축하 화환은 정중히 사양합니다. *`}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
