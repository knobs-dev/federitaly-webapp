"use client";

import type { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { clientT } from "@store/i18n";

type CardProps = {
  profilePhoto: string;
  name: string;
  expirationDate: string;
  className?: string;
};

const Card: FC<CardProps> = ({
  profilePhoto,
  name,
  expirationDate,
  className,
}) => (
  <article
    className={twMerge(
      "h-16 flex items-center justify-between rounded-xl bg-[#3B3B5BE3] px-2 space-x-4",
      className,
    )}
  >
    <Image
      src={profilePhoto}
      width={42}
      height={42}
      alt={`${name} logo`}
      className="h-[2.625rem] w-[2.625rem] shrink-0 rounded-full bg-white object-contain"
    />
    <h3 className="flex-1 text-sm font-medium leading-[0.875rem] text-[#E4E4F0]">
      {name}
    </h3>
    <div className="flex flex-col items-end">
      <h4 className="text-[0.625rem] font-medium uppercase text-[#A5B1EF]">
        {clientT.value?.Common.expiration_date}
      </h4>
      <p className="text-xs font-medium text-[#CACEEA]">{expirationDate}</p>
    </div>
  </article>
);

export default Card;
