import type { FC } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";

import { Card, Slider } from "@components";

import {
  getCertificationData,
  getCertifiedCompanies,
} from "@api/certifications";
import { supportedLocales } from "@constants";
import { formatCertifiedCompaniesData } from "@utils";

import { IconArrowRight } from "@icons";

type HomeContentProps = {
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >;
};

const HomeContent: FC<HomeContentProps> = ({
  certifiedCompaniesDataFormatted,
}) => {
  const t = useTranslations("Home");
  const commonT = useTranslations("Common");

  return (
    <>
      <section className="relative min-h-[22rem] flex-1">
        <div className="absolute left-0 top-0 h-full w-[calc(100%+2rem)] -translate-x-4">
          <Slider paginationClassName="px-4">
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold">{t("slides.0.title")}</h2>
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
                  {t("slides.0.body")}
                </p>
              </div>
              <Link href="/" className="button mt-8 inline-block">
                {t("slides.0.action")}
              </Link>
            </div>
            <div className="px-4 py-2">
              <h2 className="text-xl font-semibold">{t("slides.1.title")}</h2>
              <div className="relative mt-2">
                <p className="whitespace-pre-line text-base font-medium">
                  {t("slides.1.body")}
                </p>
                <Image
                  src="/assets/images/federitaly-identity.png"
                  width={172}
                  height={172}
                  alt="FederItaly identity"
                  className="absolute bottom-0 right-0 translate-y-2/4"
                />
              </div>
              <Link href="/" className="button mt-8 inline-block">
                {t("slides.1.action")}
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
                  {t("slides.2.body")}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="pt-8">
        <header className="flex items-center justify-between">
          <h2 className="text-base font-semibold">
            {t("certifications_section.title")}
          </h2>
          <Link
            href="/certified-companies"
            className="flex translate-x-2 p-2 text-xs font-medium"
          >
            {t("certifications_section.show_all")}
            <IconArrowRight className="ml-2 w-2 fill-white" />
          </Link>
        </header>
        <div className="mt-2 space-y-1.5">
          {certifiedCompaniesDataFormatted.length > 0 &&
            certifiedCompaniesDataFormatted.map(
              ({
                companyProfilePhoto,
                companyName,
                certificationExpirationDate,
              }) => (
                <Card
                  key={companyName}
                  profilePhoto={companyProfilePhoto}
                  name={companyName}
                  expirationDate={certificationExpirationDate}
                />
              ),
            )}
          {certifiedCompaniesDataFormatted.length === 0 && (
            <p className="py-16 text-center text-sm">
              {commonT("no_certified_companies")}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

const Home = async () => {
  const locale = useLocale();

  const certifiedCompanies = await getCertifiedCompanies();
  const certifiedCompaniesData = await Promise.all(
    certifiedCompanies.map((company) => getCertificationData(company)),
  );
  const certifiedCompaniesDataFormatted = formatCertifiedCompaniesData(
    certifiedCompaniesData,
    locale as (typeof supportedLocales)[number],
  );

  return (
    <HomeContent
      certifiedCompaniesDataFormatted={certifiedCompaniesDataFormatted}
    />
  );
};

export default Home;
