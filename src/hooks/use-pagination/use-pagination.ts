import { useState, useMemo } from "react";

/* -------------------------------------------------- */

/**
 * Pagination hook
 *
 *
 * @param data
 * @param itemsPerPage
 *
 * @returns ReactElement
 */
export default function usePagination(
  data: Record<string, any>[] = [],
  itemsPerPage: number = 10
) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationInfo = useMemo(() => {
    const isPaginationPossible = data.length >= itemsPerPage * 2;

    const totalPages = isPaginationPossible
      ? Math.ceil(data.length / itemsPerPage)
      : 1;

    // Core pagination feature
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = isPaginationPossible
      ? data.slice(startIndex, endIndex)
      : data;

    // Indicators of next/prev page
    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;

    return {
      currentData,
      totalPages,
      isPaginationPossible,
      hasNextPage,
      hasPrevPage,
      currentPage,
    };
  }, [data, itemsPerPage, currentPage]);

  //  Navigation functions
  const goToNextPage = () => {
    if (paginationInfo.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (paginationInfo.hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    const targetPage = Math.max(
      1,
      Math.min(pageNumber, paginationInfo.totalPages)
    );
    setCurrentPage(targetPage);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    ...paginationInfo,
    goToNextPage,
    goToPrevPage,
    goToPage,
    resetPagination,
  };
}
