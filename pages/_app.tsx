import "../src/globals.css";
import "../i18n";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "@components";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
