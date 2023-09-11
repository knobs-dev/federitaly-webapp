import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLocale, useMessages } from "next-intl";

import { Header } from "@components";

import type { Translations } from "@types";

import Providers from "../providers";

import "../globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type RootLayoutProps = {
  params: {
    locale: string;
  };
};

const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = ({
  children,
  params,
}) => {
  const locale = useLocale();
  const messages = useMessages();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.className}>
      <body className="overflow-hidden">
        <div
          id="root"
          className="absolute left-0 top-0 h-screen w-screen flex flex-col -z-1"
        >
          <div className="absolute h-full w-full from-[#272770] via-[#090919] to-black from-10% to-55% via-35% bg-gradient-to-b -z-1">
            <Image
              src="/assets/images/bg-cover-mobile.png"
              fill
              alt=""
              priority
            />
          </div>
          <Providers
            locale={locale}
            messages={messages as unknown as Translations}
          >
            <Header />
            <main className="absolute left-0 top-16 h-[calc(100%-4rem)] w-full flex flex-1 flex-col overflow-y-auto p-4 text-white -z-1">
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
