import { type FC } from "react";

import { formatCertifiedCompaniesData } from "@utils";

type THomeDesktop = {
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >;
};

const HomeDesktop: FC<THomeDesktop> = ({ certifiedCompaniesDataFormatted }) => {
  return (
    <>
      <section></section>
    </>
  );
};

export default HomeDesktop;
