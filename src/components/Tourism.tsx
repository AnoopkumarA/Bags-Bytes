import React from "react";

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: "/images/image1.png", alt: "Beach View", col: "col-span-1", row: "row-span-1" },
    { id: 2, src: "/images/image2.png", alt: "Hills", col: "col-span-1", row: "row-span-1" },
    { id: 3, src: "/images/image3.png", alt: "Lake View", col: "col-span-1", row: "row-span-2" },
    { id: 4, src: "/images/image4.png", alt: "Boat Ride", col: "col-span-1", row: "row-span-2" },
    { id: 5, src: "/images/image5.png", alt: "Resort", col: "col-span-1", row: "row-span-1" },
    { id: 6, src: "/images/image6.png", alt: "Tea Plantation", col: "col-span-1", row: "row-span-1" },
    { id: 7, src: "/images/image7.png", alt: "Village Walk", col: "col-span-1", row: "row-span-1" },
  ];

  return (
    <div className="bg-navy-900 min-h-screen flex flex-col items-center py-8" id="tourism">
      {/* Title */}
        <h1 className=" text-5xl md:text-7xl font-extrabold mb-10">
        <span 
          className="text-transparent bg-clip-text"
          style={{
          backgroundImage: 'url("/images/image8.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          fontWeight: '1000',
          WebkitBackgroundClip: 'text',
          padding: '0 0.5rem',
          display: 'inline-block',
          letterSpacing: '0.2rem'
          }}
        >
          TOURISM
        </span>
        </h1>

      {/* Grid Layout */}
      <div
      className="grid grid-cols-3 grid-rows-3 gap-2 max-w-3xl mx-auto px-3"
      style={{ gridAutoRows: "140px" }} // Ensures uniform row heights
      >
      {images.map((image) => (
        <div
        key={image.id}
        className={`overflow-hidden rounded-md shadow-lg ${image.col} ${image.row}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
