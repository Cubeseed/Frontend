import type { AppProps } from "next/app"
import "@/styles/globals.css"
import { FarmContextProvider } from "@/context/context"
import { SignUpContextProvider } from "@/context/signup"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FarmContextProvider>
      <SignUpContextProvider>
        <Component {...pageProps} />
      </SignUpContextProvider>
    </FarmContextProvider>
  )
}
