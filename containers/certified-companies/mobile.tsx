import { useEffect, useRef, useState, type FC } from "react";
import { useRouter } from "next/router";
import { useLocale } from "@hooks/useTranslations";
import { useVirtualizer } from "@tanstack/react-virtual";
import Fuse from "fuse.js";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { fetchCompanies } from "utils/api";

import { Card } from "@components";
import { IconSearch } from "@components/icons";

import { clientT } from "@store/i18n";
import { usePrevious } from "@hooks";
import { filterCertifiedCompaniesFormattedBy } from "@utils";

import type { SortByCertifiedCompanies } from "@types";

type CertifiedCompaniesMobileProps = {};

const CertifiedCompaniesMobile: FC<CertifiedCompaniesMobileProps> = () => {
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

  const router = useRouter();

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
    <>
      <header className="w-full">
        <div className="relative w-full">
          <input
            className="h-11 w-full border-1 border-[#EAEBEC4A] rounded-lg bg-[#403E62CC] pl-10 text-[0.9375rem] font-medium placeholder:text-[#F2F3F399]"
            placeholder={t("CertifiedCompanies.filters.search_company")}
            onChange={handleSearch}
          />
          <IconSearch className="absolute top-1/2 ml-3 h-[1.1875rem] w-[1.1875rem] stroke-2 stroke-[#D5D8DC] -translate-y-1/2" />
        </div>
      </header>
      <section className="mt-4 flex-1 overflow-y-auto" ref={virtualizedListRef}>
        {filteredCertifiedCompaniesDataFormatted &&
          filteredCertifiedCompaniesDataFormatted.length > 0 && (
            <div
              className="relative w-full"
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
              }}
            >
              {rowVirtualizer
                .getVirtualItems()
                .map(({ key, size, start, index }) => {
                  return (
                    <div
                      key={key}
                      className="absolute left-0 top-0 w-full"
                      style={{
                        height: `${size}px`,
                        transform: `translateY(${start}px)`,
                      }}
                    >
                      <div
                        onClick={() =>
                          router.push(
                            `/certified-company?id=${filteredCertifiedCompaniesDataFormatted[index].id}`,
                          )
                        }
                        role="button"
                        tabIndex={0}
                        aria-hidden
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
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        {filteredCertifiedCompaniesDataFormatted &&
          filteredCertifiedCompaniesDataFormatted.length === 0 && (
            <p className="h-full w-full flex items-center justify-center py-16 text-center text-sm">
              {clientT.value?.Common.no_certified_companies}
            </p>
          )}
      </section>
    </>
  );
};

export default CertifiedCompaniesMobile;
