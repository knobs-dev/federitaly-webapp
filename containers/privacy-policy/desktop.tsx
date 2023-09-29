import { useTranslation } from "react-i18next";

import HeaderDesktop from "@components/HeaderDesktop";

const PrivacyPolicyDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pb-24">
      <HeaderDesktop title={t("Common.sidebar.navigation.privacy-policy")} />
      <section className="relative container mx-auto grid grid-cols-12 mt-20 gap-8">
        <div className="flex flex-col col-span-full">
          <h2 className="text-[1.5625rem] font-bold text-[#303A42]">
            {t("PrivacyPolicy.content.0")}
          </h2>
          <h2 className="text-[1.5625rem] font-bold text-[#303A42]">
            {t("PrivacyPolicy.content.1")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.2")}
          </p>
          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.3")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.4")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.5")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.6")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.7")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.8")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.9")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.10")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.11")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.12")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.13")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.14")}
          </p>

          <h2 className="text-[1.5625rem] font-bold text-[#303A42] my-10">
            {t("PrivacyPolicy.content.15")}
          </h2>
          <p className="text-[1.5625rem] font-normal text-[#303A42] whitespace-pre-line">
            {t("PrivacyPolicy.content.16")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyDesktop;
