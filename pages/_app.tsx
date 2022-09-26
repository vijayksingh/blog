import '../styles/globals.scss'
import '../styles/notes-list.scss'
import '../styles/navbar.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
