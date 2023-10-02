import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";

import Providers from "../src/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-hidden">
        <div
          id="root"
          className="absolute left-0 top-0 h-screen w-screen flex flex-col -z-1"
        >
          <div className="absolute h-full w-full from-[#272770] via-[#090919] to-black from-10% to-55% via-35% bg-gradient-to-b -z-1 lg:hidden">
            <Image
              src="/assets/images/bg-cover-mobile.png"
              fill
              alt=""
              priority
            />
          </div>
          <Providers>
            <main className="absolute left-0 top-16 lg:top-0 h-[calc(100%-4rem)] lg:h-full w-full flex flex-1 flex-col overflow-y-auto p-4 lg:p-0 text-white -z-1 lg:text-black lg:bg-white font-poppins">
              <Main />
              <NextScript />
            </main>
          </Providers>
        </div>
      </body>
    </Html>
  );
}
