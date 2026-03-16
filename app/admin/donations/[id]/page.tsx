"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Mail, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Download, 
  Send, 
  RotateCcw,
  DollarSign,
  TrendingUp,
  Landmark,
  User,
  ExternalLink
} from "lucide-react";
import Badge from "@/components/Badge";

// Mock data for a single donation
const mockDonation = {
  id: "TXN-7829102",
  donor: {
    name: "Michael Thompson",
    email: "michael.t@example.com",
    phone: "+1 (555) 987-6543",
    type: "Individual",
    totalDonated: "$12,450.00",
    joinDate: "Jan 12, 2021",
  },
  transaction: {
    amount: "$250.00",
    date: "Oct 24, 2023",
    time: "02:15 PM",
    method: "Stripe (Credit Card)",
    gatewayId: "ch_3NqL2yJnvX7L",
    status: "success",
    statusText: "Completed",
    allocation: "Wildfire Rescue Relief",
    taxDeductible: "Yes",
  },
  history: [
    { date: "Oct 24, 2023", time: "02:15 PM", event: "Transaction Authorized", detail: "Auth code: 829102" },
    { date: "Oct 24, 2023", time: "02:16 PM", event: "Payment Processed", detail: "Settled via Stripe" },
    { date: "Oct 24, 2023", time: "02:16 PM", event: "Thank You Email Sent", detail: "To michael.t@example.com" },
  ]
};

export default function DonationDetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="space-y-10 pb-20 font-sans">
      {/* Header / Breadcrumbs */}
      <div className="flex flex-col gap-6">
        <Link 
          href="/admin/donations" 
          className="flex items-center gap-2 text-secondary/40 hover:text-secondary transition-all w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to All Donations</span>
        </Link>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-4xl font-black text-secondary tracking-tight">Transaction Summary</h1>
              <Badge variant={mockDonation.transaction.status as any}>{mockDonation.transaction.statusText}</Badge>
            </div>
            <p className="text-secondary/50 font-medium">Internal ID: {id} · Gateway: {mockDonation.transaction.gatewayId}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-secondary/5 text-secondary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/10 transition-all cursor-pointer group">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Receipt PDF
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 bg-rose-50 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all cursor-pointer group shadow-sm">
              <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              Process Refund
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Col: Financial Data */}
        <div className="lg:col-span-2 space-y-10">
          {/* Main Transaction Card */}
          <section className="bg-secondary p-12 rounded-[48px] text-white relative overflow-hidden shadow-2xl shadow-secondary/20">
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Donation Amount</p>
                      <h2 className="text-6xl font-black tracking-tight">{mockDonation.transaction.amount}</h2>
                   </div>
                   <div className="p-4 bg-white/10 rounded-2xl">
                      <DollarSign size={32} className="text-primary" />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-10 border-t border-white/10">
                   <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Status</p>
                      <p className="font-bold text-emerald-400 flex items-center gap-2">
                         <div className="size-2 bg-emerald-400 rounded-full animate-pulse"></div>
                         Completed
                      </p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Method</p>
                      <p className="font-bold text-white flex items-center gap-2">
                         <CreditCard size={16} className="text-primary" />
                         Stripe Card
                      </p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Allocation</p>
                      <p className="font-bold text-white italic">General Funds</p>
                   </div>
                </div>
             </div>
             
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          </section>

          {/* Transaction Metadata */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-secondary/5">
                <div className="size-12 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary">
                   <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-black text-secondary tracking-tight uppercase italic">Processor Details</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Transaction ID</p>
                   <p className="text-sm font-black text-secondary font-mono">{mockDonation.id}</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Gateway Reference</p>
                   <div className="flex items-center gap-3">
                      <p className="text-sm font-black text-secondary">{mockDonation.transaction.gatewayId}</p>
                      <ExternalLink size={14} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                   </div>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Tax Deductible</p>
                   <Badge variant="success">Yes (80G)</Badge>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Allocated Program</p>
                   <p className="text-sm font-black text-secondary">{mockDonation.transaction.allocation}</p>
                </div>
             </div>
          </section>
        </div>

        {/* Right Col: Donor & History */}
        <div className="space-y-10">
          {/* Donor Card */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm relative overflow-hidden group">
             <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-10">Donor Profile</h3>
             <div className="flex items-center gap-4 mb-8">
                <div className="size-16 bg-secondary rounded-2xl flex items-center justify-center text-primary border border-secondary/10 shadow-inner group-hover:scale-105 transition-transform duration-500">
                   <User size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-black text-secondary tracking-tight">{mockDonation.donor.name}</h4>
                   <p className="text-[10px] font-black text-secondary/30 uppercase tracking-widest">{mockDonation.donor.type}</p>
                </div>
             </div>
             
             <div className="space-y-6 pt-6 border-t border-secondary/5">
                <div className="flex justify-between items-center text-sm">
                   <span className="font-bold text-secondary/30">Lifetime Total</span>
                   <span className="font-black text-emerald-600">{mockDonation.donor.totalDonated}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="font-bold text-secondary/30">Donor Since</span>
                   <span className="font-black text-secondary">{mockDonation.donor.joinDate}</span>
                </div>
             </div>
             
             <button className="w-full mt-10 py-4 bg-secondary text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all">
                View All Donations
             </button>
             
             <div className="absolute -right-4 -top-4 size-32 bg-primary/[0.02] rounded-full blur-3xl group-hover:bg-primary/5 transition-all"></div>
          </section>

          {/* Action History */}
          <section className="bg-white p-10 rounded-[40px] border border-secondary/10 shadow-sm">
             <h3 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-10">Activity Logs</h3>
             <div className="space-y-10 relative">
                <div className="absolute left-[13px] top-2 bottom-2 w-px bg-secondary/10"></div>
                {mockDonation.history.map((item, i) => (
                   <div key={i} className="relative flex gap-6">
                      <div className={`size-7 rounded-full flex items-center justify-center z-10 ${i === 0 ? 'bg-primary text-secondary' : 'bg-white border-2 border-secondary/10 text-secondary/30'}`}>
                         <Clock size={12} />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-black text-secondary">{item.event}</p>
                         <p className="text-[10px] font-bold text-secondary/30 uppercase mt-1 tracking-wider">{item.date} · {item.time}</p>
                         <p className="text-[10px] font-medium text-secondary/50 mt-2">{item.detail}</p>
                      </div>
                   </div>
                ))}
             </div>
          </section>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
             <button className="flex flex-col items-center justify-center gap-3 p-6 bg-secondary/[0.02] border border-secondary/5 rounded-3xl hover:bg-primary/5 hover:border-primary/20 transition-all group">
                <Send size={24} className="text-secondary/20 group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest text-center leading-tight">Send <br/>Receipt</span>
             </button>
             <button className="flex flex-col items-center justify-center gap-3 p-6 bg-secondary/[0.02] border border-secondary/5 rounded-3xl hover:bg-primary/5 hover:border-primary/20 transition-all group">
                <ShieldCheck size={24} className="text-secondary/20 group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest text-center leading-tight">Verify <br/>Tax Status</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
