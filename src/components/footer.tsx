

const Footer = () => {
  return (
    <footer className="-mt-48 w-full bg-[#0b0c1d] py-4 px-4 md:px-12 lg:px-52 text-white relative border-t border-white/5">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-1 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="border border-white/5"
            style={{ width: "8.33%", height: "100%" }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* Copyright */}
        <div className="text-sm md:text-base text-gray-400 text-center md:text-left">
          Copyright &copy;2024 Bags & Bytes
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
             <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
              alt="LinkedIn"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
          <a
            href="#" 
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
          <a
            href="#" 
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="X (Twitter)"
          >
             <img
              src="https://img.icons8.com/ios-filled/50/ffffff/x.png"
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
