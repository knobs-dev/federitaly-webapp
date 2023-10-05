import React from "react";
import {
  Defs,
  Document,
  Image,
  LinearGradient,
  Page,
  Path,
  Stop,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";

// Create styles
const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: "280rem",
    height: "48rem",
    marginTop: "20px",
    position: "relative",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    paddingTop: "64px",
    paddingHorizontal: "16px",
  },
  textContainer: {
    width: "55%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    gap: 12,
    paddingHorizontal: 16,
    position: "relative",
  },

  title: {
    color: "#858686",
    fontWeight: "medium",
    fontSize: "15px",
    marginTop: "16px",
  },
  companyName: {
    color: "#3B3B3C",
    fontSize: "18px",
    fontWeight: "bold",
  },
  content: {
    color: "#3B3B3C",
    fontSize: "13px",
    fontWeight: "semibold",
  },

  logoCircle: {
    width: 200,
    height: 200,
  },
});

type PdfCertificationProps = {
  companyName: string;
  companyAddress: string;
  vatNumber: string;
  expirationDate: string;
};

const PdfCertification: React.FC<PdfCertificationProps> = ({
  companyName,
  companyAddress,
  vatNumber,
  expirationDate,
}) => {
  const { t } = useTranslation();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ position: "relative" }}>
          <Svg
            viewBox="0 0 549 788"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Defs>
              <LinearGradient
                id="myLinearGradient"
                x1="-55.6553"
                y1="689.694"
                x2="571.842"
                y2="63.9935"
              >
                <Stop offset="0" stopColor="#FFEEBC" />
                <Stop offset="0.04" stopColor="#280C01" />
                <Stop offset="0.1" stopColor="#FFEEBC" />
                <Stop offset="0.18" stopColor="#8F6B31" />
                <Stop offset="0.25" stopColor="#755A2B" />
                <Stop offset="0.35" stopColor="#D2B277" />
                <Stop offset="0.41" stopColor="#FCFDEF" />
                <Stop offset="0.48" stopColor="#755A2B" />
                <Stop offset="0.55" stopColor="#D2B277" />
                <Stop offset="0.62" stopColor="#755A2B" />
                <Stop offset="0.69" stopColor="#9B7739" />
                <Stop offset="0.74" stopColor="#FCFDEF" />
                <Stop offset="0.87" stopColor="#8F6B31" />
                <Stop offset="0.94" stopColor="#906C32" />
                <Stop offset="1" stopColor="#FFEEBC" />
              </LinearGradient>
            </Defs>
            <Path
              d="M5.25 29.8745L5.25 722.01C5.25 735.265 15.9952 746.01 29.25 746.01H485.148C498.402 746.01 509.148 735.265 509.148 722.01L509.148 29.8745C509.148 16.6197 498.402 5.87451 485.148 5.87451H29.25C15.9952 5.87451 5.25 16.6197 5.25 29.8745Z"
              fill="#FFFFFF"
              fillOpacity="0.83"
              stroke="#8F6B31"
              strokeWidth="10"
            />
          </Svg>
          <View style={styles.container}>
            <View
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "semibold",
                  textAlign: "center",
                  color: "#000000",
                  width: "100%",
                }}
              >
                {t("CertifiedCompany.sections.certificate_data.certificate")}
              </Text>
              <Image src="/assets/images/logo-blue.png" style={styles.logo} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.title}>
                    {t(
                      "CertifiedCompany.sections.certificate_data.company_name",
                    )}
                  </Text>
                  <Text style={styles.companyName}>{companyName}</Text>
                </View>
                <View>
                  <Text style={styles.title}>
                    {t("CertifiedCompany.certification.company_address")}
                  </Text>
                  <Text style={styles.content}>{companyAddress}</Text>
                </View>
                <View>
                  <Text style={styles.title}>
                    {t("CertifiedCompany.sections.certificate_data.vat_number")}
                  </Text>
                  <Text style={styles.content}>{vatNumber}</Text>
                </View>
                <View>
                  <Text style={styles.title}>
                    {t(
                      "CertifiedCompany.certification.certification_valid_until",
                    )}
                  </Text>
                  <Text style={styles.content}>{expirationDate}</Text>
                </View>
                <View>
                  <Text style={styles.title}>
                    {t("CertifiedCompany.certification.certified_by")}
                  </Text>
                  <Text style={styles.content}>FEDERITALY</Text>
                  <Image
                    src="/assets/images/qrcode.png"
                    style={{ marginTop: 32, height: "48px", width: "48px" }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/images/federitaly-certified.png"
                  style={styles.logoCircle}
                />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfCertification;
