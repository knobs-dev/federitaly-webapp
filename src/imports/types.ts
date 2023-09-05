export type Translations = typeof import("../../messages/en.json");

export type SortByCertifiedCompanies =
  | "most-recent"
  | "least-recent"
  | "most-recent-expiration-date"
  | "least-recent-expiration-date";
