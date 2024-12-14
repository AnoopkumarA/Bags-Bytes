import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-navy-900 text-white py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-5 select-none pointer-events-none">
            <h1 className="font-semibold whitespace-nowrap text-[3rem] md:text-[8rem]">
              SERVICES
            </h1>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center relative z-10">Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Tech Services */}
          <div className="relative md:left-24 md:top-16 text-center md:text-left mx-auto md:mx-0">
            <h3 className="text-3xl md:text-7xl font-normal">
              TECH
              <br />
              <span className="text-purple-500 font-bold text-4xl md:text-6xl">Services</span>
            </h3>
          </div>

          {/* Tliner */}
          <div className="hidden lg:block mx-8 flex-shrink-0">
            <img
              src="/images/line.png"
              alt="Decorative Line"
              className="h-64 w-auto"
            />
          </div>

          {/* Tech Images Container */}
          <div className="relative w-full md:w-[30rem] md:-left-[14rem] mx-auto">
            {/* Laptop Image */}
            <div className="absolute left-5 md:-left-24 top-1/2 -translate-y-1/2 w-20 md:w-32 z-10">
              <img 
                src="/images/laptop.png" 
                alt="Laptop"
                className="relative top-16 w-[8rem] md:w-[10rem] h-auto md:h-[13rem]"
              />
            </div>
            
            {/* Services Image */}
            <img 
              src="/images/services.png" 
              alt="Tech Services"
              className="w-80 md:w-full max-w-[80%] md:max-w-full mx-auto md:mx-0 relative drop-shadow-[0_5px_80px_rgba(6,13,145,0.9)] shadow-[0_0_20px_rgba(6,13,145,1)]"
            />
          </div>
        </div>
        
        {/* Paragraph below images */}
        <div className="mt-8 relative top-6 text-sm md:top-10 md:left-[31rem] w-full md:w-[40rem] text-justify px-4 md:px-0">
          <p className="text-gray-400">"We specialize in web development, crafting intuitive UI/UX designs, and creating 
            eye-catching poster and logo designs to elevate your brand. Additionally, we trade goods for events, functions, and programs, 
            ensuring all your creative and logistical needs are met seamlessly."</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

