import type { AppProps } from "next/app"
import "@/styles/globals.scss"
import { FarmContextProvider } from "@/context/context"
import { SignUpContextProvider } from "@/context/signup"
import Layout from "@/component/Layout"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FarmContextProvider>
      <SignUpContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SignUpContextProvider>
    </FarmContextProvider>
  )
}

export default App
