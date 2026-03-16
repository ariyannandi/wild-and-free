import React from 'react';
import Image from 'next/image';

const DropoffHero = () => {
  return (
    <div className="px-6 py-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-slate-200">
          <Image 
            alt="Happy rescued animals in a lush green sanctuary environment" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpO3i4c9EVoInyQidHf38HuZQMTHKp_1p1ajI8cY7nz9rE4QmRx1T87Ol9hGAvoskC42D7sixC4tUSFWXhSnaVU16HUOaEAMQLy58dh_uQOqpLYLFs7wLIHqRWWgG4L950xK82rmEzVdupSX83lvhhw15u-vWtVJSpPbaeBbJP67dQqGGkokpBwEP-Xt9dh-2WxK9j9OaXVIo5ZCqDEX-qhhVYKdGPFK6qvfFN6iGDWO2QN0dSTTup3M3uHZWlsH4T5_nRyqprPzN"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-white text-4xl font-bold mb-2 font-display">Schedule a Drop-off</h1>
            <p className="text-white/90 max-w-2xl text-lg leading-relaxed font-display">
              Thank you for your generous gift. Please let us know when you&apos;d like to drop off your in-kind donations at our sanctuary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropoffHero;
