"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next-intl/client";

import { IconArrowRight, IconClose, IconMenu } from "@icons";

import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  const isPathnameHome = pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
            aria-label="Go back"
            onClick={() => router.back()}
            className="h-[2.625rem] w-[2.625rem] flex items-center justify-center border-1 border-[#FFFFFF1A] rounded-full"
          >
            <IconArrowRight className="w-3 rotate-180 fill-white" />
          </button>
        )}
        <button
          type="button"
          onClick={toggleSidebar}
          className="translate-x-2 p-2"
        >
          {!isSidebarOpen && <IconMenu className="h-6 w-6 fill-white" />}
          {isSidebarOpen && <IconClose className="h-6 w-6 fill-white" />}
        </button>
      </header>
    </>
  );
};

export default Header;
