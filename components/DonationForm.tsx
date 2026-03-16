"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const AMOUNTS = [10, 25, 50, 100];

export default function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800">
      <div className="mb-10">
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-8">
          <button
            onClick={() => setFrequency("one-time")}
            className={cn(
              "flex-1 py-3 rounded-xl font-bold transition-all",
              frequency === "one-time" 
                ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            One-time
          </button>
          <button
            onClick={() => setFrequency("monthly")}
            className={cn(
              "flex-1 py-3 rounded-xl font-bold transition-all",
              frequency === "monthly" 
                ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            Monthly
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={cn(
                "py-4 rounded-2xl font-bold text-lg border-2 transition-all",
                selectedAmount === amount && !customAmount
                  ? "border-primary bg-primary/10 text-slate-900 dark:text-white"
                  : "border-slate-100 dark:border-slate-800 hover:border-primary/50 text-slate-600 dark:text-slate-400"
              )}
            >
              ${amount}
            </button>
          ))}
        </div>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
          <input
            type="number"
            placeholder="Custom Amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-full pl-10 pr-4 py-4 rounded-2xl border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900 focus:ring-primary focus:border-primary font-bold text-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold opacity-80">First Name</span>
            <input className="rounded-xl border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900 focus:ring-primary focus:border-primary p-3" placeholder="John" type="text"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold opacity-80">Last Name</span>
            <input className="rounded-xl border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900 focus:ring-primary focus:border-primary p-3" placeholder="Doe" type="text"/>
          </label>
        </div>
        
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold opacity-80">Email Address</span>
          <input className="rounded-xl border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900 focus:ring-primary focus:border-primary p-3" placeholder="john@example.com" type="email"/>
        </label>

        <div className="pt-4">
          <button className="w-full bg-primary hover:bg-opacity-90 text-slate-900 font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 text-xl">
            Donate Now
            <span className="material-symbols-outlined">volunteer_activism</span>
          </button>
          <p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">lock</span>
            Secure payment processed by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
