import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Merchandise from './components/Merchandise';
import './App.css'
import Gallery from './components/Tourism';
import ArcCards from './components/ArcCards';
import { GridBackgroundDemo } from './components/gridcomponent';
import Footer from './components/footer';
import ContactSection from './components/contact';



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <div className='relative bottom-16 -mb-72'>
      <Hero />
      <div className='relative -top-28' id="services">
        <Services />
      </div>
      <div className='relative -top-56 md:-top-28' id="merchandise">
        <Merchandise />
      </div>
      <div className="App relative -top-[25.4rem] md:-top-[14rem]">
      <Gallery />
    </div>
    <div className="min-h-screen -top-[39rem] md:-top-32 relative">
      <ArcCards />
    </div>
    <div className='relative '>
    <div className='relative -top-72 md:-top-36 -mt-[38.6rem] md:-mt-[11.6rem] '>
   <GridBackgroundDemo/></div> 
   <div className='relative'>
   <Footer/></div>
   <div className='relative -mt-96'>
   <ContactSection/> </div>
   </div>
   
    </div> 
    </div>
  );
};

export default App;
