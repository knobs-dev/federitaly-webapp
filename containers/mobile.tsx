import { type FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Card, Slider } from "@components";
import { IconArrowRight } from "@components/icons";
import Link from "@components/RetainQueryLink";

import { formatCertifiedCompaniesData } from "@utils";

type THomeMobile = {
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >;
};

const HomeMobile: FC<THomeMobile> = ({ certifiedCompaniesDataFormatted }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative min-h-[22rem] flex-1">
        <div className="absolute left-0 top-0 h-full w-[calc(100%+2rem)] -translate-x-4">
          <Slider withPagination paginationClassName="px-4">
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold">
                {t("Home.slides.0.title")}
              </h2>
              <div className="mt-2 flex">
                <p className="text-base font-medium">
                  <span className="float-shape-image-certified float-right h-full flex items-end">
                    <Image
                      src="/assets/images/federitaly-certified.png"
                      width={135}
                      height={135}
                      alt="FederItaly certified stamp"
                      className="translate-y-20"
                      priority
                    />
                  </span>
                  {t("Home.slides.0.body")}
                </p>
              </div>
              <Link href="/contacts" className="button mt-8 inline-block">
                {t("Home.slides.0.action")}
              </Link>
            </div>
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold">{t("slides.1.title")}</h2>
              <div className="relative mt-2">
                <p className="whitespace-pre-line text-base font-medium">
                  {t("Home.slides.1.body")}
                </p>
                <Image
                  src="/assets/images/federitaly-identity.png"
                  width={172}
                  height={172}
                  alt="FederItaly identity"
                  className="absolute bottom-0 right-0 translate-y-2/4"
                />
              </div>
              <Link
                href="/the-certification"
                className="button mt-8 inline-block"
              >
                {t("Home.slides.1.action")}
              </Link>
            </div>
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold">{t("slides.2.title")}</h2>
              <div className="mt-2 flex">
                <p className="text-base font-medium">
                  <span className="float-shape-image-blockchain float-right ml-4 mt-12 h-full flex flex-col justify-center">
                    <Image
                      src="/assets/images/federitaly-blockchain.png"
                      width={140}
                      height={140}
                      alt="FederItaly blockchain"
                    />
                  </span>
                  {t("Home.slides.2.body")}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="pt-8">
        <header className="flex items-center justify-between">
          <h2 className="text-base font-semibold">
            {t("Home.certifications_section.title")}
          </h2>
          <Link
            href="/certified-companies"
            className="flex translate-x-2 p-2 text-xs font-medium"
          >
            {t("Home.certifications_section.show_all")}
            <IconArrowRight className="ml-2 w-2 fill-white" />
          </Link>
        </header>
        <div className="mt-2 space-y-1.5">
          {certifiedCompaniesDataFormatted &&
            certifiedCompaniesDataFormatted.length > 0 &&
            certifiedCompaniesDataFormatted.map(
              ({
                id,
                companyProfilePhoto,
                companyName,
                certificationExpirationDate,
              }) => (
                <Link
                  key={id}
                  href={`/certified-company/${id}`}
                  className="block"
                >
                  <Card
                    profilePhoto={companyProfilePhoto}
                    name={companyName}
                    expirationDate={certificationExpirationDate}
                  />
                </Link>
              ),
            )}
          {certifiedCompaniesDataFormatted &&
            certifiedCompaniesDataFormatted.length === 0 && (
              <p className="py-16 text-center text-sm">
                {t("Common.no_certified_companies")}
              </p>
            )}
        </div>
      </section>
    </>
  );
};

export default HomeMobile;
