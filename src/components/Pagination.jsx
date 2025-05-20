"use client";

import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages }) => {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];

    // Always include first page
    pages.push(1);

    // Add ellipsis if needed
    if (currentPage > 3) {
      pages.push("...");
    }

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (
        pages[pages.length - 1] !== "..." &&
        pages[pages.length - 1] !== i - 1
      ) {
        pages.push("...");
      }
      pages.push(i);
    }

    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always include last page if there's more than one page
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  // No pagination needed for single page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-1 mt-10">
      {currentPage !== 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-3 py-3 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          aria-label="Previous page"
        >
          <FaChevronLeft className="h-4 w-4" />
        </Link>
      )}

      {getPageNumbers().map((pageNumber, index) =>
        pageNumber === "..." ? (
          <span key={`ellipsis-${index}`} className="px-4 py-2">
            ...
          </span>
        ) : (
          <Link
            href={`?page=${pageNumber}`}
            key={`page-${pageNumber}`}
            className={`px-4 py-2 rounded-md ${
              currentPage === pageNumber
                ? "bg-primary text-white font-medium"
                : "hover:bg-gray-50 border border-gray-300 transition-colors"
            }`}
            aria-label={`Page ${pageNumber}`}
            aria-current={currentPage === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </Link>
        )
      )}

      {currentPage !== totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-3 py-3 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          aria-label="Next page"
        >
          <FaChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
