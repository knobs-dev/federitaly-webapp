"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { createPortal } from "react-dom";
import { useVirtualizer } from "@tanstack/react-virtual";
import Fuse from "fuse.js";
import debounce from "lodash.debounce";
import Link from "next-intl/link";

import {
  Card,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components";

import { clientT } from "@store/i18n";
import { usePrevious } from "@hooks";
import {
  filterCertifiedCompaniesFormattedBy,
  formatCertifiedCompaniesData,
} from "@utils";

import type { SortByCertifiedCompanies } from "@types";

import { IconArrowRight, IconSearch } from "@icons";

type CertifiedCompaniesContentProps = {
  certifiedCompaniesDataFormatted: ReturnType<
    typeof formatCertifiedCompaniesData
  >;
};

const CertifiedCompaniesContent: FC<CertifiedCompaniesContentProps> = ({
  certifiedCompaniesDataFormatted,
}) => {
  const virtualizedListRef = useRef(null);

  const [
    filteredCertifiedCompaniesDataFormatted,
    setFilteredCertifiedCompaniesDataFormatted,
  ] = useState(certifiedCompaniesDataFormatted);

  const [search, setSearch] = useState("");
  const prevSearch = usePrevious(search);

  const [sortBy, setSortBy] = useState<SortByCertifiedCompanies>("most-recent");
  const prevSortBy = usePrevious(sortBy);

  const rowVirtualizer = useVirtualizer({
    count: filteredCertifiedCompaniesDataFormatted.length,
    getScrollElement: () => virtualizedListRef.current,
    estimateSize: () => 70,
  });

  const handleSearch = debounce((value) => {
    setSearch(value.target.value);
  }, 300);

  const handleSortByFilterCheck = (value: SortByCertifiedCompanies) => {
    setSortBy(value);
  };

  useEffect(() => {
    if (prevSearch !== undefined && prevSearch !== search) {
      const fuseOptions = {
        treshold: 0.3,
        keys: ["companyName"],
      };

      const fuse = new Fuse(
        filteredCertifiedCompaniesDataFormatted,
        fuseOptions,
      );

      if (
        search === "" &&
        filteredCertifiedCompaniesDataFormatted.length !==
          certifiedCompaniesDataFormatted.length
      ) {
        setFilteredCertifiedCompaniesDataFormatted(
          certifiedCompaniesDataFormatted,
        );
        return;
      }

      setFilteredCertifiedCompaniesDataFormatted(
        filterCertifiedCompaniesFormattedBy(
          sortBy,
          fuse.search(search).map(({ item }) => item),
        ),
      );
    }
  }, [search]);

  useEffect(() => {
    if (prevSortBy !== undefined && prevSortBy !== sortBy) {
      setFilteredCertifiedCompaniesDataFormatted((prev) =>
        filterCertifiedCompaniesFormattedBy(sortBy, [...prev]),
      );
    }
  }, [sortBy]);

  return (
    <>
      <header className="w-full">
        <div className="relative w-full">
          <input
            className="h-11 w-full border-1 border-[#EAEBEC4A] rounded-lg bg-[#403E62CC] pl-10 text-[0.9375rem] font-medium placeholder:text-[#F2F3F399]"
            placeholder={
              clientT.value?.CertifiedCompanies.filters.search_company
            }
            onChange={handleSearch}
          />
          <IconSearch className="absolute top-1/2 ml-3 h-[1.1875rem] w-[1.1875rem] stroke-2 stroke-[#D5D8DC] -translate-y-1/2" />
        </div>
        <div className="mt-3 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-12 w-full flex items-center justify-between rounded-lg bg-[#A7A7B866] px-4 text-sm font-medium">
              {clientT.value?.CertifiedCompanies.filters.sort_by.placeholder}
              <IconArrowRight className="h-4 w-4 rotate-90 fill-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-[calc(100vw-2rem)] border-0 bg-[#55567a] p-4 text-white space-y-3">
              {createPortal(
                <div className="overlay-dropdown fixed left-0 top-16 h-[calc(100vh-4rem)] w-screen rounded-t-3xl" />,
                document.body,
              )}
              <DropdownMenuItem
                className="flex items-center text-sm font-normal"
                onClick={() => handleSortByFilterCheck("most-recent")}
              >
                <Checkbox
                  id="most-recent"
                  className="mr-2"
                  checked={sortBy === "most-recent"}
                />
                {
                  clientT.value?.CertifiedCompanies.filters.sort_by.options
                    .most_recent
                }
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center text-sm font-normal"
                onClick={() => handleSortByFilterCheck("least-recent")}
              >
                <Checkbox
                  id="least-recent"
                  className="mr-2"
                  checked={sortBy === "least-recent"}
                />
                {
                  clientT.value?.CertifiedCompanies.filters.sort_by.options
                    .least_recent
                }
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center text-sm font-normal"
                onClick={() =>
                  handleSortByFilterCheck("most-recent-expiration-date")
                }
              >
                <Checkbox
                  id="most-recent-expiration-date"
                  className="mr-2"
                  checked={sortBy === "most-recent-expiration-date"}
                />
                {
                  clientT.value?.CertifiedCompanies.filters.sort_by.options
                    .most_recent_expiration_date
                }
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center text-sm font-normal"
                onClick={() =>
                  handleSortByFilterCheck("least-recent-expiration-date")
                }
              >
                <Checkbox
                  id="least-recent-expiration-date"
                  className="mr-2"
                  checked={sortBy === "least-recent-expiration-date"}
                />
                {
                  clientT.value?.CertifiedCompanies.filters.sort_by.options
                    .least_recent_expiration_date
                }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <section className="mt-4 flex-1 overflow-y-auto" ref={virtualizedListRef}>
        {filteredCertifiedCompaniesDataFormatted.length > 0 && (
          <div
            className="relative w-full"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
          >
            {rowVirtualizer
              .getVirtualItems()
              .map(({ key, size, start, index }) => (
                <div
                  key={key}
                  className="absolute left-0 top-0 w-full"
                  style={{
                    height: `${size}px`,
                    transform: `translateY(${start}px)`,
                  }}
                >
                  <Link
                    href={`/certified-company/${filteredCertifiedCompaniesDataFormatted[index].id}`}
                  >
                    <Card
                      profilePhoto={
                        filteredCertifiedCompaniesDataFormatted[index]
                          .companyProfilePhoto
                      }
                      name={
                        filteredCertifiedCompaniesDataFormatted[index]
                          .companyName
                      }
                      expirationDate={
                        filteredCertifiedCompaniesDataFormatted[index]
                          .certificationExpirationDate
                      }
                    />
                  </Link>
                </div>
              ))}
          </div>
        )}
        {filteredCertifiedCompaniesDataFormatted.length === 0 && (
          <p className="h-full w-full flex items-center justify-center py-16 text-center text-sm">
            {clientT.value?.Common.no_certified_companies}
          </p>
        )}
      </section>
    </>
  );
};

export default CertifiedCompaniesContent;
