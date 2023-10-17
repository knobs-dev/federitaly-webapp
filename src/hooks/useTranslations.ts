import { useTranslation } from "react-i18next";

import { getLanguage } from "../../i18n";

// This is a wrapper to reuse the hook format of next-i18n
export function useTranslations(translationKey: string) {
  const { t: translate } = useTranslation();

  return (key: string) => translate(`${translationKey}.${key}`);
}

export function useLocale() {
  return getLanguage();
}
