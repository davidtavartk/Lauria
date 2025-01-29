import React from 'react';

const OurStats = () => {
  return (
    <div className="flex flex-row w-full mt-24 h-[405px] shrink-0 bg-black bg-opacity-65 items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center  p-4 space-y-4">
            <p className="text-blue-400 font-sans text-xs font-normal leading-8 tracking-widest uppercase">
                Our Stats
            </p>
            <h2 className="text-white font-sans text-4xl font-black leading-snug">
                Our Business Number
            </h2>
            <p className="text-white font-sans text-base font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="w-1/2 flex justify-center items-center space-x-4">
            <div className="w-1/2 flex flex-col justify-between p-4 space-y-4">
                <h1 className="text-primary font-sans text-6xl font-black leading-none">
                    30 +
                </h1>
                <h2 className="text-white font-sans text-2xl font-black leading-tight">
                    Our Branch
                </h2>
                <p className="text-white font-sans text-base font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
            <div className="w-1/2 flex flex-col justify-between p-4 space-y-4">
                <h1 className="text-primary font-sans text-6xl font-black leading-none">
                    150 +
                </h1>
                <h2 className="text-primary font-sans text-2xl font-black leading-tight">
                    Team Member
                </h2>
                <p className="text-white font-sans text-base font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    </div>
  );
};

export default OurStats;
