import '../App.css'
export function GridBackgroundDemo() {
    return (
      <div className="h-[23rem] md:h-[29rem] w-full bg-navy-900  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] bg-grid-custom relative flex items-center justify-center md:-mt-96 top-48  ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-navy-900 [mask-image:radial-gradient(ellipse_at_center,transparent_-60%,black)]"></div>
      
    </div>
    );
  }
  
  