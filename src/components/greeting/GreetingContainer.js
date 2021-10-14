import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { parseISO, format } from 'date-fns'

import Image from 'next/image'

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
          서로 마주보며 다져온 사랑을
          <br />
          이제 함께 한 곳을 바라보며 걸어갈 수 있는
          <br />
          큰 사랑으로 키우고자 합니다.
          <br />
          저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
          <br />
          앞날을 축복해 주시면 감사하겠습니다.
        </Typography>
      </Box>
      {/* FIXME: remove padding bottom */}
      <Box
        style={{
          background: 'rgba(140,117,93,.07)',
          display: 'block',
        }}
      >
        <Image
          src={weddingInfo.secondaryImageUrl}
          alt=""
          layout="responsive"
          width={375}
          height={562}
          objectFit="cover"
          objectPosition="bottom"
          placeholder="empty"
        />
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
