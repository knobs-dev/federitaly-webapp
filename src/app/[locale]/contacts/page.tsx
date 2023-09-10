import Image from "next/image";

import { IconEmail, IconLocation, IconPhone } from "@icons";

import ContactsContent from "./client";

const Contacts = () => (
  <>
    <header>
      <Image
        src="/assets/images/logo-white.png"
        width={131}
        height={23}
        alt="FederItaly logo"
      />
      <div className="mt-3 px-3 space-y-3">
        <div className="flex items-center">
          <IconLocation className="h-6 w-5 stroke-white" />
          <p className="ml-2 text-xs font-medium">
            Segreteria Nazionale Via Magenta, 5 00185 Roma, Italy
          </p>
        </div>
        <div className="flex items-center">
          <IconPhone className="h-5 w-5 fill-white" />
          <p className="ml-2 text-xs font-medium">
            +39 351 569 2010 | +39 06 92915346
          </p>
        </div>
        <div className="flex items-center">
          <IconEmail className="h-5 w-5 fill-white" />
          <p className="ml-2 text-xs font-medium">info@federitaly.it</p>
        </div>
        <hr className="translate-y-2 border-1 border-[#D1D3D499]" />
      </div>
    </header>
    <ContactsContent />
  </>
);

export default Contacts;
