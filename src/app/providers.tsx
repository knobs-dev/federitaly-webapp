"use client";

import { type FC, type PropsWithChildren } from "react";
import type { AbstractIntlMessages } from "next-intl";

import { clientLocale, clientT } from "@store/i18n";
import { supportedLocales } from "@constants";

import type { Translations } from "@types";

type ProvidersProps = {
  locale: string;
  messages: AbstractIntlMessages | undefined;
};

const Providers: FC<PropsWithChildren<ProvidersProps>> = ({
  locale,
  messages,
  children,
}) => {
  clientLocale.value = locale as (typeof supportedLocales)[number];
  clientT.value = messages as Translations;

  return children;
};

export default Providers;
