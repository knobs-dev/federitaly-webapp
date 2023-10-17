import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import JotformEmbed from "react-jotform-embed";

import { IconEmail, IconLocation, IconPhone } from "@components/icons";

const ContactsMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <Image
          src="/assets/images/logo-white.png"
          width={131}
          height={23}
          alt="FederItaly logo"
        />
        <div className="mt-3 px-3 space-y-3">
          <div className="flex items-center">
            <IconLocation className="h-6 w-5 stroke-white" />
            <p className="ml-2 text-xs font-medium">
              Segreteria Nazionale Via Magenta, 5 00185 Roma, Italy
            </p>
          </div>
          <div className="flex items-center">
            <IconPhone className="h-5 w-5 fill-white" />
            <p className="ml-2 text-xs font-medium">
              +39 351 569 2010 | +39 06 92915346
            </p>
          </div>
          <div className="flex items-center">
            <IconEmail className="h-5 w-5 fill-white" />
            <p className="ml-2 text-xs font-medium">info@federitaly.it</p>
          </div>
          <hr className="translate-y-2 border-1 border-[#D1D3D499]" />
        </div>
      </header>
      <section className="relative w-full flex flex-1 flex-col pt-5 h-full">
        <header className="h-12">
          <h2 className="text-[0.9375rem] font-semibold">
            {t("Contacts.form.title")}
          </h2>
        </header>
        <JotformEmbed src="https://form.jotformeu.com/232755856734064" />
      </section>
    </>
  );
};

export default ContactsMobile;
