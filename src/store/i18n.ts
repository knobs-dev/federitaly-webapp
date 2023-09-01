import { signal, type Signal } from "@preact/signals";

import { defaultLocale, supportedLocales } from "@constants";

import type { Translations } from "@types";

export const clientT: Signal<Translations | undefined> = signal(undefined);

export const clientLocale: Signal<(typeof supportedLocales)[number]> =
  signal(defaultLocale);
