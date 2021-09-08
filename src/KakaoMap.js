import React from 'react'
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const MAP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '400px',
    backgroundColor: 'red',
  },
}))

export default function KakaoMap() {
  const classes = useStyles()

  const loadKakaoMapScript = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${MAP_KEY}&autoload=false`
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        console.log('kakao map loaded')
        const container = document.getElementById('kakao-map')
        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        }

        const map = new window.kakao.maps.Map(container, options)

        const markerPosition = new kakao.maps.LatLng(37.506502, 127.053617)

        // 마커를 생성
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        })

        // 마커를 지도 위에 표시
        marker.setMap(map)
      })
    }
  }

  useEffect(() => {
    loadKakaoMapScript()
  }, [])

  return <div className={classes.root} id="kakao-map"></div>
}
