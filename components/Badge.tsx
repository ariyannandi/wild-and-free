import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'pending' | 'approved' | 'rejected' | 'default' | 'warning' | 'success' | 'danger' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  showDot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-500",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-500",
  approved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-500",
  success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-500",
  rejected: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-500",
  danger: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-500",
  default: "bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400",
  neutral: "bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400",
};

const dotStyles: Record<BadgeVariant, string> = {
  pending: "bg-amber-500",
  warning: "bg-amber-500",
  approved: "bg-emerald-500",
  success: "bg-emerald-500",
  rejected: "bg-rose-500",
  danger: "bg-rose-500",
  default: "bg-slate-500",
  neutral: "bg-slate-500",
};

export default function Badge({ children, variant = 'default', className, showDot = true }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold",
        variantStyles[variant],
        className
      )}
    >
      {showDot && (
        <span className={cn("size-1.5 rounded-full", dotStyles[variant])}></span>
      )}
      {children}
    </span>
  );
}
