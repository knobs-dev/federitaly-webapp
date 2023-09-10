"use client";

import { type FC, type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import { clientLocale, clientT } from "@store/i18n";
import { supportedLocales } from "@constants";

import type { Translations } from "@types";

import "react-toastify/dist/ReactToastify.css";

type ProvidersProps = {
  locale: string;
  messages: Translations | undefined;
};

const Providers: FC<PropsWithChildren<ProvidersProps>> = ({
  locale,
  messages,
  children,
}) => {
  clientLocale.value = locale as (typeof supportedLocales)[number];
  clientT.value = messages as Translations;

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Providers;
