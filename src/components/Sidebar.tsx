"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const Sidebar = () => (
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
    className="fixed right-0 top-0 h-full w-full flex flex-col"
  >
    <div className="absolute h-full w-full from-[#060654] to-black bg-gradient-to-b -z-1" />
    <main className="flex-1 px-12 pt-28 text-lg text-white">
      <nav>
        <ul className="flex flex-col space-y-6">
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconHome className="h-5 w-5 stroke-white" />
              <span>{clientT.value?.Sidebar.navigation.home}</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconCertifications className="h-5 w-5 stroke-white" />
              <span>
                {clientT.value?.Sidebar.navigation["certification-process"]}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconSearch className="h-5 w-5 stroke-white" />
              <span>
                {clientT.value?.Sidebar.navigation["certified-companies"]}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconFaq className="h-5 w-5 stroke-white" />
              <span>{clientT.value?.Sidebar.navigation.faq}</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconContacts className="h-5 w-5 fill-white" />
              <span>{clientT.value?.Sidebar.navigation.contacts}</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center space-x-6">
              <IconPrivacyPolicy className="h-5 w-5 fill-white" />
              <span>{clientT.value?.Sidebar.navigation["privacy-policy"]}</span>
            </Link>
          </li>
          <li className="pt-8">
            <Link
              locale={clientLocale.value === "en" ? "it" : "en"}
              href="/"
              className="flex items-center space-x-6"
            >
              {clientLocale.value === "en" && (
                <IconItalyFlag className="h-5 w-5" />
              )}
              {clientLocale.value === "it" && (
                <IconUKFlag className="h-5 w-5" />
              )}
              <span>
                {clientT.value?.Sidebar.navigation["language-version"]}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
    <footer className="px-8 py-5">
      <h2 className="px-4 text-sm font-bold text-white">
        {clientT.value?.Sidebar.partner.toUpperCase()}
      </h2>
      <hr className="mt-1 border-[#D1D3D499]" />
      <ul className="mt-5 flex items-center justify-between px-4">
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

export default Sidebar;
