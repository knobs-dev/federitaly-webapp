import { getCertificationData, getCertifiedCompanies } from "@api/certifications";
import { supportedLocales } from "@constants";
import { formatCertifiedCompaniesData } from "@utils";


export const fetchCompanies = async ({ queryKey }: any) => {
  const [, locale] = queryKey;
  const certifiedCompanies = await getCertifiedCompanies();
  const certifiedCompaniesData = await Promise.all(
    certifiedCompanies.map((company) => getCertificationData(company)),
  );
  const certifiedCompaniesDataFormatted = formatCertifiedCompaniesData(
    certifiedCompaniesData,
    locale as (typeof supportedLocales)[number],
  );

  return certifiedCompaniesDataFormatted;
}