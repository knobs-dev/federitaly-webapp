import { useTranslations } from "@hooks/useTranslations";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-[0.9375rem] font-bold">{t("content.0")}</h2>
      <h2 className="text-[0.9375rem] font-bold">{t("content.1")}</h2>
      <p className="text-[0.9375rem] font-normal">{t("content.2")}</p>
      <h2 className="text-[0.9375rem] font-bold">{t("content.3")}</h2>
      <p className="text-[0.9375rem] font-normal">{t("content.4")}</p>
    </div>
  );
};

export default PrivacyPolicy;
