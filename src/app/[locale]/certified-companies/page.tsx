import { useLocale } from "next-intl";

import {
  getCertificationData,
  getCertifiedCompanies,
} from "@api/certifications";
import { supportedLocales } from "@constants";
import {
  filterCertifiedCompaniesFormattedBy,
  formatCertifiedCompaniesData,
} from "@utils";

import CertifiedCompaniesContent from "./client";

const CertifiedCompanies = async () => {
  const locale = useLocale();

  const certifiedCompanies = await getCertifiedCompanies();
  const certifiedCompaniesData = await Promise.all(
    certifiedCompanies.map((company) => getCertificationData(company)),
  );
  const certifiedCompaniesDataFormatted = filterCertifiedCompaniesFormattedBy(
    "most-recent",
    formatCertifiedCompaniesData(
      certifiedCompaniesData,
      locale as (typeof supportedLocales)[number],
    ),
  );

  return (
    <CertifiedCompaniesContent
      certifiedCompaniesDataFormatted={certifiedCompaniesDataFormatted}
    />
  );
};

export default CertifiedCompanies;
