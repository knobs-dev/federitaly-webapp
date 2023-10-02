import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { getCurrentLanguage, setCurrentLanguage } from "@store/i18n";

import { IconItalyFlag, IconUKFlag } from "./icons";

type THeaderDesktop = {
  title?: string;
};

const HeaderDesktop: FC<THeaderDesktop> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[135px]">
      <div className="container mx-auto flex justify-end items-start bg-transparent py-8 z-50 relative">
        <div className="absolute left-0 z-50 top-2">
          <Image
            src="/assets/images/federitaly-certified.png"
            alt="federitaly cert logo"
            width={135}
            height={135}
          />
        </div>
        <div className="flex justify-end items-center space-x-12">
          <Link href="/" className="flex items-center space-x-6">
            <span className="text-[#0A1A36] text-[1rem] font-medium">
              {t("Common.sidebar.navigation.home")}
            </span>
          </Link>
          <Link
            href="/the-certification"
            className="flex items-center space-x-6"
          >
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
                <IconItalyFlag className="h-7 w-9" />
              )}
              {getCurrentLanguage() === "it" && (
                <IconUKFlag className="h-7 w-9" />
              )}
            </button>
          )}
        </div>
      </div>
      {title && (
        <div className="bg-[#18285C] py-16">
          <div className="container mx-auto">
            <h1 className="text-white text-[3rem] font-semibold">{title}</h1>
            <div className="space-x-2">
              <Link href="/">
                <span className="text-white text-[1rem]">
                  {t("Common.sidebar.navigation.home")}
                </span>
              </Link>
              <span className="text-white text-[1rem]">•</span>
              <span className="text-white text-[1rem]">{title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
