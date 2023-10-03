import { type FC } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import CertifiedCompanyDesktop from "containers/certified-company/desktop";
import CertifiedCompanyMobile from "containers/certified-company/mobile";

type CertifiedCompanyContentProps = {};

const CertifiedCompany: FC<CertifiedCompanyContentProps> = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isTablet ? <CertifiedCompanyMobile /> : <CertifiedCompanyDesktop />;
};

export default CertifiedCompany;
