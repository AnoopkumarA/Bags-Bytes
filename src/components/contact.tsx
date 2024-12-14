import React from 'react';
import '../App.css'

const ContactSection: React.FC = () => {
  return (
    
    <div className="flex flex-col items-center justify-center  bg-transparent text-white relative" id='contact'>
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold ">
        Turning Ideas into <span className="text-purple-400">Websites</span> and<br></br><span className='text-purple-400'> Events</span> <span>into Memories.</span>
        </h1>
        <p className="mb-8 relative top-7  text-[#C1C2D3] text-sm md:text-base">
        Reach out to us today and let's discuss how we can help you achieve your goals.
        </p>
        <a href='https://wa.link/cfy6n7' target='_blank'><button className="flex items-center justify-center mb-28  bg-gradient-button border border-neutral-800 text-white font-bold py-3 px-3 text-sm md:text-base md:px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 relative top-4 left-36">
      Contact Us Now <span className="ml-2">→</span>
    </button></a>
      </div>
    </div>
   
  );
};

export default ContactSection;
