import { useEffect, useState, type FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocale, useTranslations } from "@hooks/useTranslations";

import {
  Certification,
  Dialog,
  DialogContent,
  DialogTrigger,
  Slider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components";

import {
  getCertificationData,
  getCertifiedCompanies,
} from "@api/certifications";
import { supportedLocales } from "@constants";
import { formatCertifiedCompanyData } from "@utils";

import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "@icons";

type CertifiedCompaniesContentClientProps = {
  certifiedCompanyDataFormatted: ReturnType<typeof formatCertifiedCompanyData>;
};

const CertifiedCompaniesContentClient: FC<
  CertifiedCompaniesContentClientProps
> = ({
  certifiedCompanyDataFormatted: {
    companyName,
    companyProfilePhoto,
    certifiedProductsImages,
    companyDescription,
    companyVideoPresentation,
    certificationProcess,
    companySocials,
    companyWebsite,
    companyOperationalHeadquarters,
    companyPhoneNumber,
    companyAtecoCode,
    companyChamberOfCommerceRegistration,
    companyRegisteredOffice,
    companyOtherOperationalLocations,
    companyEmail,
    companyVatNumber,
    companyActivitiesDescription,
    certificationExpirationDate,
  },
}) => {
  const socialIconsClass = "w-8 h-8 fill-white";

  const socialsIcons = {
    facebook: <IconFacebook className={socialIconsClass} />,
    instagram: <IconInstagram className={socialIconsClass} />,
    youtube: <IconYoutube className={socialIconsClass} />,
    linkedin: <IconLinkedin className={socialIconsClass} />,
  };

  const t = useTranslations("CertifiedCompany");
  const commonT = useTranslations("Common");

  return (
    <section className="w-full flex flex-1 overflow-hidden">
      <Tabs defaultValue="company" className="mt-4 w-full flex flex-1 flex-col">
        <TabsList>
          <TabsTrigger value="company" className="basis-1/2">
            {t("tabs.the_company")}
          </TabsTrigger>
          <TabsTrigger value="certificate" className="basis-1/2">
            {t("tabs.certificate_data")}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="company"
          className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 pb-32"
        >
          <h2 className="text-base font-bold">
            {t("sections.the_company.registered_products")}
          </h2>
          <div className="mt-2 w-screen -translate-x-4">
            <Slider freeMode>
              {certifiedProductsImages.map((imagePath, index) => (
                <Dialog key={imagePath}>
                  <DialogTrigger asChild>
                    <Image
                      src={imagePath}
                      width={100}
                      height={100}
                      alt=""
                      className={`w-[6.25rem] h-[6.25rem] border-1 border-[#6D6D6D] rounded-2xl ${
                        index === 0 ? "ml-4" : "ml-1.5"
                      } ${
                        index === certifiedProductsImages.length - 1
                          ? "mr-4"
                          : "mr-1.5"
                      }`}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <Image
                      src={imagePath}
                      width={320}
                      height={320}
                      alt=""
                      className="h-80 w-80 rounded-2xl bg-[#555677]"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </Slider>
          </div>
          <h2 className="mt-6 text-base font-bold">
            {t("sections.the_company.company_description")}
          </h2>
          <p className="mt-2 overflow-hidden text-ellipsis text-base font-medium">
            {companyDescription.length > 500
              ? companyDescription.slice(0, 500)
              : companyDescription}
            {companyDescription.length > 500 && (
              <Dialog>
                <DialogTrigger asChild>
                  <span className="ml-2 text-[#A2BBFD]">
                    ...{commonT("see_more")}
                  </span>
                </DialogTrigger>
                <DialogContent className="h-4/5 rounded-md bg-[#212259] text-white">
                  <div className="h-full w-full overflow-y-scroll p-4">
                    <p className="text-base font-medium">
                      {companyDescription}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </p>
          <video
            src={companyVideoPresentation}
            controls
            className="mt-4 aspect-video w-full rounded-3xl"
          />
          <h2 className="mt-6 text-base font-bold">
            {t("sections.the_company.certification_process")}
          </h2>
          <p className="mt-2 overflow-hidden text-ellipsis text-base font-medium">
            {certificationProcess.length > 500
              ? certificationProcess.slice(0, 500)
              : certificationProcess}
            {certificationProcess.length > 500 && (
              <Dialog>
                <DialogTrigger asChild>
                  <span className="ml-2 text-[#A2BBFD]">
                    ...{t("see_more")}
                  </span>
                </DialogTrigger>
                <DialogContent className="h-4/5 rounded-md bg-[#212259] text-white">
                  <div className="h-full w-full overflow-y-scroll p-4">
                    <p className="text-base font-medium">
                      {certificationProcess}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </p>
          <div className="mt-8 flex items-center justify-between">
            <Image
              src={companyProfilePhoto}
              width={64}
              height={64}
              alt={`${companyName} logo`}
              className="h-16 w-16 shrink-0 rounded-md bg-white object-contain"
            />
            <div className="ml-2 flex flex-col justify-center pr-1 space-y-1">
              <h3 className="text-sm font-medium">{companyName}</h3>
              {companyWebsite !== "NA" ? (
                <a
                  href={companyWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium"
                >
                  {companyWebsite}
                </a>
              ) : (
                <p className="text-xs font-medium">{companyWebsite}</p>
              )}
            </div>
            <div className="space-1 ml-auto max-w-[4.75rem] w-full flex flex-wrap justify-between gap-y-3.5">
              {Object.keys(companySocials).map((social) => (
                <a
                  key={social}
                  href={companySocials[social as keyof typeof socialsIcons]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {socialsIcons[social as keyof typeof socialsIcons]}
                </a>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="certificate"
          className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 pb-32"
        >
          <div className="flex">
            <div className="w-1/2 flex flex-col break-words pr-2 space-y-5">
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.company_name")}
                </h2>
                <p className="text-sm font-normal text-white">{companyName}</p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t(
                    "sections.certificate_data.operational_headquarters_and_factory",
                  )}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyOperationalHeadquarters}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.phone_number")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyPhoneNumber}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.website")}
                </h2>
                <a href={companyWebsite} target="_blank" rel="noreferrer">
                  <p className="text-sm font-normal text-white">
                    {companyWebsite}
                  </p>
                </a>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.ateco_code")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyAtecoCode}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t(
                    "sections.certificate_data.chamber_of_commerce_registration",
                  )}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyChamberOfCommerceRegistration}
                </p>
              </span>
            </div>
            <div className="relative w-1/2 flex flex-col break-words pl-2 text-right space-y-5">
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.registered_office")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyRegisteredOffice}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.other_operational_locations")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyOtherOperationalLocations}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.email")}
                </h2>
                <p className="text-sm font-normal text-white">{companyEmail}</p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.social_media")}
                </h2>
                {Object.keys(companySocials).length > 0 ? (
                  <div className="mt-0.5 w-full flex flex-wrap justify-end gap-3.5">
                    {Object.keys(companySocials).map((social) => (
                      <a
                        key={social}
                        href={
                          companySocials[social as keyof typeof socialsIcons]
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {socialsIcons[social as keyof typeof socialsIcons]}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-normal text-white">NA</p>
                )}
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.vat_number")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyVatNumber}
                </p>
              </span>
              <span>
                <h2 className="text-sm font-normal text-[#BAB5B5]">
                  {t("sections.certificate_data.activities_description")}
                </h2>
                <p className="text-sm font-normal text-white">
                  {companyActivitiesDescription.length > 200
                    ? companyActivitiesDescription.slice(0, 200)
                    : companyActivitiesDescription}
                  {companyActivitiesDescription.length > 200 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="ml-2 text-[#A2BBFD]">
                          ...{commonT("see_more")}
                        </span>
                      </DialogTrigger>
                      <DialogContent className="h-4/5 rounded-md bg-[#212259] text-white">
                        <div className="h-full w-full overflow-y-scroll p-4">
                          <p className="text-base font-medium">
                            {companyActivitiesDescription}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </p>
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Dialog>
        <DialogTrigger asChild>
          <div className="fixed bottom-0 left-0 h-16 w-full flex items-center justify-center">
            <div className="from-0 pointer-events-none fixed bottom-0 h-[10.75rem] w-screen rounded-t-[2rem] from-[#16172E00] to-[#0F101B] to-67% bg-gradient-to-b" />
            <button
              type="button"
              className="z-2 h-[2.8125rem] w-[calc(100vw-2rem)] rounded-xl from-[#2563EB] to-[#3A4D78] bg-gradient-to-b px-6 text-lg font-bold text-white"
            >
              {t("show_certification")}
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="h-4/5 rounded-3xl">
          <Certification
            className="w-full"
            companyName={companyName}
            companyAddress={companyRegisteredOffice}
            vatNumber={companyVatNumber}
            expirationDate={certificationExpirationDate}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

async function fetchCertifiedCompany(id: string, locale: string) {
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
}

type CertifiedCompanyContentProps = {};

const CertifiedCompany: FC<CertifiedCompanyContentProps> = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const t = useTranslations("CertifiedCompany");
  const locale = useLocale();

  const [certifiedCompanyDataFormatted, setCertifiedCompanyDataFormatted] =
    useState<ReturnType<typeof formatCertifiedCompanyData>>();

  useEffect(() => {
    fetchCertifiedCompany(id, locale)
      .then((data) => {
        setCertifiedCompanyDataFormatted(data);
      })
      .catch((err) => console.error("fetchErr", err));
  }, [locale, id]);

  return (
    <div className="absolute left-0 top-0 h-full w-screen flex flex-1 flex-col">
      {certifiedCompanyDataFormatted && (
        <>
          <header className="flex items-center px-4">
            <Image
              src={certifiedCompanyDataFormatted.companyProfilePhoto}
              width={80}
              height={80}
              alt={`${certifiedCompanyDataFormatted.companyName} logo`}
              className="h-20 w-20 shrink-0 rounded-full bg-white object-contain"
            />
            <div className="ml-4 flex flex-col">
              <h2 className="text-lg font-medium">
                {certifiedCompanyDataFormatted.companyName}
              </h2>
              <h3 className="mt-2.5 text-sm font-medium">
                {t("certification_date")}
              </h3>
              <p className="text-base font-medium text-[#95AEED]">
                {certifiedCompanyDataFormatted.certificationReleaseDate}
              </p>
            </div>
          </header>
          <CertifiedCompaniesContentClient
            certifiedCompanyDataFormatted={certifiedCompanyDataFormatted}
          />
        </>
      )}
    </div>
  );
};

export default CertifiedCompany;
