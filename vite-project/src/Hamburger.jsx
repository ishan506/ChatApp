 import { useState } from "react";

function Ham() {
  const [open, setOpen] = useState(false);
const [search , setSearch] = useState("");
  return (
   
    <nav>
    
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-8 w-8 flex-col items-center justify-center"
      >
              

 {open && (
  
         <div className="absolute left-0.5 top-19 z-50  "
           onClick={(e) => e.stopPropagation()}>
<input className="text-black" type="text" value={search} onChange= {(e)=>setSearch(e.target.value)}/>
          <div className="flex  gap-2">
            <button className="  border-solid bg-purple-500 rounded-2xl  p-0.5 ">All</button>
            <button className="   border-solid bg-purple-500 rounded-2xl  p-0.5">Work</button>
            <button className="   border-solid bg-purple-500 rounded-2xl p-0.5 ">Family</button>
          </div>
        </div>
      )}
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