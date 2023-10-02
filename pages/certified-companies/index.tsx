import { type FC } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import CertifiedCompaniesDesktop from "containers/certified-companies/desktop";
import CertifiedCompaniesMobile from "containers/certified-companies/mobile";

type CertifiedCompaniesContentProps = {};

const CertifiedCompaniesContent: FC<CertifiedCompaniesContentProps> = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isTablet ? (
    <CertifiedCompaniesMobile />
  ) : (
    <CertifiedCompaniesDesktop />
  );
};

export default CertifiedCompaniesContent;
