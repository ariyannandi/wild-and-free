"use client";

import { useState } from "react";
import Link from "next/link";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import { cn } from "@/lib/utils";
import { Download, Landmark, Users, CreditCard, RotateCcw, Wallet, Eye, DollarSign, TrendingUp, Plus } from "lucide-react";

export default function DonationsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">Manage Donations</h1>
          <p className="text-secondary/50 font-medium mt-2">Monitor and manage all financial contributions for the NGO.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary/5 text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary/10 transition-all cursor-pointer group">
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            Export CSV
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/20 cursor-pointer group"
          >
            <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
            Add Donation
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden group hover:border-primary transition-all">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-primary/10 text-secondary/60 rounded-2xl group-hover:bg-primary group-hover:text-secondary transition-all">
                <DollarSign size={24} />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-emerald-600 text-xs font-black bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp size={12} />
                  +12.5%
                </span>
                <span className="text-[10px] font-black text-secondary/20 uppercase tracking-widest mt-2">Vs last month</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.2em]">Total Donated</p>
              <h3 className="text-4xl font-black text-secondary mt-2">$124,500.00</h3>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 size-32 bg-secondary/[0.02] rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
        </div>
        
        <div className="bg-white p-8 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden group hover:border-primary transition-all">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <p className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.2em]">Monthly Target</p>
              <span className="text-secondary font-black text-sm">75%</span>
            </div>
            <div className="h-5 w-full bg-secondary/5 rounded-full overflow-hidden mb-6 flex items-center px-1">
              <div className="h-3 bg-primary rounded-full shadow-sm" style={{ width: "75%" }}></div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-black text-secondary">$15,000</p>
                <p className="text-[10px] font-black text-secondary/30 uppercase tracking-wider mt-1">raised of $20,000 target</p>
              </div>
              <TrendingUp className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden group hover:border-primary transition-all flex flex-col justify-between">
          <div className="relative z-10 flex justify-between items-start">
            <div className="p-4 bg-primary/10 text-secondary/60 rounded-2xl group-hover:bg-primary group-hover:text-secondary transition-all">
              <Users size={24} />
            </div>
            <span className="text-emerald-600 text-xs font-black bg-emerald-50 px-3 py-1 rounded-full">+5%</span>
          </div>
          <div className="relative z-10 mt-8">
            <p className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.2em]">Active Donors</p>
            <h3 className="text-4xl font-black text-secondary mt-2">142 Users</h3>
          </div>
          <div className="absolute -right-4 -bottom-4 size-32 bg-secondary/[0.02] rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[40px] border border-secondary/10 shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="p-8 border-b border-secondary/5 flex flex-wrap items-center gap-6 bg-secondary/[0.02]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em] ml-1">Filter by:</span>
            <select className="bg-white border-secondary/10 rounded-xl text-xs px-5 py-2.5 outline-none focus:ring-4 focus:ring-primary/10 font-black text-secondary/70 cursor-pointer shadow-sm">
              <option>Status: All</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
          </div>
          <select className="bg-white border-secondary/10 rounded-xl text-xs px-5 py-2.5 outline-none focus:ring-4 focus:ring-primary/10 font-black text-secondary/70 cursor-pointer shadow-sm">
            <option>Date: Last 30 days</option>
            <option>Last 3 months</option>
          </select>
          <select className="bg-white border-secondary/10 rounded-xl text-xs px-5 py-2.5 outline-none focus:ring-4 focus:ring-primary/10 font-black text-secondary/70 cursor-pointer shadow-sm">
            <option>Method: All</option>
            <option>Stripe</option>
            <option>PayPal</option>
          </select>
        </div>

        <AdminTable headers={["Donor Name", "Date", "Amount", "Status", "Method", { label: "Actions", align: "right" }]}>
          {[
            { name: "Michael Thompson", email: "michael.t@example.com", date: "Oct 24, 2023", amount: "$250.00", status: "success", statusText: "Completed", method: "Stripe", icon: CreditCard },
            { name: "Elena Rodriguez", email: "elena.rod@webmail.org", date: "Oct 23, 2023", amount: "$50.00", status: "warning", statusText: "Pending", method: "PayPal", icon: Wallet },
            { name: "David Smith", email: "d.smith@corp.com", date: "Oct 22, 2023", amount: "$1,200.00", status: "success", statusText: "Completed", method: "Bank Transfer", icon: Landmark },
            { name: "Sarah Connor", email: "s.connor@future.net", date: "Oct 20, 2023", amount: "$100.00", status: "neutral", statusText: "Refunded", method: "Stripe", icon: CreditCard },
          ].map((donation, i) => (
            <AdminTableRow key={i}>
              <AdminTableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-black text-secondary">{donation.name}</span>
                  <span className="text-[10px] text-secondary/30 font-black uppercase tracking-wider">{donation.email}</span>
                </div>
              </AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/30">{donation.date}</AdminTableCell>
              <AdminTableCell className="text-lg font-black text-secondary">{donation.amount}</AdminTableCell>
              <AdminTableCell>
                <Badge variant={donation.status as any}>{donation.statusText}</Badge>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex items-center gap-3 font-black text-[10px] text-secondary/50 uppercase tracking-widest bg-secondary/5 px-4 py-2 rounded-xl w-fit">
                  <donation.icon size={16} className="text-primary" />
                  {donation.method}
                </div>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex items-center justify-end gap-3">
                  <Link href={`/admin/donations/${i + 1}`}>
                    <button className="px-5 py-2.5 bg-secondary text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all cursor-pointer flex items-center gap-2 group">
                      <Eye size={14} className="group-hover:scale-110 transition-transform" />
                      Details
                    </button>
                  </Link>
                  <button className={cn(
                    "p-2.5 rounded-xl transition-all cursor-pointer",
                    donation.status === "neutral" ? "text-secondary/10 cursor-not-allowed" : "text-secondary/20 hover:text-white hover:bg-rose-500"
                  )}>
                    <RotateCcw size={18} />
                  </button>
                </div>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>

        <div className="p-10 border-t border-secondary/5 flex items-center justify-between bg-secondary/[0.01]">
          <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Showing 1 to 4 of 142 donors</p>
          <Pagination currentPage={1} totalPages={15} onPageChange={() => {}} />
        </div>
      </div>

      {/* Add Donation Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Manual Donation Entry"
        description="Record a donation received via offline or manual channels."
      >
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Donor Name</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                  placeholder="Full name or Organization" 
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                  placeholder="email@example.com" 
                  type="email"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Donation Amount ($)</label>
                <div className="relative">
                   <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/30 font-black text-lg">$</div>
                   <input 
                    className="w-full bg-secondary/5 border-transparent rounded-2xl pl-10 pr-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-black text-xl text-secondary transition-all placeholder:text-secondary/20" 
                    placeholder="0.00" 
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Payment Method</label>
                <select className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all cursor-pointer">
                  <option>Select method</option>
                  <option>Bank Transfer</option>
                  <option>Cash / Check</option>
                  <option>PayPal (Manual)</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Date Received</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all cursor-pointer" 
                  type="date"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Notes / Purpose</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                  placeholder="e.g. For Winter Food Program" 
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 pt-10 border-t border-secondary/5">
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="px-10 py-4 rounded-xl font-black text-secondary/30 hover:text-secondary hover:bg-secondary/5 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer" 
              type="button"
            >
              Discard
            </button>
            <button className="px-14 py-4 bg-primary hover:bg-secondary hover:text-primary text-secondary rounded-xl font-black shadow-xl shadow-primary/20 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer" type="submit">
              Record Donation
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
