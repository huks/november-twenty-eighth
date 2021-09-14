import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { kakaoConfig } from '../config'
import kakao from '../../lib/kakao'

const useStyles = makeStyles(() => ({
  root: {
    height: 166,
    backgroundColor: 'grey',
  },
}))

export default function Footer() {
  const classes = useStyles()

  const handleClick = () => {
    kakao.sendLink({
      objectType: 'feed',
      content: {
        title: 'TITLE_MESSAGE',
        description: 'DATE\nLOCATION',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: kakaoConfig.siteDomain,
          webUrl: kakaoConfig.siteDomain,
        },
      },
      buttons: [
        {
          title: 'INVITE',
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
    <div className={classes.root} id="footer">
      <a id="create-kakao-link-btn" onClick={handleClick}>
        <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
      </a>
    </div>
  )
}
