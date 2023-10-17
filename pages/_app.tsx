import "../src/globals.css";
import "../i18n";

import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import useMediaQuery from "@hooks/useMediaQuery";
import { QueryClient, QueryClientProvider } from "react-query";

import { Footer, Header } from "@components";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isClient && (
        <>
          {isTablet && <Header />}
          <Component {...pageProps} />
          {!isTablet && <Footer />}
        </>
      )}
    </QueryClientProvider>
  );
}
