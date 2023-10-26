import { useState, type FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocale } from "@hooks/useTranslations";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { fetchCertifiedCompany } from "utils/api";
import { generateAndSavePdf } from "utils/utils";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Slider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components";
import HeaderDesktop from "@components/HeaderDesktop";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconYoutube,
} from "@components/icons";

import { extractWebsites } from "@utils";

type CertifiedCompanyDesktopProps = {};

const CertifiedCompanyDesktop: FC<CertifiedCompanyDesktopProps> = () => {
  const [showCert, setShowCert] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  const { t } = useTranslation();

  const router = useRouter();
  const id = router.query.id as string;

  const locale = useLocale();

  const { data: certifiedCompanyDataFormatted } = useQuery(
    ["certifiedCompany", id, locale],
    fetchCertifiedCompany,
  );

  const websiteUrls = certifiedCompanyDataFormatted
    ? extractWebsites(certifiedCompanyDataFormatted?.companyWebsite)
    : [];

  const socialIconsClass = "w-8 h-8 fill-white";
  const socialsIcons = {
    facebook: <IconFacebook className={socialIconsClass} />,
    instagram: <IconInstagram className={socialIconsClass} />,
    youtube: <IconYoutube className={socialIconsClass} />,
    linkedin: <IconLinkedin className={socialIconsClass} />,
  };
  return (
    <div className="relative pb-24">
      <HeaderDesktop title={certifiedCompanyDataFormatted?.companyName} />
      {certifiedCompanyDataFormatted && (
        <section className="relative container mx-auto grid grid-cols-12 mt-20">
          <div className="col-span-full bg-[#F1F1F1] rounded-[1.5rem] p-6 flex justify-start items-center">
            <div className="relative w-[8rem] h-[8rem]">
              <Image
                src={certifiedCompanyDataFormatted.companyProfilePhoto}
                fill
                objectFit="contain"
                alt="company profile photo"
              />
            </div>
            <div className="flex justify-start items-start flex-col w-full ml-4">
              <div>
                <h3 className="text-[1rem] text-[#474C5F]">
                  {t("CertifiedCompany.certification.company_name")}
                </h3>
                <h2 className="text-[2rem] text-[#474C5F] font-semibold">
                  {certifiedCompanyDataFormatted.companyName}
                </h2>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center space-x-24">
                  <div>
                    <h3 className="text-[1rem] text-[#474C5F]">
                      {t("CertifiedCompany.certification.release")}
                    </h3>
                    <h2 className="text-[1.5rem] text-[#474C5F] font-semibold">
                      {certifiedCompanyDataFormatted.certificationReleaseDate}
                    </h2>
                  </div>
                  <div>
                    <h3 className="text-[1rem] text-[#474C5F]">
                      {t("CertifiedCompany.certification.expiration")}
                    </h3>
                    <h2 className="text-[1.5rem] text-[#474C5F] font-semibold">
                      {
                        certifiedCompanyDataFormatted.certificationExpirationDate
                      }
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  className="z-2 h-[2.8125rem] rounded-xl from-[#2563EB] to-[#3A4D78] bg-gradient-to-b px-6 text-lg font-bold text-white z-20"
                  onClick={() =>
                    generateAndSavePdf(
                      certifiedCompanyDataFormatted.companyName,
                      certifiedCompanyDataFormatted.companyRegisteredOffice,
                      certifiedCompanyDataFormatted.companyVatNumber,
                      certifiedCompanyDataFormatted.certificationReleaseDate,
                      certifiedCompanyDataFormatted.certificationExpirationDate,
                    )
                  }
                >
                  {t("CertifiedCompany.show_certification")}
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <Tabs
              defaultValue="company"
              className="mt-4 w-full flex flex-1 flex-col"
            >
              <TabsList>
                <TabsTrigger value="company" className="basis-1/2">
                  {t("CertifiedCompany.tabs.the_company")}
                </TabsTrigger>
                <TabsTrigger value="certificate" className="basis-1/2">
                  {t("CertifiedCompany.tabs.certificate_data")}
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="company"
                className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 pb-48"
              >
                <h2 className="text-[1.5rem] font-semibold text-[#0A1A36]">
                  {t(
                    "CertifiedCompany.sections.the_company.registered_products",
                  )}
                </h2>
                <div className="mt-2 w-screen -translate-x-4">
                  <Slider freeMode>
                    {certifiedCompanyDataFormatted.certifiedProductsImages.map(
                      (imagePath, index) => (
                        <Dialog key={imagePath}>
                          <DialogTrigger asChild>
                            <div className="h-[20rem] w-[20rem] relative cursor-pointer mx-2">
                              <Image
                                src={imagePath}
                                fill
                                alt=""
                                className="w-[6.25rem] h-[6.25rem] border-1 border-[#6D6D6D] rounded-2xl"
                              />
                            </div>
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
                      ),
                    )}
                  </Slider>
                </div>
                <h2 className="mt-6 text-[1.5rem] font-semibold text-[#0A1A36]">
                  {t(
                    "CertifiedCompany.sections.the_company.company_description",
                  )}
                </h2>

                <p className="mt-2 text-[1rem] font-medium text-[#615E5E]">
                  {!showMoreDescription
                    ? certifiedCompanyDataFormatted.companyDescription.slice(
                        0,
                        500,
                      )
                    : certifiedCompanyDataFormatted.companyDescription}
                  {certifiedCompanyDataFormatted.companyDescription.length >
                    500 && (
                    <span
                      className="ml-2 text-[#3D67D6] text-[1rem] cursor-pointer"
                      onClick={() =>
                        setShowMoreDescription(!showMoreDescription)
                      }
                      role="button"
                      tabIndex={0}
                      aria-hidden
                    >
                      ...
                      {t(
                        showMoreDescription
                          ? "Common.see_less"
                          : "Common.see_more",
                      )}
                    </span>
                  )}
                </p>
                <video
                  controls
                  className="mt-8 aspect-video w-full rounded-3xl bg-black"
                  preload="metadata"
                >
                  <source
                    src={`${certifiedCompanyDataFormatted.companyVideoPresentation}#t=0.5`}
                    type="video/mp4"
                  />
                </video>
                <h2 className="mt-8 text-[1.5rem] font-semibold text-[#0A1A36]">
                  {t(
                    "CertifiedCompany.sections.the_company.certification_process",
                  )}
                </h2>
                <p className="mt-2 text-[1rem] font-medium text-[#615E5E]">
                  {certifiedCompanyDataFormatted.certificationProcess}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <Image
                    src={certifiedCompanyDataFormatted.companyProfilePhoto}
                    width={64}
                    height={64}
                    alt={`${certifiedCompanyDataFormatted.companyName} logo`}
                    className="h-16 w-16 shrink-0 rounded-md bg-white object-contain"
                  />
                  <div className="ml-2 flex flex-col justify-center pr-1 space-y-1">
                    <h3 className="text-sm font-medium">
                      {certifiedCompanyDataFormatted.companyName}
                    </h3>
                    {websiteUrls.length > 0 ? (
                      websiteUrls.map((url) => (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium"
                        >
                          {url}
                        </a>
                      ))
                    ) : (
                      <p className="text-xs font-medium">NA</p>
                    )}
                  </div>
                  <div className="space-1 ml-auto w-full flex justify-end space-x-4">
                    {Object.keys(
                      certifiedCompanyDataFormatted.companySocials,
                    ).map((social) => (
                      <a
                        key={social}
                        href={
                          certifiedCompanyDataFormatted.companySocials[
                            social as keyof typeof socialsIcons
                          ]
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 bg-black rounded-full flex justify-center items-center"
                      >
                        {socialsIcons[social as keyof typeof socialsIcons]}
                      </a>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="certificate"
                className="flex-1 overflow-x-hidden overflow-y-auto px-4 pt-8 pb-48"
              >
                <div className="w-full flex flex-col break-words pr-2 space-y-5">
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.company_name",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyName}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.operational_headquarters_and_factory",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {
                        certifiedCompanyDataFormatted.companyOperationalHeadquarters
                      }
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.phone_number",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyPhoneNumber}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t("CertifiedCompany.sections.certificate_data.website")}
                    </h2>
                    <a
                      href={certifiedCompanyDataFormatted.companyWebsite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-[1rem] font-medium text-black">
                        {certifiedCompanyDataFormatted.companyWebsite}
                      </p>
                    </a>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.ateco_code",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyAtecoCode}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.chamber_of_commerce_registration",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {
                        certifiedCompanyDataFormatted.companyChamberOfCommerceRegistration
                      }
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.registered_office",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyRegisteredOffice}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.other_operational_locations",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {
                        certifiedCompanyDataFormatted.companyOtherOperationalLocations
                      }
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t("CertifiedCompany.sections.certificate_data.email")}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyEmail}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.social_media",
                      )}
                    </h2>
                    {Object.keys(certifiedCompanyDataFormatted.companySocials)
                      .length > 0 ? (
                      <div className="mt-0.5 w-full flex justify-start space-x-4">
                        {Object.keys(
                          certifiedCompanyDataFormatted.companySocials,
                        ).map((social) => (
                          <a
                            key={social}
                            href={
                              certifiedCompanyDataFormatted.companySocials[
                                social as keyof typeof socialsIcons
                              ]
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 bg-black rounded-full flex justify-center items-center"
                          >
                            {socialsIcons[social as keyof typeof socialsIcons]}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[1rem] font-medium text-black">NA</p>
                    )}
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.vat_number",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted.companyVatNumber}
                    </p>
                  </span>
                  <span>
                    <h2 className="text-[1rem] text-[#615E5E]">
                      {t(
                        "CertifiedCompany.sections.certificate_data.activities_description",
                      )}
                    </h2>
                    <p className="text-[1rem] font-medium text-black">
                      {certifiedCompanyDataFormatted
                        .companyActivitiesDescription.length > 200
                        ? certifiedCompanyDataFormatted.companyActivitiesDescription.slice(
                            0,
                            200,
                          )
                        : certifiedCompanyDataFormatted.companyActivitiesDescription}
                      {certifiedCompanyDataFormatted
                        .companyActivitiesDescription.length > 200 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <span className="ml-2 text-[#A2BBFD]">
                              ...{t("Common.see_more")}
                            </span>
                          </DialogTrigger>
                          <DialogContent className="h-4/5 rounded-md bg-[#212259] text-white">
                            <div className="h-full w-full overflow-y-scroll p-4">
                              <p className="text-base font-medium">
                                {
                                  certifiedCompanyDataFormatted.companyActivitiesDescription
                                }
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </p>
                  </span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}
    </div>
  );
};

export default CertifiedCompanyDesktop;
