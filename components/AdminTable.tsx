import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeaderItem {
  label: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

interface AdminTableProps {
  headers: (string | HeaderItem)[];
  children: ReactNode;
  className?: string;
}

export default function AdminTable({ headers, children, className }: AdminTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-left border-collapse font-display">
        <thead>
          <tr className="bg-secondary/5 text-secondary/50 uppercase text-[10px] font-black tracking-[0.2em] border-b border-secondary/10">
            {headers.map((header, index) => {
              const label = typeof header === 'string' ? header : header.label;
              const align = typeof header === 'string' ? 'left' : header.align || 'left';
              const alignClass = align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left';
              const customClass = typeof header === 'string' ? '' : header.className || '';
              return (
                <th
                  key={index}
                  className={cn(`px-6 py-5 ${alignClass}`, customClass)}
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-secondary/5">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function AdminTableRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <tr className={cn("hover:bg-secondary/[0.02] transition-colors group", className)}>
      {children}
    </tr>
  );
}

export function AdminTableCell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <td className={cn("px-6 py-5 text-sm font-medium text-secondary/70", className)}>
      {children}
    </td>
  );
}
