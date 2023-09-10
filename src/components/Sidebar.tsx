"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next-intl/client";
import Link from "next-intl/link";

import { clientLocale, clientT } from "@store/i18n";

import {
  IconCertifications,
  IconContacts,
  IconFaq,
  IconHome,
  IconItalyFlag,
  IconPrivacyPolicy,
  IconSearch,
  IconUKFlag,
} from "@icons";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

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
      className="fixed right-0 top-0 h-full w-full flex flex-col text-white"
    >
      <div className="absolute z-1 h-full w-full from-[#060654] to-black bg-gradient-to-b" />
      <main className="z-2 flex-1 px-10 pt-24 text-lg">
        <nav>
          <ul className="space-y-6">
            <li>
              <Link href="/" className="flex items-center space-x-6">
                <IconHome className="h-5 w-5 stroke-white" />
                <span>{clientT.value?.Common.sidebar.navigation.home}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/the-certification"
                className="flex items-center space-x-6"
              >
                <IconCertifications className="h-5 w-5 stroke-white" />
                <span>
                  {
                    clientT.value?.Common.sidebar.navigation[
                      "certification-process"
                    ]
                  }
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/certified-companies"
                className="flex items-center space-x-6"
              >
                <IconSearch className="h-5 w-5 stroke-white" />
                <span>
                  {
                    clientT.value?.Common.sidebar.navigation[
                      "certified-companies"
                    ]
                  }
                </span>
              </Link>
            </li>
            <li>
              <Link href="/faq" className="flex items-center space-x-6">
                <IconFaq className="h-5 w-5 stroke-white" />
                <span>{clientT.value?.Common.sidebar.navigation.faq}</span>
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="flex items-center space-x-6">
                <IconContacts className="h-5 w-5 fill-white" />
                <span>{clientT.value?.Common.sidebar.navigation.contacts}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="flex items-center space-x-6"
              >
                <IconPrivacyPolicy className="h-5 w-5 fill-white" />
                <span>
                  {clientT.value?.Common.sidebar.navigation["privacy-policy"]}
                </span>
              </Link>
            </li>
            <li className="pt-8">
              <button
                type="button"
                className="flex items-center space-x-6"
                onClick={() =>
                  router.replace(pathname, {
                    locale: clientLocale.value === "en" ? "it" : "en",
                  })
                }
              >
                {clientLocale.value === "en" && (
                  <IconItalyFlag className="h-5 w-5" />
                )}
                {clientLocale.value === "it" && (
                  <IconUKFlag className="h-5 w-5" />
                )}
                <span>
                  {clientT.value?.Common.sidebar.navigation["language-version"]}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </main>
      <footer className="z-2 px-8 py-5">
        <h2 className="px-2 text-xs font-bold uppercase">
          {clientT.value?.Common.sidebar.partner}
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
      </footer>
    </motion.aside>
  );
};

export default Sidebar;
