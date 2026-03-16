"use client";

import { useState } from "react";
import Link from "next/link";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import Pagination from "@/components/Pagination";
import { PawPrint, Eye, Pencil, Filter, Search } from "lucide-react";

export default function AdoptionRequestsPage() {

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">Adoption Requests</h1>
          <p className="text-secondary/50 font-medium mt-2">Review and process adoption applications from potential pet parents.</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Requests", value: "124", change: "+12%", color: "bg-secondary" },
          { label: "Pending Review", value: "32", change: "Active", color: "bg-amber-400" },
          { label: "Approved", value: "85", change: "Completed", color: "bg-emerald-500" },
          { label: "Rejected", value: "7", change: "Denied", color: "bg-rose-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-secondary/10 shadow-sm relative overflow-hidden group hover:border-primary transition-all">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${stat.color}`}></div>
            <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">{stat.label}</p>
            <div className="flex items-end justify-between mt-5">
              <p className="text-4xl font-black text-secondary">{stat.value}</p>
              <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${i === 1 ? 'bg-secondary/5 text-secondary/40' : i === 3 ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="absolute -right-2 -bottom-2 size-16 bg-secondary/[0.02] rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Table & Filter Section */}
      <div className="bg-white rounded-[40px] border border-secondary/10 shadow-sm overflow-hidden">
        {/* Filter Bar */}
        <div className="p-8 border-b border-secondary/5 flex flex-wrap items-center justify-between gap-6 bg-secondary/[0.02]">
          <div className="flex items-center gap-3">
             <button className="px-5 py-2.5 bg-secondary text-primary rounded-xl text-[10px] font-black uppercase tracking-widest">All Status</button>
             <button className="px-5 py-2.5 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Pending</button>
             <button className="px-5 py-2.5 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Approved</button>
             <button className="px-5 py-2.5 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Rejected</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 group-focus-within:text-primary transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search requests..." 
                className="bg-white border border-secondary/10 rounded-xl pl-11 pr-4 py-2.5 text-xs font-black text-secondary outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all w-64 placeholder:text-secondary/20"
              />
            </div>
            <select className="bg-white border border-secondary/10 rounded-xl text-[10px] font-black text-secondary/60 uppercase tracking-widest px-4 py-2.5 focus:ring-4 focus:ring-primary/10 outline-none cursor-pointer">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-secondary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all cursor-pointer shadow-lg shadow-primary/10">
              <Filter size={14} strokeWidth={3} />
              Filters
            </button>
          </div>
        </div>

        <AdminTable headers={["Applicant", "Animal Interest", "Date Submitted", "Status", { label: "Actions", align: "right" }]}>
          {[
            { name: "Alice Morgan", email: "alice.m@example.com", init: "AM", animal: "Buddy", breed: "Golden Retriever", date: "Oct 24, 2023", status: "warning", statusText: "Pending" },
            { name: "James Robinson", email: "j.robinson@webmail.com", init: "JR", animal: "Luna", breed: "Tabby Cat", date: "Oct 22, 2023", status: "info", statusText: "Under Review" },
            { name: "Cynthia Lee", email: "clee@provider.net", init: "CL", animal: "Max", breed: "Beagle", date: "Oct 20, 2023", status: "success", statusText: "Approved" },
            { name: "Steven King", email: "sking@horror.com", init: "SK", animal: "Shadow", breed: "Black Lab", date: "Oct 18, 2023", status: "danger", statusText: "Rejected" },
          ].map((req, i) => (
            <AdminTableRow key={i}>
              <AdminTableCell>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-2xl bg-secondary text-primary flex items-center justify-center font-black text-[10px] border border-secondary/10 shadow-sm">{req.init}</div>
                  <div>
                    <p className="text-base font-black text-secondary leading-tight">{req.name}</p>
                    <p className="text-[10px] text-secondary/30 font-black uppercase tracking-widest mt-0.5">{req.email}</p>
                  </div>
                </div>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex items-center gap-3 bg-secondary/5 px-4 py-2 rounded-xl w-fit group hover:bg-primary/10 transition-all cursor-pointer">
                  <PawPrint className="text-primary group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-xs font-black text-secondary">{req.animal} <span className="text-secondary/30 font-bold ml-1">· {req.breed}</span></span>
                </div>
              </AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/30">{req.date}</AdminTableCell>
              <AdminTableCell>
                <Badge variant={req.status as any}>{req.statusText}</Badge>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex justify-end gap-3">
                  <Link href={`/admin/adoption-requests/${i + 1}`}>
                    <button className="px-5 py-2.5 bg-secondary text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all cursor-pointer flex items-center gap-2 group">
                      <Eye size={14} className="group-hover:scale-110 transition-transform" />
                      Review
                    </button>
                  </Link>
                  <button className="p-2.5 text-secondary/20 hover:text-primary hover:bg-secondary rounded-xl transition-all cursor-pointer">
                    <Pencil size={18} />
                  </button>
                </div>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>

        <div className="p-10 border-t border-secondary/5 flex items-center justify-between bg-secondary/[0.01]">
          <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Showing 1 to 4 of 124 results</p>
          <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
        </div>
      </div>

    </div>
  );
}
