import React, { useState } from "react";

const ArcCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "WHAT WE MADE",
      company: "Company name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "WHAT WE MADE",
      company: "Company name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "WHAT WE MADE",
      company: "Company name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200",
      title: "WHAT WE MADE",
      company: "Company name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet dolore magna aliquam erat volutpat.",
    },
  ];

  return (
    <div className=" bg-navy-900 text-white py-10 px-5 flex flex-col items-center">
      {/* Title */}
      <h1 className=" text-3xl md:text-4xl font-bold mb-12 md:mb-8 text-center animate-float">
        <span className="text-purple-400">Satisfied</span>{' '}
        <span>Clients</span>
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-2 md:flex gap-4 md:gap-0 justify-center items-center perspective-2xl max-w-screen-xl mx-auto">
        {cards.map((card, index) => {
          // Mobile rotations for 2x2 grid
          const mobileRotation = 
            index === 0
              ? "-rotate-6"
              : index === 1
              ? "rotate-6"
              : index === 2
              ? "-rotate-6"
              : "rotate-6";

          // Desktop rotations remain the same
          const desktopRotation =
            index === 0
              ? "md:-rotate-12 md:translate-y-8"
              : index === 1
              ? "md:-rotate-6 md:translate-y-4"
              : index === 2
              ? "md:rotate-6 md:translate-y-4"
              : "md:rotate-12 md:translate-y-8";

          return (
            <div
              key={card.id}
              className={`bg-white text-black w-full md:w-72 rounded-lg shadow-lg p-3 md:p-4 transform 
                ${mobileRotation} ${desktopRotation}
                md:mx-4 mb-4 md:mb-0
                transition-all duration-500 ease-in-out
                hover:shadow-2xl
                ${hoveredCard === card.id ? 'z-10 scale-105' : 'z-0'}
                animate-fadeIn
                hover:animate-card-hover
                cursor-pointer
                backdrop-blur-sm
                bg-opacity-90`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col">
                {/* Image with shimmer effect on hover */}
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover rounded-lg mb-3 md:mb-4 transition-transform duration-500
                      ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}
                      hover:brightness-110`}
                  />
                  {hoveredCard === card.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}
                </div>

                {/* Content with slide-up animation on hover */}
                <div className={`transform transition-all duration-300 ${hoveredCard === card.id ? 'translate-y-[-8px]' : ''}`}>
                  <h2 className="text-base md:text-xl font-bold">{card.title}</h2>
                  <p className="text-gray-500 text-xs md:text-sm">{card.company}</p>
                  <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArcCards;
