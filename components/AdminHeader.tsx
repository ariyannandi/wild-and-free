import Image from "next/image";
import { Search, Bell, Settings } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-secondary/10 bg-white/90 sticky top-0 backdrop-blur-md z-10 w-full">
      <div className="flex items-center gap-4">
        {/* Title removed as requested */}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative min-w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40 shrink-0" size={18} />
          <input 
            className="w-full bg-secondary/5 border border-transparent rounded-xl py-2.5 pl-10 pr-4 text-sm focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 text-secondary outline-none transition-all placeholder:text-secondary/30 placeholder:font-medium" 
            placeholder="Search dashboard, records, or logs..." 
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <button className="size-11 flex items-center justify-center rounded-xl bg-secondary/5 text-secondary/60 hover:bg-secondary hover:text-white transition-all cursor-pointer">
            <Bell size={20} />
          </button>
          <button className="size-11 flex items-center justify-center rounded-xl bg-secondary/5 text-secondary/60 hover:bg-secondary hover:text-white transition-all cursor-pointer">
            <Settings size={20} />
          </button>
        </div>
        <div className="size-11 rounded-full border-2 border-primary overflow-hidden relative shadow-md shadow-primary/10">
          <Image 
              className="object-cover" 
              alt="Portrait of the administrator" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEPKCFqK9J78fnkfm2tDDiDiOBALECaF1mQkw35bJaPZ8S_XuRW0vQeP_MWYDMaMO8TdDVJc0PauzeWRjBKDgN5WxJwkDaSaAJMDRB1UGpIYNGT2gyup_zkQCE1E_5x739tPf0iPM0enktT1w0zWIA4j2BBBbzqnO_OKh5tDQ7yZ9M57EqgvNLH7Nh83vj1uDmSb1EndpLTLck42emeCa-Sgk0GELYgEjUZ-2PYygyPPbfQJM5EJOb-WvXZwai1VbjTnie_gxehSq" 
              fill
          />
        </div>
      </div>
    </header>
  );
}
