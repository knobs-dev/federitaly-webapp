import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { getCurrentLanguage, setCurrentLanguage } from "@store/i18n";

import { IconItalyFlag, IconUKFlag } from "./icons";

type THeaderDesktop = {};

const HeaderDesktop: FC<THeaderDesktop> = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex justify-between items-start bg-transparent pt-4">
      <Image
        src="/assets/images/federitaly-cert.png"
        alt="federitaly cert logo"
        width={174}
        height={135}
      />
      <div className="flex justify-end items-center space-x-12">
        <Link href="/" className="flex items-center space-x-6">
          <span className="text-[#0A1A36] text-[1rem] font-medium">
            {t("Common.sidebar.navigation.home")}
          </span>
        </Link>
        <Link href="/the-certification" className="flex items-center space-x-6">
          <span className="text-[#0A1A36] text-[1rem] font-medium">
            {t("Common.sidebar.navigation.certification-process")}
          </span>
        </Link>
        <Link
          href="/certified-companies"
          className="flex items-center space-x-6"
        >
          <span className="text-[#0A1A36] text-[1rem] font-medium">
            {t("Common.sidebar.navigation.certified-companies")}
          </span>
        </Link>
        <Link href="/contacts" className="flex items-center space-x-6">
          <span className="text-[#0A1A36] text-[1rem] font-medium">
            {t("Common.sidebar.navigation.contacts")}
          </span>
        </Link>
        <Link href="/faq" className="flex items-center space-x-6">
          <span className="text-[#0A1A36] text-[1rem] font-medium">
            {t("Common.sidebar.navigation.faq")}
          </span>
        </Link>
        {typeof localStorage !== "undefined" && (
          <button
            type="button"
            className="flex items-center pl-12"
            onClick={() =>
              getCurrentLanguage() === "en"
                ? setCurrentLanguage("it")
                : setCurrentLanguage("en")
            }
          >
            {getCurrentLanguage() === "en" && (
              <IconItalyFlag className="h-5 w-5" />
            )}
            {getCurrentLanguage() === "it" && (
              <IconUKFlag className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderDesktop;
