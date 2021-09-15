import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { kakaoConfig } from '../config'
import kakao from '../../lib/kakao'

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
        title: '김병주 ♥ 원빛나 결혼합니다.',
        description: '11월 28일 일요일 오후 12시\n트라디노이',
        imageUrl:
          'https://lh3.googleusercontent.com/DBo2tVxLv5EI0cBvskFA_3tVGQcqZiMAjrl5jjyPckhFyiCDrfEUkshmIbjFaOMdG8uSOSrVIEbgLJn-9XGvQj9P7GoXlgzYqscdIZ2wUY2u_A_b1YbIYb9_oe9YGPkPd_xLJjegst0=w2400',
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
