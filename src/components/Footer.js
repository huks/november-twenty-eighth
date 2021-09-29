import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { kakaoConfig } from '../config'
import kakao from '../lib/kakao'
import { parseISO, format } from 'date-fns'
import ko from 'date-fns/locale/ko'
import * as gtag from '../lib/gtag'
import gtm from '../lib/gtm'
import ShareIcon from '@material-ui/icons/Share'
import LinkIcon from '@material-ui/icons/Link'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 60,
    padding: '30px 0',
    background: '#f9f9f9',
    borderTop: '1px solid #efefef',
    boxShadow: '0 -1px 8px rgb(0 0 0 / 4%)',
  },
  box: {
    display: 'flex',
    // width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  text: {
    width: 150,
    marginLeft: 12,
    lineHeight: '2rem',
  },
  copyright: {
    lineHeight: '1.5rem',
    color: '#d2d2d2',
  },
}))

const isBottom = (el) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight
}

const handleScroll = () => {
  // FIXME:
  const el = document.getElementById('footer')
  if (isBottom(el)) {
    window.removeEventListener('scroll', handleScroll)
    gtm.event({
      action: 'scroll_end',
    })
  }
}

export default function Footer({ weddingInfo, sessionInfo }) {
  const classes = useStyles()

  const getSiteUrl = () => {
    return `${kakaoConfig.siteDomain}/?visitor=${sessionInfo.visitor}`
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleKakaoLink = () => {
    gtm.event({
      action: 'share',
      category: 'footer',
      label: 'kakao_link',
      value: getSiteUrl(),
    })
    kakao.sendLink({
      objectType: 'feed',
      content: {
        title: `${weddingInfo.groom.name} ♥ ${weddingInfo.bride.name} 결혼합니다.`,
        description: `${format(parseISO(sessionInfo.startTime), 'EEEE B h시', {
          locale: ko,
        })} (${sessionInfo.description})\n${weddingInfo.place.name}`,
        imageUrl: weddingInfo.kakaoImageUrl,
        link: {
          mobileWebUrl: getSiteUrl(),
          webUrl: getSiteUrl(),
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: getSiteUrl(),
            webUrl: getSiteUrl(),
          },
        },
      ],
    })
  }

  const handleUrlCopy = () => {
    const url = getSiteUrl()
    navigator.clipboard.writeText(url).then(() => {
      alert(`주소가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`)
    })
    gtm.event({
      action: 'share',
      category: 'footer',
      label: 'site_url',
      value: getSiteUrl(),
    })
  }

  const handleCopyright = () => {
    gtm.event({
      action: 'select_content',
      category: 'footer',
      label: 'copyright',
    })
  }

  return (
    <Box className={classes.root} id="footer">
      <Box className={classes.box} onClick={handleKakaoLink}>
        <ShareIcon />
        <Typography variant="body2" component="span" className={classes.text}>
          카카오톡으로 공유하기
        </Typography>
      </Box>
      <Box className={classes.box} onClick={handleUrlCopy}>
        <LinkIcon />
        <Typography variant="body2" component="span" className={classes.text}>
          청첩장 주소 복사하기
        </Typography>
      </Box>
      <Box style={{ marginTop: 12 }} onClick={handleCopyright}>
        <Typography variant="caption" className={classes.copyright}>
          {'© '}
          {`김병주`}
          &nbsp;
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  )
}
