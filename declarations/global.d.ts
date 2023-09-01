type Messages = typeof import("../messages/en.json");
declare interface IntlMessages extends Messages {}

declare module "*.svg" {
  import { FC, SVGProps } from "react";

  const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
