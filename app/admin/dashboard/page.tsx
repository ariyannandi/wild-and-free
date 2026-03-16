import StatsCard from "@/components/StatsCard";
import AdminTable, { AdminTableRow, AdminTableCell } from "@/components/AdminTable";
import Badge from "@/components/Badge";
import { 
  Stethoscope, 
  PawPrint, 
  Heart, 
  CreditCard, 
  PlusCircle, 
  FileText, 
  CheckCircle, 
  RefreshCw,
  ArrowRight
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Rescues" 
          value="1,248" 
          change="12%" 
          trend="up" 
          icon={Stethoscope} 
        />
        <StatsCard 
          title="Active Animals" 
          value="84" 
          change="5%" 
          trend="up" 
          icon={PawPrint} 
        />
        <StatsCard 
          title="Adoption Rate" 
          value="92%" 
          change="2%" 
          trend="up" 
          icon={Heart} 
        />
        <StatsCard 
          title="Monthly Donations" 
          value="$12,450" 
          change="3%" 
          trend="down" 
          icon={CreditCard} 
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Adoption Requests */}
        <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-secondary/10 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-secondary">Pending Adoptions</h3>
            <button className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer group">
              Full Record <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <AdminTable headers={["Animal", "Applicant", "Date Submitted", "Status"]}>
            <AdminTableRow>
              <AdminTableCell>
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-secondary/5 overflow-hidden"></div>
                  <span className="font-bold text-secondary">Luna (Husky)</span>
                </div>
              </AdminTableCell>
              <AdminTableCell>Jessica Jenkins</AdminTableCell>
              <AdminTableCell>Oct 24, 2023</AdminTableCell>
              <AdminTableCell><Badge variant="warning">Reviewing</Badge></AdminTableCell>
            </AdminTableRow>
            <AdminTableRow>
              <AdminTableCell>
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-secondary/5 overflow-hidden"></div>
                  <span className="font-bold text-secondary">Cooper (Golden)</span>
                </div>
              </AdminTableCell>
              <AdminTableCell>Robert T. Wilson</AdminTableCell>
              <AdminTableCell>Oct 23, 2023</AdminTableCell>
              <AdminTableCell><Badge variant="success">Approved</Badge></AdminTableCell>
            </AdminTableRow>
            <AdminTableRow>
              <AdminTableCell>
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-secondary/5 overflow-hidden"></div>
                  <span className="font-bold text-secondary">Milo (Siamese)</span>
                </div>
              </AdminTableCell>
              <AdminTableCell>Emily S. Davis</AdminTableCell>
              <AdminTableCell>Oct 22, 2023</AdminTableCell>
              <AdminTableCell><Badge variant="danger">Waitlisted</Badge></AdminTableCell>
            </AdminTableRow>
          </AdminTable>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-[40px] p-10 border border-secondary/10 shadow-sm relative overflow-hidden">
          <h3 className="text-2xl font-black text-secondary mb-8">Recent Activity</h3>
          <div className="space-y-8 relative z-10">
            {[
              { text: "New rescue: Injured Red Fox (Portland)", time: "2 hours ago", icon: PlusCircle, color: "text-emerald-500" },
              { text: "Blog published: 'Winter Care for Seniors'", time: "5 hours ago", icon: FileText, color: "text-primary" },
              { text: "Donation received from Archer Fdn ($2k)", time: "Yesterday", icon: CheckCircle, color: "text-emerald-500" },
              { text: "Server maintenance: Success Story DB", time: "Yesterday", icon: RefreshCw, color: "text-secondary/20" },
            ].map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className={`size-12 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0 ${activity.color}`}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary leading-tight">{activity.text}</p>
                    <p className="text-xs font-bold text-secondary/30 mt-1 uppercase tracking-wider">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
