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
  "FEDERITALY 100% Made In Italy": string;
  "FEDERITALY 100% Made in Italy": string;
  it: string;
};

type CertificationProcess = {
  language: string;
  content: CertificationProcessContent;
};

type AtecoCode = {
  language: string;
  content: SubTitleClass;
};

type Data = {
  "Certification Platform"?: AtecoCode;
  "Major contributor to the Internet Computer blockchain"?: AtecoCode;
  "Certified Product"?: AtecoCode;
  "Company Name": AtecoCode;
  "Registered Office"?: AtecoCode;
  "Operational HQ & Factory"?: AtecoCode;
  "Other Operating Officers"?: AtecoCode;
  "Phone Numbers"?: AtecoCode;
  Email?: AtecoCode;
  Website?: AtecoCode;
  "Social Media"?: AtecoCode;
  "Pre-Analysis Date with Pass"?: AtecoCode;
  "Pre-Analysis Approval Date / "?: AtecoCode;
  "Certification Access Request Date"?: AtecoCode;
  "Company Audit Date"?: AtecoCode;
  Auditors?: AtecoCode;
  "Certification Issuance Date": AtecoCode;
  "Certification Expiration Date": AtecoCode;
  "Publication of Certificate on Blockchain"?: AtecoCode;
  "ATECO Code"?: AtecoCode;
  "VAT Number"?: AtecoCode;
  "Fiscal Code"?: AtecoCode;
  "Chamber of Commerce Registration"?: AtecoCode;
  "Description of Activities Carried out by the Company"?: AtecoCode;
  "Registration Date"?: AtecoCode;
  "Product Packaging"?: AtecoCode;
  "About Italy is Unique"?: AtecoCode;
  "Certification Process"?: CertificationProcess;
  "files-mainImage": Files[];
  "files-media"?: Files[];
  "files-heroImage"?: string;
  "files-video"?: Files[];
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
};
