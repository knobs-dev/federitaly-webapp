import Image from "next/image";
import { useTranslations } from "@hooks/useTranslations";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";

import {
  IconCertifications,
  IconContacts,
  IconFaq,
  IconHome,
  IconItalyFlag,
  IconPrivacyPolicy,
  IconSearch,
  IconUKFlag,
} from "@components/icons";
import Link from "@components/RetainQueryLink";

import {
  clientLocale,
  clientT,
  getCurrentLanguage,
  setCurrentLanguage,
} from "@store/i18n";

const Sidebar = () => {
  // const router = useRouter();
  // const pathname = router.pathname;

  const t = useTranslations("Common");

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{
        x: "0",
        transition: {
          type: "tween",
        },
      }}
      exit={{
        x: "100%",
        transition: { duration: 0.3 },
      }}
      className="fixed right-0 top-0 h-full w-full flex flex-col text-white z-40"
    >
      <div className="absolute z-1 h-full w-full from-[#060654] to-black bg-gradient-to-b" />
      <main className="z-50 flex-1 px-10 pt-24 text-lg">
        <nav>
          <ul className="space-y-6">
            <li>
              <Link href="/" className="flex items-center space-x-6">
                <IconHome className="h-5 w-5 stroke-white" />
                <span>{t("sidebar.navigation.home")}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/the-certification"
                className="flex items-center space-x-6"
              >
                <IconCertifications className="h-5 w-5 stroke-white" />
                <span>{t("sidebar.navigation.certification-process")}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/certified-companies"
                className="flex items-center space-x-6"
              >
                <IconSearch className="h-5 w-5 stroke-white" />
                <span>{t("sidebar.navigation.certified-companies")}</span>
              </Link>
            </li>
            <li>
              <Link href="/faq" className="flex items-center space-x-6">
                <IconFaq className="h-5 w-5 stroke-white" />
                <span>{t("sidebar.navigation.faq")}</span>
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="flex items-center space-x-6">
                <IconContacts className="h-5 w-5 fill-white" />
                <span>{t("sidebar.navigation.contacts")}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="flex items-center space-x-6"
              >
                <IconPrivacyPolicy className="h-5 w-5 fill-white" />
                <span>{t("sidebar.navigation.privacy-policy")}</span>
              </Link>
            </li>
            <li className="pt-8">
              <button
                type="button"
                className="flex items-center space-x-6"
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
                <span>{t("sidebar.navigation.language-version")}</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="z-2 py-5 absolute bottom-0 left-5 right-5">
          <h2 className="px-2 text-xs font-bold uppercase">
            {t("sidebar.partner")}
          </h2>
          <hr className="mt-1 border-[#D1D3D499]" />
          <ul className="mt-5 flex items-center justify-between px-2">
            <li>
              <a href="https://dfinity.org/" target="_blank" rel="noreferrer">
                <Image
                  width={69}
                  height={36}
                  src="/assets/images/dfinity-logo-white.png"
                  alt="DFINITY logo"
                />
              </a>
            </li>
            <li>
              <a href="https://knobs.it/" target="_blank" rel="noreferrer">
                <Image
                  width={73}
                  height={26}
                  src="/assets/images/knobs-logo-white.png"
                  alt="KNOBS logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.origyn.com" target="_blank" rel="noreferrer">
                <Image
                  width={97}
                  height={22}
                  src="/assets/images/origyn-logo-white.png"
                  alt="ORIGYN logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </motion.aside>
  );
};

export default Sidebar;
