import React from 'react';

const DonationHero = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWhU61u6etocbtBVyEHkarBrAKHiPtMB-c5BRrKllEBfurVnQdQL3XtayscKhsAc-325A-9z8C905ou42kfxj-7V8jlmtxca-n_2Mr1FsbNVpI0HzRAIXPfnmRQnSj5vSjlwjzTyMqXAD6eCHuoatdJpz0_r-fSMes8NaSG2M_3CW_RaYj8GNgpCENkZUzA7Vy2a6orfKfUx7-hD-Kmwh6dgYAgSf3KNgn7PQ_KwREHT1p3OHzMWbRujS84leIV9Fx--SZKvrajfVy')" }}
      ></div>
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Support Our Mission</h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium">Your contribution directly saves lives and gives every animal a second chance.</p>
      </div>
    </section>
  );
};

export default DonationHero;
