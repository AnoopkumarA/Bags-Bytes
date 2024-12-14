import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="min-h-screen pt-16 bg-navy-900 text-white relative flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="relative aspect-square max-w-4xl mx-auto">
          {/* Center Content */}
          <div className="absolute top-[14rem] md:top-[21.7rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h1 className="text-3xl md:text-5xl font-medium relative">
              <span className="absolute left-[3px] -top-[2.5px] text-white opacity-100 z-0">
                BAGS
                <br />
                &
                <br />
                BYTES
              </span>
              <span className="relative z-10 text-transparent stroke-white [-webkit-text-stroke:0.8px_white]">
                BAGS
                <br />
                &
                <br />
                BYTES
              </span>
            </h1>
          </div>
          
          {/* Images in circle - With responsive positioning */}
          <div className="absolute w-full h-full">
            {/* Top Image */}
            <div className="absolute md:top-14 md:left-[24rem] top-8 left-1/2 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/6 w-24 md:w-36 h-auto">
              <img src="/images/store.png" alt="Store Display" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
            
            {/* Right Images */}
            <div className="absolute md:top-[7rem] md:right-32 top-1/4 right-4 md:translate-x-1/4 w-20 md:w-40 h-auto md:h-40">
              <img src="/images/house.png" alt="Modern House" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
            <div className="absolute md:top-[24rem] md:right-20 top-[59%] right-2 md:translate-x-1/4 w-20 h-24 md:w-36 md:h-auto">
              <img src="/images/landscape.png" alt="Scenic View" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
            
            {/* Bottom Image */}
            <div className="absolute md:bottom-[14rem] md:left-[31rem] bottom-8 left-1/2 -translate-x-1/2 md:-translate-x-1/2 md:translate-y-1/6 w-28 md:w-40 h-auto">
              <img src="/images/dashboard.png" alt="Dashboard" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
            
            {/* Left Images */}
            <div className="absolute md:top-[12.7rem] md:left-16 top-1/4 left-4 md:-translate-x-1/4 w-24 md:w-36 h-auto">
              <img src="/images/logo.png" alt="Brand Logo" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
            <div className="absolute  md:top-[27.6rem] md:left-36 top-[59%] left-2 md:-translate-x-1/4 w-28 h-20 md:w-48 md:h-auto">
              <img src="/images/ui.png" alt="Brand Logo" className="w-full h-full object-cover rounded-md shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

