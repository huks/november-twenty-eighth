import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { kakaoConfig } from '../config'
import kakao from '../../lib/kakao'
import weddingInfo from '../static/wedding'
import { parseISO, format } from 'date-fns'
import ko from 'date-fns/locale/ko'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 60,
    padding: '30px 0',
    background: '#f9f9f9',
    borderTop: '1px solid #efefef',
    boxShadow: '0 -1px 8px rgb(0 0 0 / 4%)',
  },
}))

export default function Footer() {
  const classes = useStyles()

  const handleClick = () => {
    kakao.sendLink({
      objectType: 'feed',
      content: {
        title: `${weddingInfo.groom.name} ♥ ${weddingInfo.bride.name} 결혼합니다.`,
        description: `${format(parseISO(weddingInfo.date), 'EEEE B h시', {
          locale: ko,
        })}\n${weddingInfo.place}`,
        imageUrl: weddingInfo.kakaoImageUrl,
        link: {
          mobileWebUrl: kakaoConfig.siteDomain,
          webUrl: kakaoConfig.siteDomain,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: kakaoConfig.siteDomain,
            webUrl: kakaoConfig.siteDomain,
          },
        },
      ],
    })
  }

  // useEffect(() => {
  //   kakao.createLinkButton({
  //     container: '#create-kakao-link-btn',
  //     objectType: 'feed',
  //     content: {
  //       title: 'TITLE_MESSAGE',
  //       description: 'DATE\nLOCATION',
  //       imageUrl:
  //         'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
  //       link: {
  //         mobileWebUrl: kakaoConfig.siteDomain,
  //         webUrl: kakaoConfig.siteDomain,
  //       },
  //     },
  //     buttons: [
  //       {
  //         title: 'INVITE',
  //         link: {
  //           mobileWebUrl: kakaoConfig.siteDomain,
  //           webUrl: kakaoConfig.siteDomain,
  //         },
  //       },
  //     ],
  //   })
  // }, [])

  return (
    <Box className={classes.root} id="footer">
      <Typography style={{ cursor: 'pointer' }} onClick={handleClick}>
        카카오톡으로 공유하기
      </Typography>
      {/* <a id="create-kakao-link-btn" onClick={handleClick}>
        <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
      </a> */}
    </Box>
  )
}
