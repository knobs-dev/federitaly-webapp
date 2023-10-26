type Library = {
  library_id: string;
  title: string;
  filename: string;
  location_type: string;
  location: string;
  content_type: string;
  content_hash: string;
  created_at: Date;
  size: number;
  sort: string;
  read: string;
  "com.origyn.dapps.version"?: string;
};

type System = {
  status: string;
  "com.origyn.physical": string;
  "com.origyn.royalties.primary": any[];
  "com.origyn.royalties.secondary": any[];
  "com.origyn.node": string;
  "com.origyn.originator": string;
};

type Permissions = {
  type: string;
  list: string[];
};

type SubTitleClass = {
  en: string;
  it: string;
};

type FluffyContent = {
  type: string;
  title?: SubTitleClass;
  id: string;
  fields?: string[];
  libId?: string;
};

type UserViewTemplateContent = {
  type: string;
  id: string;
  content: FluffyContent[];
};

type Columns = {
  smColumns: string;
  columns: string;
};

type UserViewTemplate = {
  id: string;
  type: string;
  columns: Columns;
  content: UserViewTemplateContent[];
};

type Language = {
  key: string;
  name: string;
};

type Field = {
  name: string;
  inputType: string;
  label: SubTitleClass;
  type: string;
  pointer?: string;
  immutable: string;
};

type FormTemplate = {
  fields: Field[];
  subTitle: SubTitleClass;
  title: SubTitleClass;
  name: string;
  type: string;
};

type Files = {
  id: string;
  path: string;
};

type PurpleContent = {
  type: string;
  className?: string;
  text?: SubTitleClass;
  id: string;
  libId?: string;
  title?: SubTitleClass;
  fields?: string[];
  pointer?: string;
  field?: string;
};

type CertificateTemplateContent = {
  type: string;
  id: string;
  content: PurpleContent[];
};

type Template = {
  id: string;
  type: string;
  columns: Columns;
  content: CertificateTemplateContent[];
};

type CertificationProcessContent = {
  en: string;
  it: string;
};

type CertificationProcess = {
  language: string;
  content: CertificationProcessContent;
};

export type LanguageContentObject = {
  language: string;
  content: SubTitleClass;
};

export type DateContentObject = {
  language: string;
  content: {
    date: number;
  };
};

type Data = {
  "Certification Platform"?: LanguageContentObject;
  "Major contributor to the Internet Computer blockchain"?: LanguageContentObject;
  "Certified Product"?: LanguageContentObject;
  "Company Name": LanguageContentObject;
  "Registered Office": LanguageContentObject;
  "Operational HQ & Factory": LanguageContentObject;
  "Other Operating Officers": LanguageContentObject;
  "Phone Numbers": LanguageContentObject;
  Email: LanguageContentObject;
  Website: LanguageContentObject;
  "Social Media": LanguageContentObject;
  "Pre-Analysis Date with Pass"?: LanguageContentObject;
  "Pre-Analysis Approval Date / "?: LanguageContentObject;
  "Certification Access Request Date"?: LanguageContentObject;
  "Company Audit Date"?: LanguageContentObject;
  Auditors?: LanguageContentObject;
  "Certification Issuance Date": DateContentObject;
  "Certification Expiration Date": DateContentObject;
  "Publication of Certificate on Blockchain"?: LanguageContentObject;
  "ATECO Code": LanguageContentObject;
  "VAT Number": LanguageContentObject;
  "Fiscal Code"?: LanguageContentObject;
  "Chamber of Commerce Registration": LanguageContentObject;
  "Description of Activities Carried out by the Company": LanguageContentObject;
  "Registration Date"?: LanguageContentObject;
  "Product Packaging"?: LanguageContentObject;
  "About Italy is Unique": LanguageContentObject;
  "Certification Process": CertificationProcess;
  "files-mainImage": Files[];
  "files-media": Files[];
  "files-heroImage"?: string;
  "files-video": Files[];
  formTemplate?: FormTemplate[];
  languages?: Language[];
  template?: Template[];
  userViewTemplate?: UserViewTemplate[];
  certificateTemplate?: Template[];
  searchField?: string;
};

type App = {
  app_id: string;
  read: string;
  write: Permissions;
  permissions: Permissions;
  data: Data;
};

export type Certification = {
  id: string;
  __apps: App[];
  library: Library[];
  "com.origyn.physical": string;
  preview_asset: string;
  __system: System;
  owner: string;
  certificationProcess: { en: string; it: string };
};
