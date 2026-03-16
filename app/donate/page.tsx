import React from 'react';
import DonationHero from '@/components/donation/DonationHero';
import DonationSelector from '@/components/donation/DonationSelector';
import ItemDonation from '@/components/donation/ItemDonation';
import UPIDonation from '@/components/donation/UPIDonation';
import ImpactStats from '@/components/donation/ImpactStats';

export const metadata = {
  title: 'Donate - Wild and Free NGO',
  description: 'Support our mission to rescue and rehabilitate animals. Every contribution helps save a life.',
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white font-display">
      <DonationHero />
      
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Monetary & Items */}
          <div className="lg:col-span-2 space-y-12">
            <DonationSelector />
            <ItemDonation />
          </div>

          {/* Right Column: UPI & Impact */}
          <div className="space-y-8">
            <UPIDonation />
            <ImpactStats />
          </div>
        </div>
      </main>
    </div>
  );
}
