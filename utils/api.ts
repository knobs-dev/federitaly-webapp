import {
  getCertificationData,
  getCertifiedCompanies,
} from "@api/certifications";
import { supportedLocales } from "@constants";
import {
  formatCertifiedCompaniesData,
  formatCertifiedCompanyData,
} from "@utils";

const blacklist: { [key: string]: boolean } = {
  "651ac77c8f84fcdaee20663d": true,
};

export const fetchCompanies = async ({ queryKey }: any) => {
  const [, locale] = queryKey;
  const certifiedCompanies = await getCertifiedCompanies();
  const certifiedCompaniesData = await Promise.all(
    certifiedCompanies
      .filter((company) => !blacklist[company])
      .map((company) => getCertificationData(company)),
  );
  const certifiedCompaniesDataFormatted = formatCertifiedCompaniesData(
    certifiedCompaniesData,
    locale as (typeof supportedLocales)[number],
  );

  return certifiedCompaniesDataFormatted;
};

export const fetchCertifiedCompany = async ({ queryKey }: any) => {
  const [, id, locale] = queryKey;
  const certifiedCompanies = await getCertifiedCompanies();

  if (!certifiedCompanies.includes(id)) {
    return;
  }

  const certifiedCompanyData = await getCertificationData(id);

  const certifiedCompanyDataFormatted = formatCertifiedCompanyData(
    certifiedCompanyData,
    locale as (typeof supportedLocales)[number],
  );

  return certifiedCompanyDataFormatted;
};
