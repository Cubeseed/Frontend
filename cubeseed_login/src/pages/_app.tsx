import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@/styles/globals.css";
import { FarmContexProvider } from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FarmContexProvider>
      <Component {...pageProps} />
    </FarmContexProvider>
  );
}
