import Base from '@/components/base'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Base>
    <Component {...pageProps} />
    </Base>
}
