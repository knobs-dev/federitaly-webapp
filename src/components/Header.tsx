"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePrevious } from "@/hooks";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next-intl/client";

import { clientT } from "@store/i18n";

import { IconArrowRight, IconClose, IconMenu } from "@icons";

import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);

  const isPathnameHome = pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (prevPathname !== undefined && prevPathname !== pathname) {
      if (isSidebarOpen) {
        toggleSidebar();
      }
    }
  }, [pathname]);

  const pageTitles = {
    "/certified-companies":
      clientT.value?.Common.header_titles.certified_companies,
    "/certified-company/[id]":
      clientT.value?.Common.header_titles.certified_company,
  };

  const getPageTitle = () => {
    let path = pathname;

    if (pathname.startsWith("/certified-company/")) {
      path = "/certified-company/[id]";
    }

    return pageTitles[path as keyof typeof pageTitles];
  };

  return (
    <>
      <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
      <header className="fixed left-0 top-0 z-2 h-16 w-full flex items-center justify-between px-4">
        {isPathnameHome && (
          <Image
            src="/assets/images/logo-white.png"
            width={196}
            height={35}
            alt="FederItaly logo"
          />
        )}
        {!isPathnameHome && (
          <button
            type="button"
            onClick={() => router.back()}
            className="h-[2.625rem] w-[2.625rem] flex items-center justify-center border-1 border-[#FFFFFF1A] rounded-full"
          >
            <IconArrowRight className="w-3 rotate-180 fill-white" />
            <span className="sr-only">
              {clientT.value?.Common.screen_readers_labels.go_back}
            </span>
          </button>
        )}
        {!isPathnameHome && (
          <h1 className="text-xl font-semibold text-white">{getPageTitle()}</h1>
        )}
        <button
          type="button"
          onClick={toggleSidebar}
          className="translate-x-2 p-2"
        >
          {!isSidebarOpen && <IconMenu className="h-6 w-6 fill-white" />}
          {isSidebarOpen && <IconClose className="h-6 w-6 fill-white" />}
          <span className="sr-only">
            {!isSidebarOpen
              ? clientT.value?.Common.screen_readers_labels.open_menu
              : clientT.value?.Common.screen_readers_labels.close_menu}
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;
