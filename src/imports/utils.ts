import type {
  Certification,
  LanguageContentObject,
} from "@api/certifications/types";
import { supportedLocales } from "@constants";

import type { SortByCertifiedCompanies } from "@types";

export const extractUrlFromCompanySocialJson = (
  json: LanguageContentObject,
) => {
  const companySocialFacebookRegex = /(https?:\/\/www\.facebook\.com\/[^\s]+)/g;
  const companySocialInstagramRegex =
    /(https?:\/\/www\.instagram\.com\/[^\s]+)/g;
  const companySocialYoutubeRegex = /(https?:\/\/www\.youtube\.com\/[^\s]+)/g;
  const companySocialLinkedinRegex = /(https?:\/\/www\.linkedin\.com\/[^\s]+)/g;

  let result = {};

  for (const key in json.content) {
    const str = json.content[key as "en" | "it"];

    const facebookUrls = str.match(companySocialFacebookRegex);

    if (facebookUrls && facebookUrls.length > 0) {
      result = { ...result, facebook: facebookUrls[0] };
    }

    const instagramUrls = str.match(companySocialInstagramRegex);

    if (instagramUrls && instagramUrls.length > 0) {
      result = { ...result, instagram: instagramUrls[0] };
    }

    const youtubeUrls = str.match(companySocialYoutubeRegex);

    if (youtubeUrls && youtubeUrls.length > 0) {
      result = { ...result, youtube: youtubeUrls[0] };
    }

    const linkedinUrls = str.match(companySocialLinkedinRegex);

    if (linkedinUrls && linkedinUrls.length > 0) {
      result = { ...result, linkedin: linkedinUrls[0] };
    }
  }

  return result as {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
};

export const formatCertifiedCompanyData = (
  companyData: Certification,
  locale: (typeof supportedLocales)[number],
) => {
  const mainImagePath = companyData.__apps[0].data["files-mainImage"][0].path;
  const videoPresentationPath =
    companyData.__apps[0].data["files-video"][0]?.path;

  return {
    id: companyData.id,
    companyName: companyData.__apps[0].data["Company Name"].content[locale],
    certificationExpirationDate: new Date(
      companyData.__apps[0].data["Certification Expiration Date"].content.date,
    ).toLocaleDateString(),
    certificationExpirationDateFormatted: new Date(
      companyData.__apps[0].data["Certification Expiration Date"].content.date,
    ),
    certificationReleaseDate: new Date(
      companyData.__apps[0].data["Certification Issuance Date"].content.date,
    ).toLocaleDateString(),
    certificationReleaseDateFormatted: new Date(
      companyData.__apps[0].data["Certification Issuance Date"].content.date,
    ),
    companyProfilePhoto: companyData.library.find(
      (resource) => resource.library_id === mainImagePath,
    )!.location,
    certifiedProductsImages: companyData.__apps[0].data["files-media"].map(
      ({ path }) =>
        companyData.library.find(({ library_id }) => library_id === path)!
          .location,
    ),
    companyDescription:
      companyData.__apps[0].data["About Italy is Unique"].content[locale],
    companyVideoPresentation: companyData.library.find(
      (resource) => resource.library_id === videoPresentationPath,
    )!.location,
    certificationProcess: companyData.certificationProcess[locale],
    companySocials: extractUrlFromCompanySocialJson(
      companyData.__apps[0].data["Social Media"],
    ),
    companyWebsite: companyData.__apps[0].data.Website.content[locale],
    companyOperationalHeadquarters:
      companyData.__apps[0].data["Operational HQ & Factory"].content[locale],
    companyPhoneNumber:
      companyData.__apps[0].data["Phone Numbers"].content[locale],
    companyAtecoCode: companyData.__apps[0].data["ATECO Code"].content[locale],
    companyChamberOfCommerceRegistration:
      companyData.__apps[0].data["Chamber of Commerce Registration"].content[
        locale
      ],
    companyRegisteredOffice:
      companyData.__apps[0].data["Registered Office"].content[locale],
    companyOtherOperationalLocations:
      companyData.__apps[0].data["Other Operating Officers"].content[locale],
    companyEmail: companyData.__apps[0].data.Email.content[locale],
    companyVatNumber: companyData.__apps[0].data["VAT Number"].content[locale],
    companyActivitiesDescription:
      companyData.__apps[0].data[
        "Description of Activities Carried out by the Company"
      ].content[locale],
  };
};

export const formatCertifiedCompaniesData = (
  companiesData: Certification[],
  locale: (typeof supportedLocales)[number],
) =>
  companiesData.map((companyData) =>
    formatCertifiedCompanyData(companyData, locale),
  );

export const filterCertifiedCompaniesFormattedBy = (
  sortBy: SortByCertifiedCompanies,
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >,
) => {
  if (sortBy === "most-recent") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationReleaseDateFormatted >
        b.certificationReleaseDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationReleaseDateFormatted <
        b.certificationReleaseDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "least-recent") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationReleaseDateFormatted <
        b.certificationReleaseDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationReleaseDateFormatted >
        b.certificationReleaseDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "most-recent-expiration-date") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationExpirationDateFormatted >
        b.certificationExpirationDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationExpirationDateFormatted <
        b.certificationExpirationDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "least-recent-expiration-date") {
    return certifiedCompaniesDataFormatted.sort((a, b) => {
      if (
        a.certificationExpirationDateFormatted <
        b.certificationExpirationDateFormatted
      ) {
        return -1;
      }

      if (
        a.certificationExpirationDateFormatted >
        b.certificationExpirationDateFormatted
      ) {
        return 1;
      }

      return 0;
    });
  }

  return certifiedCompaniesDataFormatted;
};

export const getCompanyCertificationProcessFromJsonString = (
  jsonString: string,
) => {
  // prettier-ignore
  const startDelimiter = "\"Certification Process\":{\"language\":\"true\",\"content\":{\"en\":\"";
  // prettier-ignore
  const endDelimiter = "\",\"it\":\"";

  const startIndex = jsonString.indexOf(startDelimiter) + startDelimiter.length;
  const endIndex = jsonString.indexOf(endDelimiter, startIndex);
  const contentJson = jsonString.substring(startIndex, endIndex);

  const itStartIndex = endIndex + endDelimiter.length;
  // prettier-ignore
  const itEndIndex = jsonString.indexOf("\"}}", itStartIndex);

  const en = contentJson;
  const it = jsonString.substring(itStartIndex, itEndIndex);

  return {
    en,
    it,
  };
};

export function blacklistFilter(blacklist: { [key: string]: boolean } = {}) {
  return (key: string) => !blacklist[key];
}
