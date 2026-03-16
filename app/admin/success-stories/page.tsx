"use client";

import { useState } from "react";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import { Pencil, Plus, Trash2, Info } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function ManageSuccessStoriesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">Manage Success Stories</h1>
          <p className="text-secondary/50 font-medium mt-2">Review, edit, and share the journey of our rescued friends.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/20 cursor-pointer group"
        >
          <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          Create New Story
        </button>
      </div>

      {/* Stories Table Card */}
      <div className="bg-white rounded-[40px] shadow-sm border border-secondary/10 overflow-hidden">
        <div className="p-8 border-b border-secondary/5 flex flex-wrap items-center justify-between gap-4 bg-secondary/[0.02]">
          <h3 className="font-black text-secondary">Recent Stories</h3>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em] ml-1">Filter:</span>
            <select className="text-sm font-black text-secondary/70 border-none bg-white rounded-xl px-4 py-2 focus:ring-4 focus:ring-primary/10 shadow-sm outline-none cursor-pointer">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
        <AdminTable headers={["Animal Name", "Adoption Date", "Status", { label: "Actions", align: "right" }]}>
          {[
            { name: "Luna", breed: "Beagle", date: "Oct 15, 2023", status: "success", statusText: "Published", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=150" },
            { name: "Cooper", breed: "Tuxedo Cat", date: "Nov 02, 2023", status: "warning", statusText: "Draft", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150" },
            { name: "Bella", breed: "Retriever Mix", date: "Sep 20, 2023", status: "success", statusText: "Published", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150" },
          ].map((story, i) => (
            <AdminTableRow key={i}>
              <AdminTableCell>
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl overflow-hidden bg-secondary/5 relative border border-secondary/5">
                    <Image src={story.img} alt={story.name} fill className="object-cover" />
                  </div>
                  <span className="font-black text-secondary text-base">{story.name} <span className="text-secondary/30 font-bold text-xs">({story.breed})</span></span>
                </div>
              </AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/50">{story.date}</AdminTableCell>
              <AdminTableCell>
                <Badge variant={story.status as any}>{story.statusText}</Badge>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex justify-end gap-2">
                  <button className="p-2.5 text-secondary/20 hover:text-primary hover:bg-secondary rounded-xl transition-all cursor-pointer">
                    <Pencil size={18} />
                  </button>
                  <button className="p-2.5 text-secondary/20 hover:text-white hover:bg-rose-500 rounded-xl transition-all cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Impact Story Editor"
        description="Capture the heart-warming journey of a successful adoption."
      >
        <form className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Animal Name</label>
                <input
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20"
                  placeholder="Enter animal's name"
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Adoption Date</label>
                <div className="relative">
                  <input
                    className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all cursor-pointer"
                    type="date"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Story Text</label>
                <textarea
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary/70 transition-all placeholder:text-secondary/20 min-h-[220px]"
                  placeholder="Describe the transformation and the new life of the animal..."
                ></textarea>
              </div>
            </div>
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Before Photo</label>
                  <div className="border-3 border-dashed border-secondary/10 rounded-[32px] p-8 text-center hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer h-60 flex flex-col items-center justify-center bg-secondary/[0.02]">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all mb-4">
                      <Plus size={24} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                    </div>
                    <p className="text-[10px] font-black text-secondary/40 uppercase tracking-widest max-w-[120px]">Upload 'Before'</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">After Photo</label>
                  <div className="border-3 border-dashed border-secondary/10 rounded-[32px] p-8 text-center hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer h-60 flex flex-col items-center justify-center bg-secondary/[0.02]">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all mb-4">
                      <Plus size={24} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                    </div>
                    <p className="text-[10px] font-black text-secondary/40 uppercase tracking-widest max-w-[120px]">Upload 'After'</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary p-8 rounded-[32px] border border-primary/10">
                <div className="flex gap-4">
                  <Info className="text-secondary/60 shrink-0" size={24} />
                  <div>
                    <h4 className="text-sm font-black text-secondary uppercase tracking-tight">Tips for a great story</h4>
                    <p className="text-xs text-secondary/60 mt-2 leading-relaxed">Include details about the animal's rescue condition and their personality in their new home. High-quality landscape photos work best.</p>
                  </div>
                </div>
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
              Save Story
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
