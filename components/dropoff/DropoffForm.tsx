"use client";

import React, { useState } from 'react';
import { Heart, Calendar } from 'lucide-react';

const DropoffForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    itemTypes: [] as string[],
    description: '',
    dropoffDate: '',
    timeWindow: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const itemOptions = [
    'Pet Food', 'Blankets/Bedding', 'Medical Supplies', 'Toys', 'Other'
  ];

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      itemTypes: prev.itemTypes.includes(option)
        ? prev.itemTypes.filter(item => item !== option)
        : [...prev.itemTypes, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 p-12 shadow-sm text-center">
        <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="text-primary fill-primary" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Complete!</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We&apos;ve received your drop-off schedule. A member of our team might contact you if we need further details.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-slate-900 font-bold hover:underline"
        >
          Schedule another drop-off
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 font-display">
        <Heart className="text-primary" size={24} />
        Donation Details
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Full Name</label>
            <input 
              required
              className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 outline-none border-2 transition-all" 
              placeholder="Jane Doe" 
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Email Address</label>
            <input 
              required
              className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 outline-none border-2 transition-all" 
              placeholder="jane@example.com" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
            <input 
              required
              className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 outline-none border-2 transition-all" 
              placeholder="(555) 000-0000" 
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-700">Type of Items</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {itemOptions.map(option => (
              <label 
                key={option}
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
                  formData.itemTypes.includes(option) ? 'border-primary bg-primary/5' : 'border-slate-100 hover:bg-slate-50'
                }`}
              >
                <input 
                  className="rounded text-primary focus:ring-primary border-slate-300" 
                  type="checkbox"
                  checked={formData.itemTypes.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">Brief Description of Items</label>
          <textarea 
            className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary p-4 outline-none border-2 transition-all" 
            placeholder="Tell us a bit about what you're bringing..." 
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Preferred Drop-off Date</label>
            <input 
              required
              className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 outline-none border-2 transition-all" 
              type="date"
              value={formData.dropoffDate}
              onChange={(e) => setFormData({...formData, dropoffDate: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Preferred Time Window</label>
            <select 
              required
              className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 bg-white outline-none border-2 transition-all"
              value={formData.timeWindow}
              onChange={(e) => setFormData({...formData, timeWindow: e.target.value})}
            >
              <option disabled value="">Select a window</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 7 PM)</option>
            </select>
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-primary hover:brightness-95 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Drop-off'}
          <Calendar size={20} />
        </button>
      </form>
    </div>
  );
};

export default DropoffForm;
