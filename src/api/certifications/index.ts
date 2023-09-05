import { jsonrepair } from "jsonrepair";

import env from "@env";

import type { Certification } from "./types";

export const getCertifiedCompanies = async () => {
  const certifiedCompanies = (await (
    await fetch(`${env.API_ENDPOINT}/collection`)
  ).json()) as string[];

  return certifiedCompanies;
};

export const getCertificationData = async (companyId: string) => {
  const certificationDataJsonString = await (
    await fetch(`${env.API_ENDPOINT}/-/${companyId}/info`)
  ).text();

  const certificationData = JSON.parse(
    jsonrepair(certificationDataJsonString),
  ) as Certification;

  return certificationData;
};
