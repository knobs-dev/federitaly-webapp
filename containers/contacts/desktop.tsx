import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import JotformEmbed from "react-jotform-embed";

import HeaderDesktop from "@components/HeaderDesktop";

const ContactsDesktop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative pb-24">
      <HeaderDesktop title={t("Common.sidebar.navigation.contacts")} />
      <section className="relative container mx-auto grid grid-cols-12 mt-20">
        <div className="col-span-5">
          <span className="text-[#475467] text-[1.25rem] font-medium">
            {t("Contacts.us")}
          </span>
          <div className="mt-10">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/images/gps-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  Segreteria Nazionale
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  Via Magenta, 5 00185 Roma, Italy
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/assets/images/phone-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  {t("Contacts.form.fields_labels.phone_number")}
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  +39 351 569 2010
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  +39 06 92915346
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/assets/images/email-icon.png"
                alt="gps-icon"
                width={56}
                height={56}
              />
              <div>
                <p className="text-[1.5rem] text-[#1D2939] font-semibold">
                  {t("Contacts.form.fields_labels.email")}
                </p>
                <p className="text-[1.125rem] text-[#667085]">
                  info@federitaly.it
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <JotformEmbed src="https://form.jotformeu.com/232755856734064" />
        </div>
      </section>
    </div>
  );
};

export default ContactsDesktop;
