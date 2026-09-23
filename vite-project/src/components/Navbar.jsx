import { Home, Sparkles ,Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Messageicon from "../assets/messageicon.png";

function Navbar() {
  const [change, setChange] = useState(true);

  function log() {
    setChange(!change);
  }

  const buttonStyle =
    "text-sm px-3 font-semibold flex items-center rounded-3xl overflow-hidden border border-white/20 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 shadow-xl hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-300";

  return (
    <div className="flex items-center justify-between px-2 py-2 bg-[#24164F]">

      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-8 h-8 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          src={Messageicon}
          alt="Profile"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-2.5 md:gap-8 pl-2">

        <Link className="flex items-center gap-1 hover:text-purple-300 p-1">
          <Home size={18} />
          Home
        </Link>

        <Link className="flex items-center gap-1 hover:text-purple-300">
          <Sparkles size={18} />
          Features
        </Link>
<Link className="flex items-center gap-1 hover:text-purple-300">
          < Info size={18} />
          About
        </Link>
        <Link className="flex items-center gap-1 hover:text-purple-300">
          < Mail size={18} />
         Contact
        </Link>
      </div>

      {/* Login */}
      <div className="flex items-center">
        {change ? (
          <button
            onClick={log}
            className={buttonStyle}
          >
            LogIn
          </button>
        ) : (
          <button
            onClick={log}
            className={buttonStyle}
          >
            LogOut
          </button>
        )}
      </div>

    </div>
  );
}

export default Navbar;