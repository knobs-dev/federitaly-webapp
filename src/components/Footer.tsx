import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#18285C]">
      <div className="py-7 mx-auto container flex justify-between items-center">
        <div className="flex justify-start items-center space-x-5">
          <Image
            src="/assets/images/logo-white.png"
            width={164}
            height={32}
            alt="logo white"
          />
          <div className="flex justify-start items-cente space-x-2">
            <span className="text-white text-[0.875rem]">© 2023</span>
            <span className="text-white text-[0.875rem]">|</span>
            <Link
              href="/privacy-policy"
              className="flex items-center space-x-6"
            >
              <span className="text-white text-[0.875rem]">
                {t("Common.sidebar.navigation.privacy-policy")}
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center space-x-6">
          <a href="https://dfinity.org/" target="_blank" rel="noreferrer">
            <Image
              width={69}
              height={36}
              src="/assets/images/dfinity-logo-white.png"
              alt="DFINITY logo"
            />
          </a>

          <a href="https://knobs.it/" target="_blank" rel="noreferrer">
            <Image
              width={73}
              height={26}
              src="/assets/images/knobs-logo-white.png"
              alt="KNOBS logo"
            />
          </a>

          <a href="https://www.origyn.com" target="_blank" rel="noreferrer">
            <Image
              width={97}
              height={22}
              src="/assets/images/origyn-logo-white.png"
              alt="ORIGYN logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
