"use client";

import { useState } from "react";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import { Plus, Pencil, Trash2, ImagePlus } from "lucide-react";

export default function ManageAnimalsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">Manage Animals</h1>
          <p className="text-secondary/50 font-medium mt-2">Control the database of rescues and animals available for adoption.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/20 cursor-pointer group"
        >
          <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          Add Animal
        </button>
      </div>

      {/* Animals Table */}
      <div className="bg-white rounded-[40px] shadow-sm border border-secondary/10 overflow-hidden">
        <div className="p-8 border-b border-secondary/5 flex flex-wrap items-center justify-between gap-4 bg-secondary/[0.02]">
          <div className="flex items-center gap-3">
             <button className="px-5 py-2 bg-secondary text-primary rounded-xl text-xs font-black uppercase tracking-widest">All Animals</button>
             <button className="px-5 py-2 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Available</button>
             <button className="px-5 py-2 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Adopted</button>
          </div>
        </div>
        <AdminTable headers={["Animal", "Species", "Status", { label: "Actions", align: "right" }]}>
          {[
            { name: "Cooper", species: "Beagle", status: "success", statusText: "Available", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=150" },
            { name: "Luna", species: "Tabby Cat", status: "info", statusText: "Adopted", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150" },
            { name: "Oliver", species: "Red Fox", status: "warning", statusText: "Rehabilitating", img: "https://images.unsplash.com/photo-1516934024742-b461fbc4760e?auto=format&fit=crop&w=150" },
            { name: "Milo", species: "Beagle", status: "success", statusText: "Available", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150" },
          ].map((animal, i) => (
            <AdminTableRow key={i}>
              <AdminTableCell>
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl overflow-hidden bg-secondary/5 relative border border-secondary/5">
                    <Image src={animal.img} alt={animal.name} fill className="object-cover" />
                  </div>
                  <span className="font-black text-secondary text-base">{animal.name}</span>
                </div>
              </AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/50">{animal.species}</AdminTableCell>
              <AdminTableCell>
                <Badge variant={animal.status as any}>{animal.statusText}</Badge>
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
        <div className="p-8 border-t border-secondary/5 flex items-center justify-between bg-secondary/[0.01]">
           <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Showing 1 to 4 of 142 animals</p>
           <Pagination currentPage={1} totalPages={15} onPageChange={() => {}} />
        </div>
      </div>

      {/* Animal Add Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        title="Animal Profile Editor"
        description="Provide accurate details for potential adopters."
      >
        <form className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Animal Name</label>
                <input 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                  placeholder="e.g. Milo" 
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Species/Breed</label>
                  <input 
                    className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                    placeholder="e.g. Beagle" 
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Age</label>
                  <input 
                    className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-secondary transition-all placeholder:text-secondary/20" 
                    placeholder="e.g. 2 years" 
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Description</label>
                <textarea 
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary/70 transition-all placeholder:text-secondary/20 min-h-[180px]" 
                  placeholder="Tell us about the animal's personality..." 
                ></textarea>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Current Status</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Available', 'Adopted', 'Rehabilitating', 'On Hold'].map((status) => (
                    <label key={status} className="flex items-center gap-3 p-5 bg-secondary/5 border-2 border-transparent rounded-2xl cursor-pointer hover:bg-white hover:border-primary transition-all group">
                      <input type="radio" name="status" className="size-5 text-primary focus:ring-primary border-secondary/20 cursor-pointer" />
                      <span className="text-sm font-black text-secondary/40 group-hover:text-secondary transition-colors">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Animal Photos</label>
                <div className="border-3 border-dashed border-secondary/10 rounded-[32px] p-12 flex flex-col items-center justify-center text-center bg-secondary/[0.02] group hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                   <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all mb-4">
                     <ImagePlus size={32} />
                   </div>
                   <p className="text-[11px] font-black text-secondary uppercase tracking-[0.2em]">Upload Profile Photo</p>
                   <p className="text-[10px] font-bold text-secondary/30 mt-2">Drag and drop or click to browse</p>
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
              Discard Changes
            </button>
            <button className="px-14 py-4 bg-primary hover:bg-secondary hover:text-primary text-secondary rounded-xl font-black shadow-xl shadow-primary/20 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer" type="submit">
              Save Animal Profile
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
