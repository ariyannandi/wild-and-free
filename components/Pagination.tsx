"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalResults,
  itemsPerPage,
  onPageChange,
  className
}: PaginationProps) {
  
  // A simple implementation showing up to 3 page buttons (currentPage - 1, currentPage, currentPage + 1)
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  };

  const startResult = itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : 1;
  const endResult = itemsPerPage && totalResults ? Math.min(currentPage * itemsPerPage, totalResults) : 4;

  return (
    <div className={cn("p-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-display", className)}>
      {totalResults && itemsPerPage ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {startResult} to {endResult} of {totalResults} results
        </p>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing results
        </p>
      )}
      
      <div className="flex items-center gap-2">
        <button 
          className="size-9 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          disabled={currentPage === 1}
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="size-4" />
        </button>
        
        {getPageNumbers().map(page => (
          <button 
            key={page}
            className={cn(
              "size-9 flex items-center justify-center rounded-lg transition-colors",
              currentPage === page 
                ? "bg-primary text-slate-900 font-bold shadow-sm"
                : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            )}
            onClick={() => onPageChange && onPageChange(page)}
          >
            {page}
          </button>
        ))}
        
        <button 
          className="size-9 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
