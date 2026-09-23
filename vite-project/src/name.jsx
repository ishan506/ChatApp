 import { useState } from "react";
import { useNavigate  } from "react-router-dom";
 
function Name() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleOK = () => {
    if (!name.trim()) return;

    localStorage.setItem("username", name);
    navigate("/chat");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFF]">

      <div className="w-[90%] max-w-sm bg-white rounded-2xl shadow-xl p-6">

        <h2 className="text-2xl font-semibold text-center
                       bg-linear-to-r from-blue-500 to-pink-500
                       bg-clip-text text-transparent">
          Enter Your Name
        </h2>

        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-6 px-4 py-3 rounded-xl
                     border border-blue-300
                     outline-none
                     focus:ring-2 focus:ring-pink-300"
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={handleCancel}
            className="px-5 py-2 rounded-xl
                       border border-gray-300
                       text-gray-600
                       hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleOK}
            className="px-6 py-2 rounded-xl
                       bg-linear-to-r from-blue-500 to-pink-500
                       text-white
                       hover:opacity-90"
          >
            OK
          </button>

        </div>
      </div>
    </div>
  );
}

export default Name;