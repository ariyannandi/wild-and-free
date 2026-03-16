"use client";

import { useState } from "react";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import { Plus, Pencil, Trash2, Image as ImageIcon, Sparkles } from "lucide-react";

export default function ManageBlogPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-black text-secondary tracking-tight">Blog Management</h1>
          <p className="text-secondary/50 font-medium mt-2">Create, edit, and organize your educational content and updates.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-secondary px-8 py-3.5 rounded-xl font-black flex items-center gap-2 hover:bg-secondary hover:text-primary transition-all shadow-lg shadow-primary/20 cursor-pointer group"
        >
          <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          Add Post
        </button>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-[40px] shadow-sm border border-secondary/10 overflow-hidden">
        <div className="p-8 border-b border-secondary/5 flex flex-wrap items-center justify-between gap-4 bg-secondary/[0.02]">
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 bg-secondary text-primary rounded-xl text-xs font-black uppercase tracking-widest">All Posts</button>
            <button className="px-5 py-2 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Drafts</button>
            <button className="px-5 py-2 bg-white text-secondary/40 border border-secondary/10 rounded-xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-secondary transition-all cursor-pointer">Published</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Sort:</span>
            <select className="text-sm font-black text-secondary/70 border-none bg-white rounded-xl px-4 py-2 focus:ring-4 focus:ring-primary/10 shadow-sm outline-none cursor-pointer">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>
        <AdminTable headers={["Post Title", "Author", "Date", "Status", { label: "Actions", align: "right" }]}>
          {[
            { title: "Winter Care for Wild Birds", author: "Sarah Jenkins", date: "Oct 24, 2023", status: "success", statusText: "Published" },
            { title: "The Importance of Urban Wildlife", author: "Mark Wilson", date: "Oct 22, 2023", status: "warning", statusText: "Draft" },
            { title: "Volunteer Spotlight: October", author: "Alice Morgan", date: "Oct 20, 2023", status: "success", statusText: "Published" },
            { title: "New Rescue Van Secured!", author: "Sarah Jenkins", date: "Oct 15, 2023", status: "success", statusText: "Published" },
          ].map((post, i) => (
            <AdminTableRow key={i}>
              <AdminTableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-black text-secondary leading-tight">{post.title}</span>
                  <span className="text-[10px] text-secondary/30 font-black uppercase tracking-wider">/blog/{post.title.toLowerCase().replace(/ /g, '-')}</span>
                </div>
              </AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/50">{post.author}</AdminTableCell>
              <AdminTableCell className="font-bold text-secondary/30">{post.date}</AdminTableCell>
              <AdminTableCell>
                <Badge variant={post.status as any}>{post.statusText}</Badge>
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
          <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Showing 1 to 4 of 86 posts</p>
          <Pagination currentPage={1} totalPages={9} onPageChange={() => { }} />
        </div>
      </div>

      {/* Post Editor Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        title="Impact Post Editor"
        description="Compose your next impactful story."
      >
        <form className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Post Title</label>
                <input
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-6 py-5 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-black text-xl text-secondary placeholder:text-secondary/20"
                  placeholder="Enter a catchy title..."
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Content</label>
                <textarea
                  className="w-full bg-secondary/5 border-transparent rounded-2xl px-6 py-6 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-secondary/70 min-h-[450px] placeholder:text-secondary/20"
                  placeholder="Share your story with the world..."
                ></textarea>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-5">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Publishing Settings</label>
                <div className="bg-secondary/5 p-8 rounded-[32px] border border-secondary/5 space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Category</label>
                    <select className="w-full bg-white border-transparent rounded-xl py-3 px-4 text-sm font-black text-secondary focus:ring-4 focus:ring-primary/10 cursor-pointer outline-none">
                      <option>Rescue Updates</option>
                      <option>Education</option>
                      <option>Volunteer Stories</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Publication Date</label>
                    <input className="w-full bg-white border-transparent rounded-xl py-3 px-4 text-sm font-black text-secondary focus:ring-4 focus:ring-primary/10 cursor-pointer outline-none" type="date" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Tags</label>
                    <input className="w-full bg-white border-transparent rounded-xl py-3 px-4 text-sm font-black text-secondary focus:ring-4 focus:ring-primary/10 outline-none placeholder:text-secondary/20" placeholder="wildlife, rescue, tips" type="text" />
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <label className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] ml-1">Featured Image</label>
                <div className="border-3 border-dashed border-secondary/10 rounded-[32px] p-8 text-center hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer h-60 flex flex-col items-center justify-center bg-secondary/[0.02]">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all mb-4">
                    <ImageIcon size={32} />
                  </div>
                  <p className="text-[11px] font-black text-secondary uppercase tracking-[0.2em]">Upload Cover Image</p>
                  <p className="text-[10px] font-bold text-secondary/30 mt-2">1200x630px recommended</p>
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
              Save Draft
            </button>
            <button className="px-14 py-4 bg-primary hover:bg-secondary hover:text-primary text-secondary rounded-xl font-black shadow-xl shadow-primary/20 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer flex items-center gap-2" type="submit">
              <Sparkles size={16} strokeWidth={3} />
              Publish Post
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
