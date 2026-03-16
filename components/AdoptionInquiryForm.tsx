"use client";

import { useState } from "react";

interface AdoptionInquiryFormProps {
  animalId: string;
  animalName: string;
}

export default function AdoptionInquiryForm({ animalId, animalName }: AdoptionInquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    otherPets: "No, I don't have other pets",
    homeEnvironment: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your interest! An adoption counselor will reach out to you within 48 hours.");
  };

  return (
    <section className="mt-24 pt-24 border-t border-black/5" id="adoption-form">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary bg-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
            Take the Lead
          </span>
          <h2 className="text-5xl font-black mb-4 tracking-tighter italic uppercase">Adopt {animalName}</h2>
          <p className="text-black/40 font-medium max-w-xl mx-auto">
            Ready to give {animalName} the home they deserve? Complete the inquiry form below.
          </p>
        </div>
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-black/5 border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Full Name</label>
            <input 
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-bold transition-all placeholder:text-black/10" 
              placeholder="Jane Doe" 
              type="text"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Email Address</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-bold transition-all placeholder:text-black/10" 
              placeholder="jane@example.com" 
              type="email"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Phone Number</label>
            <input 
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-bold transition-all placeholder:text-black/10" 
              placeholder="(555) 000-0000" 
              type="tel"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Current City</label>
            <input 
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-bold transition-all placeholder:text-black/10" 
              placeholder="Seattle" 
              type="text"
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Do you have other pets?</label>
            <select 
              name="otherPets"
              value={formData.otherPets}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-bold transition-all cursor-pointer"
            >
              <option value="No, I don't have other pets">No, I don't have other pets</option>
              <option value="Yes, I have one or more dogs">Yes, I have one or more dogs</option>
              <option value="Yes, I have one or more cats">Yes, I have one or more cats</option>
              <option value="Yes, I have both dogs and cats">Yes, I have both dogs and cats</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Home Environment</label>
            <textarea 
              required
              name="homeEnvironment"
              value={formData.homeEnvironment}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-medium transition-all placeholder:text-black/10 min-h-[120px]" 
              placeholder="Tell us about your home, yard, and family members..." 
              rows={3}
            ></textarea>
          </div>
          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 ml-1">Why adopt {animalName}?</label>
            <textarea 
              required
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-black/5 bg-black/[0.02] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none px-6 py-4 text-black font-medium transition-all placeholder:text-black/10 min-h-[160px]" 
              placeholder="What makes him the perfect addition to your family?" 
              rows={4}
            ></textarea>
          </div>
          <div className="md:col-span-2 pt-6">
            <button className="w-full bg-primary hover:bg-black hover:text-primary text-black py-6 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 cursor-pointer" type="submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
