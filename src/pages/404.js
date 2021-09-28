import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    console.log('redirect to home...')
    router.replace('/')
  })

  return null
}
