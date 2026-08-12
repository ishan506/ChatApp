 import { ChevronLeft, UserRound } from "lucide-react";
import {useState} from "react";
function HeaderChat() {
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
    <div className="flex items-center justify-center gap-4">

      <ChevronLeft />

      <label className="cursor-pointer">
        <UserRound />
        
        <input
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
<h1>ishan</h1>
 <p>{online ? "Online" : "Offline"}</p>
    </div>
  );
}

export default HeaderChat;