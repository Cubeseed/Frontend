import type { AppProps } from 'next/app'
import "@/styles/globals.scss"

export default function App({ Component, pageProps }: AppProps) {
  console.log("Starting")
  return <Component {...pageProps} />
}
