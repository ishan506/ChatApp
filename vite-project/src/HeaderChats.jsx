  import { ChevronLeft, UserRound ,Phone ,Video ,  
     } from "lucide-react";
import {useState,useEffect} from "react";
import Ham from "./Hamburger";
import { useNavigate } from "react-router-dom";
function HeaderChat() {
    const navigate = useNavigate();

   const [username, setUsername] = useState(
    localStorage.getItem("username") || "User"
  );

 
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

 const [lastSeen, setLastSeen] = useState(null);

useEffect(() => {
  socket.on("lastSeen", (data) => {
    setLastSeen(data.time);
  });
return () => socket.off("lastSeen");
}, []);
//delete
 const [showOptions, setShowOptions] = useState(false);

const handleDeleteImage = () => {
  setImage(null);
  setShowOptions(false);
};
    const [online , setOnline]=useState(navigator.onLine)
    useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
 

  
  return (
    <>
      <div className=" flex  items-center gap-2">

    
    <Ham />
    </div>
   <div className=" 
                bg-white/80 backdrop-blur-md
                px-5 py-3 rounded-2xl shadow-sm">

     <div className="flex items-center justify-between
                ">
 
 {/* Hamburger */}
    
      <ChevronLeft />

      <div className="relative">

  {/* Profile Image */}
  <div
    className="cursor-pointer"
    onClick={() => {
      if (image) {
        setShowOptions(!showOptions);
      }
    }}
  >
    {image ? (
      <img
        src={image}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
    ) : (
      <label className="cursor-pointer">
        <UserRound size={30} />

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    )}
  </div>

  {/* Options */}
  {showOptions && (
    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-1">

      {/* Change */}
      <label className="cursor-pointer px-3 py-1 hover:bg-gray-100 rounded">
        Change

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handleImageChange(e);
            setShowOptions(false);
          }}
        />
      </label>

      {/* Delete */}
      <button
        onClick={handleDeleteImage}
        className="text-red-500 px-3 py-1 text-left hover:bg-gray-100 rounded"
      >
        Delete
      </button>

    </div>
  )}

</div>
      <div className="flex flex-row">
 
  <p className="font-semibold text-black">
  {username}
</p>
         
 </div>
<div className="flex justify-end ml-auto   gap-3 ">
<span className="bg-purple-400 rounded-4xl  p-1 " ><Phone />  </span>
<button  className="bg-purple-400 rounded-4xl p-1 cursor-pointer "onClick={() => navigate("/video?roomID=abc123")}>
  <Video />
</button>
  
  </div>
    </div>
 <div className="flex items-center gap-1">
    <span
      className={`w-2.5 h-2.5  ml-18 rounded-full ${
        online ? "bg-green-500" : "bg-red-500"
      }`}
    ></span>

    <span className="text-xs text-gray-500">
      {online ? "Online" : `last seen ${new Date(lastSeen).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`}
    </span>
  </div>
</div>

  

    </> 
  );
}

export default HeaderChat;