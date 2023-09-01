"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import { IconClose, IconMenu } from "@icons";

import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
      <header className="absolute left-0 top-0 h-20 w-full flex items-center justify-between px-4">
        <Image
          src="/assets/images/logo-white.png"
          width={196}
          height={35}
          alt="FederItaly logo"
        />
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
