import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";

import { Header } from "@components";

import Providers from "../src/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
          <Providers>
            <main className="absolute left-0 top-16 h-[calc(100%-4rem)] w-full flex flex-1 flex-col overflow-y-auto p-4 text-white -z-1">
              <Main />
              <NextScript />
            </main>
          </Providers>
        </div>
      </body>
    </Html>
  );
}
