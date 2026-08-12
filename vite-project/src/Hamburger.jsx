 import { useState } from "react";

function Ham() {
  const [open, setOpen] = useState(false);

  return (
   
    <nav>
         
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-8 w-8 flex-col items-center justify-center"
      >
        
        {/* Top */}
        <span
          className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />

        {/* Middle */}
        <span
          className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Bottom */}
        <span
          className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>
    </nav>
  );
}

export default Ham;