"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Clock, 
  PawPrint, 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import Badge from "@/components/Badge";

// Mock data for a single request
const mockRequest = {
  id: "1",
  applicant: {
    name: "Alice Morgan",
    email: "alice.m@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Maple Avenue, Springfield, State 54321",
    occupation: "Graphic Designer",
    experience: "Had two dogs previously, both lived to 14 years.",
    livingSituation: "House with fenced yard",
    otherPets: "None",
  },
  animal: {
    name: "Buddy",
    breed: "Golden Retriever",
    id: "GR-001",
    image: "/pets/buddy.jpg", // Placeholder
  },
  status: "warning",
  statusText: "Pending Review",
  submittedDate: "Oct 24, 2023",
  notes: "Applicant seems very enthusiastic and has a great yard for a Golden Retriever.",
  history: [
    { date: "Oct 24, 2023", time: "09:42 AM", event: "Application Submitted", user: "System" },
    { date: "Oct 25, 2023", time: "02:15 PM", event: "Initial Review Started", user: "Admin Sarah" },
  ]
};

export default function AdoptionRequestDetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="space-y-10 pb-20 font-sans">
      {/* Header / Breadcrumbs */}
      <div className="flex flex-col gap-6">
        <Link 
          href="/admin/adoption-requests" 
          className="flex items-center gap-2 text-secondary/40 hover:text-secondary transition-all w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to All Requests</span>
        </Link>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-4xl font-black text-secondary tracking-tight">Request #{id}</h1>
              <Badge variant={mockRequest.status as any}>{mockRequest.statusText}</Badge>
            </div>
            <p className="text-secondary/50 font-medium">Submitted by {mockRequest.applicant.name} on {mockRequest.submittedDate}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-rose-50 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all cursor-pointer group shadow-sm">
              <XCircle size={18} className="group-hover:scale-110 transition-transform" />
              Reject Request
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 bg-secondary text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all cursor-pointer group shadow-xl shadow-secondary/10">
              <CheckCircle2 size={18} className="group-hover:scale-110 transition-transform" />
              Approve for Visit
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Col: Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Applicant Info */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-secondary/5">
                <div className="size-12 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary">
                   <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-black text-secondary tracking-tight uppercase italic">Applicant Profile</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Full Name</p>
                   <p className="text-lg font-black text-secondary">{mockRequest.applicant.name}</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Contact Details</p>
                   <div className="space-y-2">
                      <p className="text-sm font-bold text-secondary/60 flex items-center gap-3">
                         <Mail size={14} className="text-primary" /> {mockRequest.applicant.email}
                      </p>
                      <p className="text-sm font-bold text-secondary/60 flex items-center gap-3">
                         <Phone size={14} className="text-primary" /> {mockRequest.applicant.phone}
                      </p>
                   </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Home Address</p>
                   <p className="text-sm font-bold text-secondary/60 flex items-center gap-3">
                      <MapPin size={14} className="text-primary" /> {mockRequest.applicant.address}
                   </p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Living Situation</p>
                   <p className="text-sm font-black text-secondary">{mockRequest.applicant.livingSituation}</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Experience with Pets</p>
                   <p className="text-sm font-medium text-secondary/70 leading-relaxed">{mockRequest.applicant.experience}</p>
                </div>
             </div>
          </section>

          {/* Animal Interest */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-secondary/5">
                <div className="size-12 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary">
                   <PawPrint size={24} />
                </div>
                <h3 className="text-xl font-black text-secondary tracking-tight uppercase italic">Animal of Interest</h3>
             </div>
             
             <div className="flex items-center gap-8 bg-secondary/[0.02] p-6 rounded-3xl border border-secondary/5">
                <div className="size-24 bg-secondary/10 rounded-2xl overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-secondary/20">
                      <PawPrint size={40} />
                   </div>
                </div>
                <div>
                   <h4 className="text-2xl font-black text-secondary tracking-tight">{mockRequest.animal.name}</h4>
                   <p className="text-sm font-black text-secondary/30 uppercase tracking-widest mt-1">{mockRequest.animal.breed} · ID: {mockRequest.animal.id}</p>
                   <Link href={`/admin/animals`} className="inline-block mt-4 text-[10px] font-black uppercase text-secondary/40 hover:text-primary transition-colors tracking-widest bg-secondary px-4 py-2 rounded-lg">View Animal Profile</Link>
                </div>
             </div>
          </section>
        </div>

        {/* Right Col: Timeline & Notes */}
        <div className="space-y-10">
          {/* Status Timeline */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm">
             <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-10">Application Timeline</h3>
             <div className="space-y-10 relative">
                <div className="absolute left-[13px] top-2 bottom-2 w-px bg-secondary/10"></div>
                {mockRequest.history.map((item, i) => (
                   <div key={i} className="relative flex gap-6">
                      <div className={`size-7 rounded-full flex items-center justify-center z-10 ${i === 0 ? 'bg-primary text-secondary' : 'bg-white border-2 border-secondary/10 text-secondary/30'}`}>
                         <Clock size={12} />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-black text-secondary">{item.event}</p>
                         <p className="text-[10px] font-bold text-secondary/30 uppercase mt-1 tracking-wider">{item.date} · {item.time}</p>
                         <p className="text-[10px] font-black text-primary uppercase mt-2">by {item.user}</p>
                      </div>
                   </div>
                ))}
             </div>
          </section>

          {/* Admin Notes */}
          <section className="bg-secondary p-10 rounded-[40px] text-white">
             <div className="flex items-center gap-2 mb-8">
                <AlertCircle size={16} className="text-primary" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Internal Notes</h3>
             </div>
             <p className="text-sm font-medium text-white/70 leading-relaxed italic">
                "{mockRequest.notes}"
             </p>
             <button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                Edit Notes
             </button>
          </section>
        </div>
      </div>
    </div>
  );
}
