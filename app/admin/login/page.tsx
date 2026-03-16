"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Logo from "@/public/logo.png"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    window.location.href = "/admin/dashboard";
  };

  return (
    <main className="relative flex min-h-screen w-full overflow-hidden bg-white font-sans antialiased">
      {/* Left Panel: High Impact Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/login.png"
            alt="Rescue dog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10 z-10"></div>

          <div className="absolute bottom-20 left-20 z-20 max-w-lg">
            <h1 className="text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight italic uppercase font-display">
              The heart of our rescue operations.
            </h1>
            <p className="text-white/60 text-lg font-sans">
              Securely manage rescues, adoptions, and the stories that make our mission possible.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-20 relative">
        <div className="w-full max-w-[420px]">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="size-16  rounded-xl flex items-center justify-center mb-8">
              <Image
                alt="Wild and Free Logo"
                src={Logo}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl font-black text-black mb-3 tracking-tight italic uppercase font-display">Admin Portal</h2>
            <p className="text-black/40 font-bold text-lg font-sans">Welcome back, teammate.</p>
          </div>

          {/* Form Card */}
          <div className="bg-white p-10 rounded-[32px] border border-black/[0.03] shadow-2xl shadow-black/[0.03] mb-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-black uppercase tracking-[0.2em] ml-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-black transition-colors" size={16} />
                  <input
                    className="w-full pl-12 pr-6 py-4 bg-[#F8FAFC] border border-black/[0.03] rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-black font-bold placeholder:text-black/20 text-sm"
                    id="email"
                    name="email"
                    placeholder="name@wildandfree.org"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black text-black uppercase tracking-[0.2em]" htmlFor="password">Password</label>
                  <Link className="text-[10px] font-black text-black/30 hover:text-black transition-colors uppercase tracking-[0.2em]" href="#">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-black transition-colors" size={16} />
                  <input
                    className="w-full pl-12 pr-6 py-4 bg-[#F8FAFC] border border-black/[0.03] rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-black font-bold placeholder:text-black/20 text-sm"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center px-1">
                <input
                  className="size-5 rounded-md border-2 border-black/10 text-black focus:ring-primary cursor-pointer transition-all"
                  id="remember"
                  type="checkbox"
                />
                <label className="ml-3 text-xs text-black/40 font-bold cursor-pointer" htmlFor="remember">Remember this device</label>
              </div>

              <button
                className="w-full py-5 px-8 bg-[#FFF560] hover:bg-black hover:text-[#FFF560] text-black font-black rounded-xl shadow-[0_10px_30px_-10px_rgba(255,245,96,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm"
                type="submit"
              >
                Sign In to Dashboard
                <ArrowRight size={18} strokeWidth={3} />
              </button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px bg-black/[0.03] grow"></div>
              <span className="text-black/10 text-[9px] uppercase tracking-[0.2em] font-black">Authorized Personnel Only</span>
              <div className="h-px bg-black/[0.03] grow"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-black/30 text-[10px] font-bold">
              © 2019 Wild and Free NGO. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link className="text-black/20 hover:text-black text-[10px] font-bold transition-colors" href="#">Terms of Service</Link>
              <Link className="text-black/20 hover:text-black text-[10px] font-bold transition-colors" href="#">Privacy Policy</Link>
              <Link className="text-black/20 hover:text-black text-[10px] font-bold transition-colors" href="#">Help Center</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
