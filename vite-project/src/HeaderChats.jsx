 import {
  ChevronLeft,
  UserRound,
  Phone,
  Video,
} from "lucide-react";

import socket from "./socket";
import { useState, useEffect, useRef } from "react";
import Ham from "./Hamburger";
import gsap from "gsap";

function HeaderChat() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "User"
  );

  const [image, setImage] = useState(null);
  const [lastSeen, setLastSeen] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const [online, setOnline] = useState(navigator.onLine);

  // GSAP refs
  const dotRef = useRef(null);
  const textRef = useRef(null);

  // Profile image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Last seen
  useEffect(() => {
    socket.on("lastSeen", (data) => {
      setLastSeen(data.time);
    });

    return () => {
      socket.off("lastSeen");
    };
  }, []);

  // Delete image
  const handleDeleteImage = () => {
    setImage(null);
    setShowOptions(false);
  };

  // Online / Offline
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

  // GSAP Online / Offline animation
  useEffect(() => {
    // Stop old animation
    gsap.killTweensOf(dotRef.current);
    gsap.killTweensOf(textRef.current);

    if (online) {
      // Green dot pulse
      gsap.to(dotRef.current, {
        backgroundColor: "#22c55e",
        scale: 1.3,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    } else {
      // Smoothly change to gray
      gsap.to(dotRef.current, {
        backgroundColor: "#9ca3af",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Animate Online / Offline text
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  }, [online]);

  return (
    <>
      <div className="flex items-center gap-2">
        <Ham />
      </div>

      <div
        className="
          bg-white/80
          backdrop-blur-md
          px-5
          py-3
          rounded-2xl
          shadow-sm 
        "
      >

        <div className="flex items-center justify-between">

          {/* Back */}
          <ChevronLeft />

          {/* Profile */}
          <div className="relative">

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

            {/* Image Options */}
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

          {/* Username */}
          <div>
            <p className="font-semibold text-black">
              {username}
            </p>
          </div>

          {/* Call buttons */}
          <div className="flex justify-end ml-auto gap-3">

            <span className="bg-purple-400 rounded-4xl p-1">
              <Phone />
            </span>

            <button className="bg-purple-400 rounded-4xl p-1 cursor-pointer">
              <Video />
            </button>

          </div>

        </div>

        {/* Online / Offline */}
        <div className="flex items-center gap-1 ml-18">

          {/* Animated dot */}
          <span
            ref={dotRef}
            className="w-2.5 h-2.5 rounded-full bg-gray-400"
          ></span>

          {/* Animated text */}
          <span
            ref={textRef}
            className="text-xs text-gray-500"
          >
            {online
              ? "Online"
              : lastSeen
              ? `Last seen ${new Date(lastSeen).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`
              : "Offline"}
          </span>

        </div>

      </div>
    </>
  );
}

export default HeaderChat;