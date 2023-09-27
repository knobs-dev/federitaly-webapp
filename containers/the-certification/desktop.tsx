import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import HeaderDesktop from "@components/HeaderDesktop";

type TTheCertificationDesktop = {};

const TheCertificationDesktop: React.FC<TTheCertificationDesktop> = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pb-24">
      <HeaderDesktop
        title={t("Common.sidebar.navigation.certification-process")}
      />
      <section className="relative container mx-auto grid grid-cols-12 mt-20 gap-8">
        <div className="col-span-7 relative aspect-video">
          <Image
            fill
            src="/assets/images/the-certification-hero-image.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-5">
          <h2 className="text-[1.5rem] font-medium text-[#0A1A36]">
            {t("TheCertification.title")}
          </h2>
          <p className="text-[1.125rem] font-medium text-[#615E5E] mt-9">
            {t("TheCertification.description")}
          </p>
        </div>

        <div className="col-span-full mt-24">
          <iframe
            src="https://www.youtube.com/embed/IJtQI0yyaP0?si=bdBRcacORx3-lV6E"
            className="mt-4 aspect-video w-full rounded-3xl bg-black"
            title="YouTube video player"
          />
        </div>

        <div className="col-span-6 mt-20">
          <div className="space-y-2 p-8 bg-[#F9F9F9] h-[15rem]">
            <h3 className="text-[1.125rem] font-semibold text-[#615E5E]">
              {t("TheCertification.list.0.title")}
            </h3>
            <p className="text-[1.125rem] font-normal text-[#615E5E]">
              {t("TheCertification.list.0.body")}
            </p>
          </div>

          <div className="space-y-2 p-8 bg-[#F9F9F9] mt-9 h-[17rem]">
            <h3 className="text-[1.125rem] font-semibold text-[#615E5E]">
              {t("TheCertification.list.2.title")}
            </h3>
            <p className="text-[1.125rem] font-normal text-[#615E5E]">
              {t("TheCertification.list.2.body")}
            </p>
          </div>
        </div>

        <div className="col-span-6 mt-20">
          <div className="space-y-2 p-8 bg-[#F9F9F9] h-[15rem]">
            <h3 className="text-[1.125rem] font-semibold text-[#615E5E]">
              {t("TheCertification.list.1.title")}
            </h3>
            <p className="text-[1.125rem] font-normal text-[#615E5E]">
              {t("TheCertification.list.1.body")}
            </p>
          </div>

          <div className="space-y-2 p-8 bg-[#F9F9F9] mt-9 h-[17rem]">
            <h3 className="text-[1.125rem] font-semibold text-[#615E5E]">
              {t("TheCertification.list.3.title")}
            </h3>
            <p className="text-[1.125rem] font-normal text-[#615E5E]">
              {t("TheCertification.list.3.body")}
            </p>
          </div>
        </div>

        <div className="col-span-full mt-20">
          <p className="text-[1.25rem] font-normal text-[#615E5E]">
            {t("TheCertification.distinctive_traits")}
          </p>
        </div>
      </section>
      <div className="w-full bg-[#F2F1F1]">
        <section className="relative container mx-auto grid grid-cols-12 mt-20 gap-8">
          <div className="col-span-6 py-32">
            <h3 className="text-[2.375rem] font-semibold text-[#0A1A36]">
              {t("TheCertification.blockchain_section.title")}
            </h3>
            <p className="text-[1.125rem] font-normal mt-9 text-[#2B2D32]">
              {t("TheCertification.blockchain_section.body.0")}
            </p>
            <p className="text-[1.125rem] font-normal mt-9 text-[#2B2D32]">
              {t("TheCertification.blockchain_section.body.1")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TheCertificationDesktop;
