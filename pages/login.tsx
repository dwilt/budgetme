import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../src/styles/Home.module.css'

const LoginPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login to BudgetMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/api/auth/login">Login</Link>
      </main>
    </div>
  )
}

export default LoginPage
