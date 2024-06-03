import { FarmContextProvider } from "@/context/context"
import { SignUpContextProvider } from "@/context/signup"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FarmContextProvider>
      <SignUpContextProvider>
        <Component {...pageProps} />
      </SignUpContextProvider>
    </FarmContextProvider>
  )
}
