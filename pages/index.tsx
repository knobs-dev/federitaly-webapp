import { type FC } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import { useLocale } from "@hooks/useTranslations";
import HomeDesktop from "containers/desktop";
import HomeMobile from "containers/mobile";
import { useQuery } from "react-query";
import { fetchCompanies } from "utils/api";

import { formatCertifiedCompaniesData } from "@utils";

type HomeContentProps = {};

const HomeContent: FC<HomeContentProps> = () => {
  const locale = useLocale();
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const { data: certifiedCompaniesDataFormatted } = useQuery(
    ["certifiedCompanies", locale],
    fetchCompanies,
  );

  return isTablet ? (
    <HomeMobile
      certifiedCompaniesDataFormatted={
        certifiedCompaniesDataFormatted as ReturnType<
          typeof formatCertifiedCompaniesData
        >
      }
    />
  ) : (
    <HomeDesktop
      certifiedCompaniesDataFormatted={
        certifiedCompaniesDataFormatted as ReturnType<
          typeof formatCertifiedCompaniesData
        >
      }
    />
  );
};

export default HomeContent;
