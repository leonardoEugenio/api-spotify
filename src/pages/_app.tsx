import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from './components/Header'
import { SessionProvider } from 'next-auth/react'
import { TranksProvider } from './components/hooks/useTracks'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
  <SessionProvider session={session}>
    <TranksProvider>
      <Header />
      <Component {...pageProps} />
    </TranksProvider>
  </SessionProvider>
  )
}

export default MyApp
