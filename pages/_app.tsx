import "../src/globals.css";
import "../i18n";

import type { AppProps } from "next/app";

import { Header } from "@components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
