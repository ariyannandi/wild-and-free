"use client";

import { Send, SendHorizonal } from "lucide-react";

export default function VolunteerForm() {
  return (
    <form action="#" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-secondary/80">Full Name</span>
          <input className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none transition-all" placeholder="John Doe" type="text" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-secondary/80">Email Address</span>
          <input className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none transition-all" placeholder="john@example.com" type="email" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-secondary/80">Phone Number</span>
          <input className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none transition-all" placeholder="(555) 000-0000" type="tel" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-secondary/80">City</span>
          <input className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none transition-all" placeholder="Your City" type="text" />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-secondary/80">General Availability</span>
        <select className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none cursor-pointer transition-all">
          <option value="">Select your availability</option>
          <option value="weekdays">Weekdays (M-F)</option>
          <option value="weekends">Weekends (Sat-Sun)</option>
          <option value="flexible">Flexible / Remote</option>
          <option value="evenings">Evenings only</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold text-secondary/80">Skills &amp; Interests (Select all that apply)</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">Animal Handling</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">Photography</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">Education</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">Construction</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">IT/Admin</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="rounded text-primary focus:ring-primary size-5 bg-secondary accent-primary" type="checkbox" />
            <span className="text-sm group-hover:text-primary transition-colors">Gardening</span>
          </label>
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-bold text-secondary/80">Why do you want to volunteer with Wild and Free?</span>
        <textarea className="rounded-xl border border-secondary bg-white focus:ring-primary focus:border-primary text-base p-3 outline-none transition-all" placeholder="Tell us about your passion for wildlife..." rows={4}></textarea>
      </label>

      <button className="w-full bg-primary hover:bg-secondary hover:text-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-secondary" type="submit">
        Submit Registration
        <span className="material-symbols-outlined font-black"><SendHorizonal /></span>
      </button>
    </form>
  );
}
