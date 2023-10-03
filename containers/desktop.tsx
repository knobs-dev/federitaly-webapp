import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Card } from "@components";
import HeaderDesktop from "@components/HeaderDesktop";

import { formatCertifiedCompaniesData } from "@utils";

type HomeDesktopProps = {
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >;
};

const HomeDesktop: FC<HomeDesktopProps> = ({
  certifiedCompaniesDataFormatted,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="relative pb-12">
      <div className="absolute top-0 left-0 h-[100%] w-[70%] z-0">
        <Image
          src="/assets/images/blue-circle.png"
          alt="banner"
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 right-0 h-[100%] w-[70%] z-0">
        <Image
          src="/assets/images/campagna_italiana.png"
          alt="banner"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <HeaderDesktop />
        <section className="relative container mx-auto grid grid-cols-12">
          <div className="col-span-8">
            <h1 className="text-[3.75rem] text-[#222] font-semibold">
              {t("Home.slides.0.title")}
            </h1>
            <p className="text-[1.125rem] text-[#222] font-medium">
              {t("Home.slides.0.body")}
            </p>
            <p className="text-[1.125rem] text-[#222] font-medium mt-4">
              {t("Home.slides.0.body2")}
            </p>
            <div className="flex justify-start items-center mt-[2.56rem] space-x-4">
              <button
                type="button"
                className="bg-[#6379C8] text-center text-white rounded-[1rem] p-[0.8rem] text-[1.125rem] font-semibold"
                onClick={() => router.push("/contacts")}
              >
                {t("Home.slides.0.action")}
              </button>
              <button
                type="button"
                className="bg-white border border-[#6379C8] text-center text-[#6379C8] rounded-[1rem] p-[0.8rem] text-[1.125rem] font-semibold"
                onClick={() => router.push("/the-certification")}
              >
                {t("Home.slides.1.action")}
              </button>
              <button
                type="button"
                className="bg-white border border-[#6379C8] flex justify-center items-center relative rounded-[1rem] p-[0.8rem] text-[1.125rem] font-semibold"
                onClick={() => router.push("/the-certification")}
              >
                <Image
                  src="/assets/images/logo-blue.png"
                  alt="logo blue"
                  height={20}
                  width={140}
                />
              </button>
            </div>
            <div className="mt-[3.44rem] text-[1.5rem] font-medium text-[#0A1A36]">
              {t("Common.header_titles.certified_companies")}
            </div>
          </div>
          <div className="col-span-4 flex justify-end items-center relative">
            <Image
              src="/assets/images/federitaly-certified.png"
              alt="federitaly cert"
              width={320}
              height={320}
              className="opacity-30"
            />
          </div>
        </section>
        <section className="bg-[#F2F4F4] z-10 relative">
          <div className="container mx-auto grid grid-cols-12 py-6">
            <div className="col-span-full flex justify-start items-start space-x-8">
              {certifiedCompaniesDataFormatted &&
                certifiedCompaniesDataFormatted.length > 0 &&
                certifiedCompaniesDataFormatted.map(
                  ({
                    id,
                    companyProfilePhoto,
                    companyName,
                    certificationExpirationDate,
                    certificationReleaseDate,
                  }) => (
                    <Link
                      key={id}
                      href={`/certified-company?id=${id}`}
                      className="block"
                    >
                      <div className="rounded-[1.25rem] bg-white p-4">
                        <div className="flex justify-start items-center w-[18rem] space-x-4">
                          <Image
                            src={companyProfilePhoto}
                            width={96}
                            height={96}
                            alt={`${companyName} logo`}
                            className="h-[6rem] w-[6rem] shrink-0 rounded-full bg-white object-contain"
                          />
                          <h3 className="text-[0.8rem] font-medium text-[#656579]">
                            {companyName}
                          </h3>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h4 className="text-[0.625rem] text-[#454857] font-medium">
                              {t("Common.release_desktop")}
                            </h4>
                            <h4 className="text-[0.75rem] text-[#9496A3] font-medium">
                              {certificationReleaseDate}
                            </h4>
                          </div>
                          <div>
                            <h4 className="text-[0.625rem] text-[#454857] font-medium">
                              {t("Common.expiration_desktop")}
                            </h4>
                            <h4 className="text-[0.75rem] text-[#9496A3] font-medium">
                              {certificationExpirationDate}
                            </h4>
                          </div>
                        </div>
                      </div>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeDesktop;
