"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-secondary/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        ref={modalRef}
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl border border-secondary/10 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300",
          className
        )}
      >
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-secondary/5 bg-secondary/[0.02] flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-black text-2xl md:text-3xl text-secondary leading-tight">{title}</h3>
            {description && (
              <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em] mt-2">{description}</p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="size-12 rounded-2xl bg-secondary/5 text-secondary/40 hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center cursor-pointer group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
