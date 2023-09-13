// components/RetainQueryLink.tsx
import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

const RetainQueryLink = ({
  href,
  ...props
}: LinkProps & PropsWithChildren & { className?: string }) => {
  // 1. use useRouter hook to get access to the current query params
  const router = useRouter();

  // 2. get the pathname
  const pathname = typeof href === "object" ? href.pathname : href;

  // 3. get the query from props
  const query =
    typeof href === "object" && typeof href.query === "object"
      ? href.query
      : {};

  return (
    <Link
      {...props}
      href={{
        pathname,
        // combine router.query and query props
        query: {
          ...router.query,
          ...query,
        },
      }}
    />
  );
};
export default RetainQueryLink;
