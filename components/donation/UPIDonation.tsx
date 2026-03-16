import React from 'react';
import { LucideQrCode } from 'lucide-react';
import Image from 'next/image';

const UPIDonation = () => {
  return (
    <div className="bg-black text-white rounded-xl p-8 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <LucideQrCode className="text-primary" size={24} />
        <h3 className="text-xl font-bold">Donate via UPI</h3>
      </div>
      <div className="bg-white p-4 rounded-xl mb-6 mx-auto w-48 h-48 flex items-center justify-center relative">
        <Image 
          alt="UPI QR Code" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHl59T4gpL2IleyNggnRZF4oYMxfcXXhRfJon8LE65PAVJhTsJ_Dyw0UzD0wLCrO9RoxwoKFbfJ_IKLoj8nwOUwwk078y4G-Yhoi5aHkruhdHyJ8M1lnzZe6MEirHBaKwlyA8SKneipmglho9GIGBOWYNO6F7DyOmqmy-h9rEurWS-NMMupfh1i8ZWJ6sRGdFkVOJW2e2rFzCEDMIzfxW6w0cu05dmD2uwQkQDD5gihIcZq02BwPloWSJSILCCtytKY0wWeRghmAH"
          className="object-contain"
          width={160}
          height={160}
        />
      </div>
      <div className="space-y-4 text-center">
        <div>
          <p className="text-white opacity-60 text-xs uppercase tracking-widest font-bold">UPI ID</p>
          <p className="text-lg font-mono text-primary mt-1 text-wrap break-all">{`wildandfree@okaxis`}</p>
        </div>
        <p className="text-sm text-white opacity-60 italic text-pretty">Scan with any UPI app like GPay, PhonePe, or Paytm.</p>
      </div>
    </div>
  );
};

export default UPIDonation;
