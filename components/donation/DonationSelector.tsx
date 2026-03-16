"use client";

import React, { useState } from 'react';
import { LucideHeart, Landmark } from 'lucide-react';

const DonationSelector = () => {
  const [amount, setAmount] = useState('500');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const presetAmounts = ['500', '1000', '2500'];

  return (
    <div className="bg-white rounded-xl shadow-xl border-2 border-secondary p-8">
      <div className="flex items-center gap-3 mb-8">
        <LucideHeart className="text-3xl text-primary fill-primary" size={32} />
        <h2 className="text-2xl font-bold text-secondary">Monetary Donation</h2>
      </div>

      <div className="flex bg-white border border-secondary p-1 rounded-xl mb-8 max-w-xs">
        <button 
          onClick={() => setFrequency('one-time')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${frequency === 'one-time' ? 'bg-secondary text-white shadow-sm' : 'text-secondary opacity-60 hover:opacity-100'}`}
        >
          One-time
        </button>
        <button 
          onClick={() => setFrequency('monthly')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-secondary text-white shadow-sm' : 'text-secondary opacity-60 hover:opacity-100'}`}
        >
          Monthly
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`py-4 border-2 rounded-xl font-bold transition-all ${amount === preset ? 'border-primary bg-primary text-secondary' : 'border-secondary hover:bg-primary/10'}`}
          >
            ₹{preset}
          </button>
        ))}
        <div className="relative">
          <input
            className="w-full py-4 border-2 border-secondary rounded-xl font-bold text-center focus:ring-primary focus:border-primary bg-transparent text-secondary"
            placeholder="Custom"
            type="text"
            value={!presetAmounts.includes(amount) ? amount : ''}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.01] transition-all">
          <Landmark size={20} />
          Donate with Netbanking
        </button>
      </div>
    </div>
  );
};

export default DonationSelector;
