"use client";

import { useState } from "react";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Image from "next/image";
import Modal from "@/components/Modal";
import { Plus, Pencil, Trash2, Edit3, CloudUpload } from "lucide-react";

export default function ManageRescuesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-10 pb-20">
      {/* Page Title & CTA */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-secondary">Manage Rescues</h1>
          <p className="text-secondary/50 font-medium mt-2">Review and update records of animal rescues.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/20 cursor-pointer group"
        >
          <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          Add Rescue
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[40px] shadow-sm border border-secondary/10 overflow-hidden">
        <AdminTable headers={["Animal", "Rescue Date", "Location", { label: "Actions", align: "right" }]}>
          <AdminTableRow>
            <AdminTableCell>
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-secondary/5 overflow-hidden relative border border-secondary/5">
                  <Image 
                    alt="Buddy" 
                    className="object-cover" 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150" 
                    fill
                  />
                </div>
                <span className="font-black text-secondary text-base">Buddy</span>
              </div>
            </AdminTableCell>
            <AdminTableCell className="font-bold text-secondary/50">Oct 12, 2023</AdminTableCell>
            <AdminTableCell className="font-bold text-secondary/50">Downtown Park</AdminTableCell>
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
          <AdminTableRow>
            <AdminTableCell>
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-secondary/5 overflow-hidden relative border border-secondary/5">
                  <Image 
                    alt="Luna" 
                    className="object-cover" 
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150" 
                    fill
                  />
                </div>
                <span className="font-black text-secondary text-base">Luna</span>
              </div>
            </AdminTableCell>
            <AdminTableCell className="font-bold text-secondary/50">Nov 05, 2023</AdminTableCell>
            <AdminTableCell className="font-bold text-secondary/50">Industrial Area</AdminTableCell>
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
        </AdminTable>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Rescue Record Editor"
        description="Review and update records of animal rescues."
      >
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Animal Name</label>
              <input 
                className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                placeholder="e.g. Buddy" 
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Rescue Date</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all cursor-pointer" 
                  type="date"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Location</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                  placeholder="City or Landmark" 
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Rescue Story</label>
              <textarea 
                className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary/70 transition-all placeholder:text-secondary/20 min-h-[220px]" 
                placeholder="Describe how the rescue happened..." 
              ></textarea>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Evidence Photos</label>
              <div className="border-3 border-dashed border-secondary/10 rounded-[32px] p-12 flex flex-col items-center justify-center text-center bg-secondary/[0.02] group hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all">
                  <CloudUpload size={32} />
                </div>
                <p className="font-black text-secondary text-sm">Upload Rescue Media</p>
                <p className="text-[10px] text-secondary/30 mt-3 uppercase tracking-widest font-black">PNG, JPG, WEBP up to 10MB</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="aspect-square border-2 border-dashed border-secondary/10 rounded-2xl flex items-center justify-center text-secondary/20 hover:border-primary/50 hover:text-primary transition-all cursor-pointer bg-secondary/[0.01]">
                   <Plus size={24} />
                 </div>
               ))}
            </div>
            <div className="pt-10 flex items-center justify-end gap-6 border-t border-secondary/5">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-10 py-4 rounded-xl font-black text-secondary/30 hover:text-secondary hover:bg-secondary/5 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer" 
                type="button"
              >
                Discard
              </button>
              <button className="px-14 py-4 bg-primary hover:bg-secondary hover:text-primary text-secondary rounded-xl font-black shadow-xl shadow-primary/20 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer" type="submit">
                Save Record
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
