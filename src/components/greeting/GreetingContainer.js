import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { parseISO, format } from 'date-fns'

const useStyles = makeStyles(() => ({
  root: {
    margin: '1px 0',
    padding: '4rem 0',
  },
  img: {
    width: '100%',
    height: 468,
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
  text: {
    letterSpacing: 1,
  },
  relation: {
    fontSize: '1rem',
    color: '#8a857f',
  },
}))

export default function GreetingContainer({ weddingInfo }) {
  const classes = useStyles()

  // const handleClick = (item) => {
  //   console.log('handleClick:', item)
  // }

  return (
    <Box className={classes.root} id="greeting-container">
      <Box>
        <Typography variant="body2" color="textSecondary">
          {format(parseISO(weddingInfo.date), 'yyyy.MM.dd')}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          초대합니다.
        </Typography>
        <Typography
          variant="body2"
          style={{ margin: '2rem 1rem 4rem', lineHeight: '1.5rem' }}
        >
          어제의 너와 내가 오늘의 우리가 되어
          <br />
          저희 두 사람 이제 한길을 같이 걷고자 합니다.
          <br />
          저희가 내딛는 첫 걸음에
          <br />
          오셔서 따뜻한 사랑으로 축복해 주십시오.
        </Typography>
      </Box>
      {/* FIXME: remove padding bottom */}
      <Box style={{ background: 'rgba(140,117,93,.07)' }}>
        <img src={weddingInfo.secondaryImageUrl} className={classes.img}></img>
      </Box>
      <Box style={{ padding: '1.2rem 0', background: 'rgba(140,117,93,.07)' }}>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.groom.family.father}
          <span>&nbsp;·&nbsp;</span>
          {weddingInfo.groom.family.mother}
          <span className={classes.relation}>
            &nbsp;의 {weddingInfo.groom.family.relation}&nbsp;
          </span>
          {weddingInfo.groom.firstName}
        </Typography>
        <Typography variant="h6" className={classes.text}>
          {weddingInfo.bride.family.father}
          <span>&nbsp;·&nbsp;</span>
          {weddingInfo.bride.family.mother}
          <span className={classes.relation}>
            &nbsp;의 {weddingInfo.bride.family.relation}&nbsp;
          </span>
          {weddingInfo.bride.firstName}
        </Typography>
      </Box>
      {/* <Button onClick={() => handleClick('A')} href="tel:010-0000-0000">
        A
      </Button>
      <Button onClick={() => handleClick('B')} href="sms:010-0000-0000">
        B
      </Button> */}
    </Box>
  )
}
