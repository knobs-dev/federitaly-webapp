import { signal, type Signal } from "@preact/signals";

import { defaultLocale, supportedLocales } from "@constants";

import type { Translations } from "@types";
import { changeLanguage } from "i18next";

export const clientT: Signal<Translations | undefined> = signal(undefined);

export const clientLocale: Signal<(typeof supportedLocales)[number]> =
  signal(defaultLocale);


export const getCurrentLanguage = () => {
  return localStorage.getItem('i18nextLng')
}

export const setCurrentLanguage = (language: string) => {
  localStorage.setItem('i18nextLng', language)
  changeLanguage(language)
}