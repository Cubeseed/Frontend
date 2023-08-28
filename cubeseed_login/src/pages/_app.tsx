import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import { FarmContexProvider } from "@/context/context";
import { SignUpContextProvider } from "@/context/signup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FarmContexProvider>
      <SignUpContextProvider>
        <Component {...pageProps} />
      </SignUpContextProvider>
    </FarmContexProvider>
  );
}
