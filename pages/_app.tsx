import "../src/globals.css";
import "../i18n";

import type { AppProps } from "next/app";
import useMediaQuery from "@hooks/useMediaQuery";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "@components";
import HeaderDesktop from "@components/HeaderDesktop";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <QueryClientProvider client={queryClient}>
      {isTablet && <Header />}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
