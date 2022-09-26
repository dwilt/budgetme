import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setAccessToken } from '../utils/accessToken'

const Home: NextPage = () => {
  const { push, query } = useRouter()
  const accessToken =
    typeof query.accessToken === 'string' ? query.accessToken : undefined

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken)
      push('/')
    }
  }, [accessToken, push])

  return (
    <div className={styles.container}>
      <Head>
        <title>Logging you in...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Logging you in..
    </div>
  )
}

export default Home
