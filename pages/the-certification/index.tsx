import useMediaQuery from "@hooks/useMediaQuery";
import { useTranslations } from "@hooks/useTranslations";
import TheCertificationDesktop from "containers/the-certification/desktop";
import TheCertificationMobile from "containers/the-certification/mobile";

const TheCertification = () => {
  const t = useTranslations("TheCertification");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isTablet ? <TheCertificationMobile /> : <TheCertificationDesktop />;
};

export default TheCertification;
