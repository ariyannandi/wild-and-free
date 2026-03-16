import React from 'react';

const impactItems = [
  {
    id: '01',
    title: '$25 feeds a dog',
    description: 'Provides nutritious meals for one dog for an entire month.',
  },
  {
    id: '02',
    title: '$50 medical care',
    description: 'Covers essential vaccinations and health checkups.',
  },
  {
    id: '03',
    title: '$100 rescue fund',
    description: 'Contributes to emergency rescue missions for animals in distress.',
  },
];

const ImpactStats = () => {
  return (
    <div className="bg-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 border-2 border-secondary">
      <h3 className="font-black text-secondary mb-6 text-xl uppercase tracking-tighter">Your Impact</h3>
      <ul className="space-y-6">
        {impactItems.map((item) => (
          <li key={item.id} className="flex gap-4">
            <span className="text-3xl font-black text-secondary shrink-0">{item.id}</span>
            <div>
              <h4 className="font-bold text-secondary">{item.title}</h4>
              <p className="text-secondary opacity-80 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactStats;
