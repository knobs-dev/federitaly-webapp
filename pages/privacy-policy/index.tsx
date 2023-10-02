import useMediaQuery from "@hooks/useMediaQuery";
import PrivacyPolicyDesktop from "containers/privacy-policy/desktop";
import PrivacyPolicyMobile from "containers/privacy-policy/mobile";

const PrivacyPolicy = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isTablet ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop />;
};

export default PrivacyPolicy;
