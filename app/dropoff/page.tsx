import React from 'react';
import DropoffHero from '@/components/dropoff/DropoffHero';
import DropoffForm from '@/components/dropoff/DropoffForm';
import DropoffInfo from '@/components/dropoff/DropoffInfo';

export const metadata = {
  title: 'Schedule a Drop-off - Wild and Free NGO',
  description: 'Thank you for your generous gift. Schedule a time to drop off your in-kind donations at our sanctuary.',
};

export default function DropoffPage() {
  return (
    <div className="min-h-screen bg-white font-display">
      <main className="flex-1">
        <DropoffHero />
        
        <div className="px-6 pb-20 lg:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <DropoffForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1">
              <DropoffInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
