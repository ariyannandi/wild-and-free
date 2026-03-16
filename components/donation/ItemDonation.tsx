import React from 'react';
import { LucideDog, LucideWaves, LucideStethoscope, LucideGamepad2 } from 'lucide-react';
import Link from 'next/link';

const itemCategories = [
  {
    title: 'High-quality Pet Food',
    description: 'Sealed bags of dry kibble or wet canned food for cats and dogs.',
    icon: LucideDog,
  },
  {
    title: 'Warm Blankets',
    description: 'Clean blankets, towels, and bedding for our nursery section.',
    icon: LucideWaves,
  },
  {
    title: 'Medical Supplies',
    description: 'First-aid kits, antiseptics, and flea/tick preventatives.',
    icon: LucideStethoscope,
  },
  {
    title: 'Toys & Enrichment',
    description: 'Durable chew toys, scratching posts, and interactive puzzles.',
    icon: LucideGamepad2,
  },
];

const ItemDonation = () => {
  return (
    <div>
      <h2 className="text-3xl font-black text-secondary mb-8">Donate Items (In-Kind)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itemCategories.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border-2 border-secondary shadow-sm flex items-start gap-4 h-full">
            <div className="bg-primary p-3 rounded-lg text-secondary shrink-0">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-secondary">{item.title}</h3>
              <p className="text-secondary opacity-70 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/dropoff">
          <button className="bg-primary text-secondary border-2 border-secondary px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform text-black">
            Schedule a Drop-off
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDonation;
