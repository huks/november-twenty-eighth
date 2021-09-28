import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import KakaoMap from './KakaoMap'
import * as gtag from '../../lib/gtag'
import gtm from '../../lib/gtm'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem 0',
  },
  title: {
    marginBottom: 20,
  },
  location: {
    margin: '40px 0 20px',
  },
  linkMap: {
    background: '#d99a88',
    padding: '4px 20px',
    cursor: 'pointer',
  },
  linkMapText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: theme.typography.pxToRem(15),
    lineHeight: '2rem',
    color: '#fff',
  },
  waytocome: {
    padding: '0 2rem',
    textAlign: 'left',
    lineHeight: '2rem',
  },
  waytocomeContent: {
    marginTop: 20,
    lineHeight: '2rem',
  },
}))

const MapContainer = ({ weddingInfo }) => {
  const classes = useStyles()

  const handleLinkMap = () => {
    gtm.event({
      action: 'select_content',
      category: 'map',
      label: 'kakao_map_link',
      value: weddingInfo.place.kakaoPlaceId,
    })
    window.open(
      `https://map.kakao.com/link/map/${weddingInfo.place.kakaoPlaceId}`,
      '_blank'
    )
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5" color="textSecondary">
          오시는 길
        </Typography>
        <Typography variant="body2" color="textSecondary">
          LOCATION
        </Typography>
      </Box>
      <Box className={classes.location}>
        <Typography variant="h6">{weddingInfo.place.name}</Typography>
        <Typography variant="body2" style={{ color: '#797979' }}>
          {weddingInfo.place.location}
        </Typography>
      </Box>
      <KakaoMap
        latitude={weddingInfo.place.coords.latitude}
        longitude={weddingInfo.place.coords.longitude}
      />
      <Box className={classes.linkMap} onClick={handleLinkMap} href="/dd">
        <Typography className={classes.linkMapText}>
          지도를 자세히 보려면 여기를 눌러주세요
        </Typography>
      </Box>
      <Box className={classes.waytocome}>
        <Box className={classes.waytocomeContent}>
          <Typography variant="body1" color="textSecondary">
            지하철이용시
          </Typography>
          <Typography variant="body2">
            <span style={{ fontFamily: 'SunBatangMedium' }}>2호선</span>
            {` - 삼성역 3번 출구에서 도보 958m`}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontFamily: 'SunBatangMedium' }}>3호선</span>
            {` - 학여울역 1번 출구에서 도보 927m`}
          </Typography>
        </Box>
        <Box className={classes.waytocomeContent}>
          <Typography variant="body1" color="textSecondary">
            버스이용시
          </Typography>
          <Typography variant="body2">
            <span style={{ fontFamily: 'SunBatangMedium' }}>
              [대치2동주민센터]
            </span>
            &nbsp;
            {`강남01, 강남06`}
          </Typography>
          <Typography variant="body2">
            <span style={{ fontFamily: 'SunBatangMedium' }}>[휘문고]</span>
            &nbsp;
            {`401, 4318, 4319, 4419, 11-3, 917, 500-2, 9407, 9507, 9607`}
          </Typography>
        </Box>
        <Box className={classes.waytocomeContent}>
          <Typography variant="body1" color="textSecondary">
            자가용이용시
          </Typography>
          <Typography variant="body2">
            {`네비게이션 "트라디노이" 또는 웨딩홀 주소 검색`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MapContainer
