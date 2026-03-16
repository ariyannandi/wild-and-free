import React from 'react';
import { MapPin, HelpCircle, Phone, PawPrint } from 'lucide-react';
import Image from 'next/image';

const DropoffInfo = () => {
  return (
    <div className="space-y-6">
      {/* Location Card */}
      <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
        <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 font-display">
          <MapPin className="text-primary" size={24} />
          Where to go
        </h4>
        <div className="mb-6 rounded-lg overflow-hidden h-40 bg-slate-200 relative">
          <Image 
            alt="Map view showing the sanctuary entrance" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYpR3MbqkDNV-HG9W04FSa5bw90GClo28-TcXEARoT0yCWOU1FLfdpsF1g3iVtmSeXTLq74VvM3WgQKN0D49FAzcRXD7-wr4_e6F7kcpY7NQszlaj6MUHt7yKTWOQ7becihrv8JqKWGa2akXHE4Soa9TGdm9E5vKFk8V3lTSMYsTXeAD3M82W2G1VphUBmxqlRQz07dWiTWm8PunqF_0GGQKgbLR84UeHtzgQgLutsl1mW9fM0bOKNKbqs2ocrJ09GV7wL7dYwVRu"
            fill
            className="object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary rounded-full p-2 shadow-lg animate-bounce">
              <PawPrint className="text-black" size={20} />
            </div>
          </div>
        </div>
        <div className="space-y-4 text-sm font-display">
          <div>
            <p className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">Sanctuary Address</p>
            <p className="text-slate-600">1234 Wilderness Lane,<br/>Nature Preserve, ST 56789</p>
          </div>
          <div>
            <p className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">Drop-off Hours</p>
            <p className="text-slate-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-slate-600">Sunday: Closed (Rescue only)</p>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-slate-500 italic text-xs">
              * Please ring the gate bell upon arrival and wait for a staff member to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-primary/10 rounded-xl p-8 border border-primary/20">
        <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 font-display">
          <HelpCircle size={24} />
          Need Help?
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-4 font-display">
          If you have questions about specific items or need directions, don&apos;t hesitate to call our donation hotline.
        </p>
        <a className="flex items-center gap-3 text-slate-900 font-bold hover:underline font-display" href="tel:1-800-WILD-FREE">
          <Phone size={20} />
          1-800-WILD-FREE
        </a>
      </div>
    </div>
  );
};

export default DropoffInfo;
