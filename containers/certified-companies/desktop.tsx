import { useEffect, useRef, useState, type FC } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@hooks/useTranslations";
import { useVirtualizer } from "@tanstack/react-virtual";
import Fuse from "fuse.js";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { fetchCompanies } from "utils/api";

import {
  Card,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components";
import HeaderDesktop from "@components/HeaderDesktop";
import { IconArrowRight, IconSearch } from "@components/icons";

import { usePrevious } from "@hooks";
import { filterCertifiedCompaniesFormattedBy } from "@utils";

import type { SortByCertifiedCompanies } from "@types";

type CertifiedCompaniesDesktopProps = {};

const CertifiedCompaniesDesktop: FC<CertifiedCompaniesDesktopProps> = () => {
  const locale = useLocale();
  const virtualizedListRef = useRef(null);

  const { data: certifiedCompaniesDataFormatted } = useQuery(
    ["certifiedCompanies", locale],
    fetchCompanies,
  );

  const [
    filteredCertifiedCompaniesDataFormatted,
    setFilteredCertifiedCompaniesDataFormatted,
  ] = useState(certifiedCompaniesDataFormatted);

  useEffect(() => {
    setFilteredCertifiedCompaniesDataFormatted(certifiedCompaniesDataFormatted);
  }, [certifiedCompaniesDataFormatted]);

  const [search, setSearch] = useState("");
  const prevSearch = usePrevious(search);

  const [sortBy, setSortBy] = useState<SortByCertifiedCompanies>("most-recent");
  const prevSortBy = usePrevious(sortBy);

  const { t } = useTranslation();

  const rowVirtualizer = useVirtualizer({
    count: filteredCertifiedCompaniesDataFormatted
      ? filteredCertifiedCompaniesDataFormatted.length
      : 0,
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
        filteredCertifiedCompaniesDataFormatted || [],
        fuseOptions,
      );

      if (
        search === "" &&
        filteredCertifiedCompaniesDataFormatted &&
        certifiedCompaniesDataFormatted &&
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
  }, [search, certifiedCompaniesDataFormatted]);

  useEffect(() => {
    if (prevSortBy !== undefined && prevSortBy !== sortBy) {
      setFilteredCertifiedCompaniesDataFormatted((prev) =>
        filterCertifiedCompaniesFormattedBy(sortBy, [...(prev || [])]),
      );
    }
  }, [sortBy]);
  return (
    <div className="relative pb-52">
      <HeaderDesktop
        title={t("Common.sidebar.navigation.certified-companies")}
      />
      <section className="relative container mx-auto grid grid-cols-12 gap-[1rem] mt-24">
        <div className="flex justify-between items-center col-span-full">
          <h4 className="text-[1rem] text-[#565660]">
            {t("CertifiedCompanies.result", {
              count: filteredCertifiedCompaniesDataFormatted?.length,
            })}
          </h4>
          <div className="flex justify-end items-center space-x-4">
            <div className="relative w-full">
              <input
                className="h-10 w-full border-1 rounded-lg bg-[#FFFFFF] pl-4 text-[0.9375rem] font-normal placeholder:text-[#B9B8BB] border border-[#E5E5E5]"
                placeholder={t("CertifiedCompanies.filters.search_company")}
                onChange={handleSearch}
              />
              <IconSearch className="absolute top-1/2 ml-3 h-[1.1875rem] w-[1.1875rem] stroke-2 stroke-[#191820] -translate-y-1/2 right-4" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="h-10 w-[15rem] flex items-center justify-between rounded-lg bg-[#FFFFFF] px-5 text-sm font-semibold text-[#191820] border border-[#E5E5E5]">
                {t("CertifiedCompanies.filters.sort_by.placeholder")}
                <IconArrowRight className="h-4 w-4 rotate-90 fill-[#191820]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-[15rem] bg-[#FFFFFF] p-4 text-191820 space-y-3 border border-[#E5E5E5]">
                <DropdownMenuItem
                  className="flex items-center text-sm font-normal"
                  onClick={() => handleSortByFilterCheck("most-recent")}
                >
                  <Checkbox
                    id="most-recent"
                    className="mr-2"
                    checked={sortBy === "most-recent"}
                  />
                  {t("CertifiedCompanies.filters.sort_by.options.most_recent")}
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
                  {t("CertifiedCompanies.filters.sort_by.options.least_recent")}
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
                  {t(
                    "CertifiedCompanies.filters.sort_by.options.most_recent_expiration_date",
                  )}
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
                  {t(
                    "CertifiedCompanies.filters.sort_by.options.least_recent_expiration_date",
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {filteredCertifiedCompaniesDataFormatted &&
          filteredCertifiedCompaniesDataFormatted.map((company, index) => (
            <Link
              href={`/certified-company/${company.id}`}
              className="col-span-3"
            >
              <div
                className="p-4 bg-[#F1F1F1] rounded-[1rem]"
                key={company.companyName}
              >
                <div className="w-full h-[10rem] relative rounded-[1rem]">
                  <Image
                    src={company.companyProfilePhoto}
                    alt={`${company.companyName} logo`}
                    className="bg-white object-contain rounded-[1rem]"
                    fill
                  />
                </div>
                <h4 className="mt-2 text-[1.125rem] text-[#2D303D] font-semibold h-[7rem]">
                  {company.companyName}
                </h4>
                <div className="w-full">
                  <h6 className="w-full text-right">
                    {company.certificationExpirationDate}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};

export default CertifiedCompaniesDesktop;
