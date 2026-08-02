 import {
  MessageCircle,
  Moon,
  Home,
  Sparkles,
  Info,
  Mail,
  Lock,
  Star,
} from "lucide-react";
import Messageicon from "./assets/messageicon.png";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
function App() {
  
  const [change, setChange] = useState(true);
  const [changes, setChanges] = useState(true);
  function log() {
    setChange(!change);
  }
  function mode() {
    setChanges(!changes);
  }   
  const buttonStyle =
 "flex items-center rounded-3xl overflow-hidden border border-white/20 bg-linear-to-r from-violet-500 via-fuchsia-500 to-indigo-500 shadow-xl hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-300"
  return (
    <>

      <div
        className= {`min-h-screen font-['Nunito']   font-bold text-white  ${
          changes ?   "min-h-screen bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF]": "bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF] "
        }`}
      >
        <div className=" flex items-center justify-between px-6 py-3 bg-[#2E1A66] rounded-2xl m-3">
          <div className=" flex-row md:flex-col flex justify-between items-center px-2     ">
            <div className="flex items-center gap-3">
              <img className="w-8 h-8  rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src={Messageicon} alt="Profile" />
<h1 className="pr-0.5">ChatApp </h1>
              {/* <div className="flex gap-18 text-1xl md:text-2xl lg:text-3xl" > */}
              
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 md:gap-8 pl-2">
               <Link className="flex items-center gap-1 hover:text-purple-300 p-1">
                <Home  size={18} />Home
                </Link>
     <Link className="flex items-center gap-1 hover:text-purple-300">
      <Sparkles size={18}/>
      Features
    </Link>
 <Link className="flex items-center gap-1 hover:text-purple-300"> <Info size={18} /> About</Link>
 <Link className="flex items-center gap-1 hover:text-purple-300"><Mail size={18} />Contact</Link>
            </div>
            
       <div className="flex items-center pl-16 ">
  <Moon 
    size={22}
    onClick={mode}
    className="cursor-pointer hover:text-purple-300 mr-5 "
  />

   
 
              {change ? (
                <button
                  onClick={log}
                       
  className={buttonStyle}
>  
                 
                   <Lock size={18} />
<span>LogIn</span>
                </button>
              ) : (
                <button
                  onClick={log}
                  className={buttonStyle}
                >
         <Lock size={18} />
<span>LogOut</span>
                </button>
              )}
            </div>
          </div>
        </div>
        

        <h1 className="flex justify-center   text-3xl font-bold text-black ">
           
          < MessageCircle /> Welcome to Chat App 
        </h1>
        <h3 className="flex justify-center">Connect with friends instantly </h3>
        <div className="flex justify-center">•Fast • Secure • Modern </div>

        <div className="flex justify-center p-0.5  ">
          
          <Link to ="/about" className=  {buttonStyle}> Get Start </Link>
      
<button
  className="
    flex items-center
    rounded-3xl
    overflow-hidden
    border border-white/20
     bg-linear-to-r from-violet-500 via-purple-600 to-violet-600
    shadow-[0_0_35px_rgba(139,92,246,0.6)]
    hover:shadow-[0_0_50px_rgba(139,92,246,0.9)]
    transition-all duration-300
  "
>
  {/* Left Section */}
  <div className="flex items-center gap-5 px-8 py-6">
    <div
      className="
        w-12 h-12
        rounded-xl
        bg-white/20
        backdrop-blur-md
        flex items-center justify-center
        text-3xl font-light
      "
    >
      +
    </div>

    <span className="text-4xl font-medium text-white">
      New
    </span>
  </div>

  {/* Divider */}
  <div className="w-px self-stretch bg-white/20"></div>

  {/* Right Section */}
  <div className="px-8 text-3xl text-white">
    ⌄
  </div>
</button>
<button className="px-6 py-3 rounded-full bg-linear-to-r from-violet-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
   🌟 Chat Now
</button>
        </div>
      </div>
    </>
  );
}

export default App;
