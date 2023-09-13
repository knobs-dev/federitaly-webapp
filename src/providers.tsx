"use client";

import { type FC, type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type ProvidersProps = {};

const Providers: FC<PropsWithChildren<ProvidersProps>> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Providers;
