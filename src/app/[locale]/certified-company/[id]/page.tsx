import type { FC } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  getCertificationData,
  getCertifiedCompanies,
} from "@api/certifications";
import { supportedLocales } from "@constants";
import { formatCertifiedCompanyData } from "@utils";

import CertifiedCompaniesContentClient from "./client";

type CertifiedCompanyContentProps = {
  certifiedCompanyDataFormatted: ReturnType<typeof formatCertifiedCompanyData>;
};

const CertifiedCompanyContent: FC<CertifiedCompanyContentProps> = ({
  certifiedCompanyDataFormatted,
}) => {
  const t = useTranslations("CertifiedCompany");

  return (
    <div className="absolute left-0 top-0 h-full w-screen flex flex-1 flex-col">
      <header className="flex items-center px-4">
        <Image
          src={certifiedCompanyDataFormatted.companyProfilePhoto}
          width={80}
          height={80}
          alt={`${certifiedCompanyDataFormatted.companyName} logo`}
          className="h-20 w-20 shrink-0 rounded-full bg-white object-contain"
        />
        <div className="ml-4 flex flex-col">
          <h2 className="text-lg font-medium">
            {certifiedCompanyDataFormatted.companyName}
          </h2>
          <h3 className="mt-2.5 text-sm font-medium">
            {t("certification_date")}
          </h3>
          <p className="text-base font-medium text-[#95AEED]">
            {certifiedCompanyDataFormatted.certificationReleaseDate}
          </p>
        </div>
      </header>
      <CertifiedCompaniesContentClient
        certifiedCompanyDataFormatted={certifiedCompanyDataFormatted}
      />
    </div>
  );
};

type CertifiedCompanyProps = {
  params: { id: string };
};

const CertifiedCompany: FC<CertifiedCompanyProps> = async ({
  params: { id },
}) => {
  const locale = useLocale();

  const certifiedCompanies = await getCertifiedCompanies();

  if (!certifiedCompanies.includes(id)) {
    redirect("/");
  }

  const certifiedCompanyData = await getCertificationData(id);

  const certifiedCompanyDataFormatted = formatCertifiedCompanyData(
    certifiedCompanyData,
    locale as (typeof supportedLocales)[number],
  );

  return (
    <CertifiedCompanyContent
      certifiedCompanyDataFormatted={certifiedCompanyDataFormatted}
    />
  );
};

export default CertifiedCompany;
