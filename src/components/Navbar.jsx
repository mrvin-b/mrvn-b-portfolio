import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`transition ease-in-out p-5 fixed w-full ${isScrolled ? `backdrop-blur-md` : `bg-transparent`}`}>
      <div className="flex items-center max-w-[1300px] m-auto">
        <div className="flex-1">
          <span className="font-bold text-4xl text-dark-gray">LOGO</span>
        </div>

        <div className="flex-1 flex justify-center gap-16">
          <span className="text-dark-gray text-lg cursor-pointer">Home</span>

          <span className="text-dark-gray text-lg cursor-pointer">About</span>

          <span className="text-dark-gray text-lg cursor-pointer">Stacks</span>

          <span className="text-dark-gray text-lg cursor-pointer">Projects</span>
        </div>

        <div className="flex-1 flex justify-end">
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
