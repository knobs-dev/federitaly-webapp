export type Translations = (typeof import("../locales/en.json"))["translation"];

export type SortByCertifiedCompanies =
  | "most-recent"
  | "least-recent"
  | "most-recent-expiration-date"
  | "least-recent-expiration-date";
