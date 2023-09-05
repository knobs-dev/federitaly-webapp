import type { Certification } from "@api/certifications/types";
import { supportedLocales } from "@constants";

import type { SortByCertifiedCompanies } from "@types";

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
    certificationExpirationDateFormatted: new Date(
      companyData.__apps[0].data["Certification Expiration Date"].content[
        locale
      ],
    ),
    certificationReleaseDate:
      companyData.__apps[0].data["Certification Issuance Date"].content[locale],
    certificationReleaseDateFormatted: new Date(
      companyData.__apps[0].data["Certification Issuance Date"].content[locale],
    ),
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

export const filterCertifiedCompaniesFormattedBy = (
  sortBy: SortByCertifiedCompanies,
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >,
) => {
  if (sortBy === "most-recent") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationReleaseDateFormatted >
        b.certificationReleaseDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationReleaseDateFormatted <
        b.certificationReleaseDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "least-recent") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationReleaseDateFormatted <
        b.certificationReleaseDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationReleaseDateFormatted >
        b.certificationReleaseDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "most-recent-expiration-date") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationExpirationDateFormatted >
        b.certificationExpirationDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationExpirationDateFormatted <
        b.certificationExpirationDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "least-recent-expiration-date") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationExpirationDateFormatted <
        b.certificationExpirationDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationExpirationDateFormatted >
        b.certificationExpirationDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  return certifiedCompaniesDataFormatted;
};
