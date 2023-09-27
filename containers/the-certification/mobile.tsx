import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type TTheCertificationMobile = {};

const TheCertificationMobile: React.FC<TTheCertificationMobile> = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col pb-4 space-y-6">
      <Image
        width={640}
        height={137}
        src="/assets/images/the-certification-hero-image.png"
        alt=""
        className="w-full object-cover"
      />
      <h2 className="text-[1.375rem] font-bold">
        {t("TheCertification.title")}
      </h2>
      <p className="text-[1.0625rem] font-medium">
        {t("TheCertification.description")}
      </p>
      <section className="space-y-10">
        <div className="space-y-2">
          <h3 className="text-base font-bold">
            {t("TheCertification.list.0.title")}
          </h3>
          <p className="text-base font-normal">
            {t("TheCertification.list.0.body")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold">
            {t("TheCertification.list.1.title")}
          </h3>
          <p className="text-base font-normal">
            {t("TheCertification.list.1.body")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold">
            {t("TheCertification.list.2.title")}
          </h3>
          <p className="text-base font-normal">
            {t("TheCertification.list.2.body")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold">
            {t("TheCertification.list.3.title")}
          </h3>
          <p className="text-base font-normal">
            {t("TheCertification.list.3.body")}
          </p>
        </div>
      </section>
      <p className="pt-10 font-normal">
        {t("TheCertification.distinctive_traits")}
      </p>
      <section className="space-y-6">
        <h3 className="text-base font-bold">
          {t("TheCertification.blockchain_section.title")}
        </h3>
        <p className="text-base font-normal">
          {t("TheCertification.blockchain_section.body.0")}
        </p>
        <p className="text-base font-normal">
          {t("TheCertification.blockchain_section.body.1")}
        </p>
      </section>
    </div>
  );
};

export default TheCertificationMobile;
