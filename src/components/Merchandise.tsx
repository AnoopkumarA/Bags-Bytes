import React from 'react';

const Merchandise: React.FC = () => {
  const products = [
    { id: 1, image: '/images/books.png', alt: 'Book', className: 'cursor-pointer' },
    { id: 2, image: '/images/bag.png', alt: 'Tote Bag', className: 'cursor-pointer' },
    { id: 3, image: '/images/tshirt.png', alt: 'T-Shirt', className: 'cursor-pointer' },
    { id: 4, image: '/images/cards.png', alt: 'Cards', className: 'cursor-pointer' },
    { id: 5, image: '/images/pins.png', alt: 'Pins', className: 'cursor-pointer' },
  ];

  return (
    <div className="bg-navy-900 text-white py-20 mt-72 relative -top-56">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-5 select-none pointer-events-none">
            <h1 className="font-semibold whitespace-nowrap text-[3rem] md:text-[8rem]">
              MERCHANDISE
            </h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Merchandise</h2>
        </div>

        <div className="flex justify-center gap-16 flex-wrap">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="relative group"
            >
              {/* Main container with transition */}
              <div className="relative top-16 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden transition-all duration-150 
                            group-hover:rounded-lg group-hover:scale-150 group-hover:shadow-[0_0_30px_rgba(67,30,153,1)]">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                            transition-opacity duration-150 bg-transparent border-4 border-purple-900 blur-xl -z-10
                            group-hover:shadow-[0_0_30px rgba(67,30,153,1)]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
