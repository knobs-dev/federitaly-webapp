import { type FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { IconClose } from "@components/icons";

type CertificationProps = {
  className?: string;
  companyName: string;
  companyAddress: string;
  vatNumber: string;
  expirationDate: string;
  onClose: () => void;
};

const Certification: FC<CertificationProps> = ({
  className,
  companyName,
  companyAddress,
  vatNumber,
  expirationDate,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className || ""}`}
      viewBox="0 0 343 740"
      fill="none"
    >
      <path
        d="M5.79297 29.3737L5.79297 705.676C5.79297 718.931 16.5381 729.676 29.7929 729.676H313.395C326.65 729.676 337.395 718.931 337.395 705.676L337.395 29.3738C337.395 16.119 326.65 5.37378 313.395 5.37378H29.793C16.5381 5.37378 5.79297 16.1189 5.79297 29.3737Z"
        fill="#EDEDF0"
        fillOpacity="0.83"
        stroke="url(#paint0_linear_129_31683)"
        strokeWidth="10"
        strokeMiterlimit="10"
      />
      <linearGradient
        id="paint0_linear_129_31683"
        x1="-34.2873"
        y1="674.565"
        x2="533.807"
        y2="293.638"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEEBC" />
        <stop offset="0.04" stopColor="#280C01" />
        <stop offset="0.1" stopColor="#FFEEBC" />
        <stop offset="0.18" stopColor="#8F6B31" />
        <stop offset="0.25" stopColor="#755A2B" />
        <stop offset="0.35" stopColor="#D2B277" />
        <stop offset="0.41" stopColor="#FCFDEF" />
        <stop offset="0.48" stopColor="#755A2B" />
        <stop offset="0.55" stopColor="#D2B277" />
        <stop offset="0.62" stopColor="#755A2B" />
        <stop offset="0.69" stopColor="#9B7739" />
        <stop offset="0.74" stopColor="#FCFDEF" />
        <stop offset="0.87" stopColor="#8F6B31" />
        <stop offset="0.94" stopColor="#906C32" />
        <stop offset="1" stopColor="#FFEEBC" />
      </linearGradient>
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div className="pt-16 px-4 w-full h-full relative">
          <div>
            <IconClose
              className="h-6 w-6 fill-[#A9A6A6] absolute top-8 right-8 cursor-pointer"
              onClick={() => onClose()}
            />
          </div>
          <h2 className="text-[1.75rem] font-semibold text-center text-black">
            {t("CertifiedCompany.sections.certificate_data.certificate")}
          </h2>
          <div className="w-full h-[4rem] mt-7 relative">
            <Image src="/assets/images/logo-blue.png" fill alt="logo" />
          </div>
          <div className="w-full h-full flex flex-col pt-4 space-y-3 px-4 relative">
            <span>
              <h2 className="text-[#858686] font-medium text-[15px]">
                {t("CertifiedCompany.certification.company_name")}
              </h2>
              <p className="font-medium text-[#3B3B3C] text-[1.375rem]">
                {companyName}
              </p>
            </span>
            <span>
              <h2 className="text-[#858686] font-medium text-[15px]">
                {t("CertifiedCompany.certification.company_address")}
              </h2>
              <p className="font-semibold text-[#3B3B3C] text-[13px]">
                {companyAddress}
              </p>
            </span>
            <span>
              <h2 className="text-[#858686] font-medium text-[15px]">
                {t("CertifiedCompany.certification.vat_number")}
              </h2>
              <p className="font-semibold text-[#3B3B3C] text-[13px]">
                {vatNumber}
              </p>
            </span>
            <span>
              <h2 className="text-[#858686] font-medium text-[15px]">
                {t("CertifiedCompany.certification.certification_valid_until")}
              </h2>
              <p className="font-semibold text-[#3B3B3C] text-[13px]">
                {expirationDate}
              </p>
            </span>
            <span>
              <h2 className="text-[#858686] font-medium text-[15px]">
                {t("CertifiedCompany.certification.certified_by")}
              </h2>
              <p className="font-semibold text-[#3B3B3C] text-[13px]">
                FEDERITALY
              </p>

              <Image
                src="/assets/images/qrcode.png"
                className="mt-8"
                width={64}
                height={64}
                alt="certificate"
              />
            </span>
            <Image
              src="/assets/images/certificate.png"
              className="self-end absolute top-[17rem]"
              width={159}
              height={187}
              alt="certificate"
            />
            <Image
              src="/assets/images/sign.png"
              className="self-end absolute top-[22rem]"
              width={140}
              height={115}
              alt="certificate"
            />
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};

export default Certification;
