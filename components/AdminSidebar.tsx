"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PawPrint,
  Stethoscope,
  FileText,
  Heart,
  CheckSquare,
  CreditCard,
  Plus
} from "lucide-react";
import logo from "../public/logo.png";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Manage Animals", href: "/admin/animals", icon: PawPrint },
    { label: "Manage Rescues", href: "/admin/rescues", icon: Stethoscope },
    { label: "Manage Blog", href: "/admin/blog", icon: FileText },
    { label: "Manage Success Stories", href: "/admin/success-stories", icon: Heart },
    { label: "Adoption Requests", href: "/admin/adoption-requests", icon: CheckSquare },
    { label: "Manage Donations", href: "/admin/donations", icon: CreditCard },
  ];

  return (
    <aside className="w-72 flex-shrink-0 border-r border-white/10 flex flex-col bg-secondary min-h-screen">
      <div className="p-6 flex flex-col h-full justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center overflow-hidden relative border-2 border-primary">
              <Image
                className="object-cover"
                alt="Wild and Free NGO official logo"
                src={logo}
                fill
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-black leading-none">Wild and Free</h1>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Admin Panel</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive
                    ? "bg-primary text-secondary font-black shadow-lg shadow-primary/10"
                    : "text-white/50 hover:text-white hover:bg-white/5 font-bold"
                    }`}
                  href={item.href}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
