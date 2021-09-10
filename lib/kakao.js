import { kakaoConfig } from '../src/config'

class Kakao {
  constructor() {
    this.APP_KEY = null
    this.initialized = false
  }

  configure(config) {
    this.APP_KEY = config.appKey
  }

  initialize() {
    if (this.initialized) {
      console.warn('Kakao can only be initialized once.')
      return
    }

    this.configure(kakaoConfig)

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    document.head.appendChild(script)

    script.onload = () => {
      console.log('Kakao JS SDK loaded')
      window.Kakao.init(this.APP_KEY)
      console.log(window.Kakao.isInitialized())
    }
  }

  createLinkButton(...args) {
    // if (!window.Kakao) {
    //   console.log('do something?')
    // }
    // window.Kakao.Link.createDefaultButton(...args)
    console.log('waitForSDKReady')
    const interval = setInterval(() => {
      const isReady = window.Kakao?.isInitialized()
      if (isReady) {
        console.log('create kakao link button...')
        window.Kakao.Link.createDefaultButton(...args)
        clearInterval(interval)
      }
    })
  }
}

// Singleton
const kakao = new Kakao()

export default kakao
