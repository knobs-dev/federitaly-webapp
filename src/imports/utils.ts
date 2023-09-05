import type { Certification } from "@api/certifications/types";
import { supportedLocales } from "@constants";

export const formatCertifiedCompanyData = (
  companyData: Certification,
  locale: (typeof supportedLocales)[number],
) => {
  const mainImagePath = companyData.__apps[0].data["files-mainImage"][0].path;

  return {
    companyName: companyData.__apps[0].data["Company Name"].content[locale],
    certificationExpirationDate:
      companyData.__apps[0].data["Certification Expiration Date"].content[
        locale
      ],
    companyProfilePhoto: companyData.library.find(
      (resource) => resource.library_id === mainImagePath,
    )!.location,
  };
};

export const formatCertifiedCompaniesData = (
  companiesData: Certification[],
  locale: (typeof supportedLocales)[number],
) =>
  companiesData.map((companyData) =>
    formatCertifiedCompanyData(companyData, locale),
  );
