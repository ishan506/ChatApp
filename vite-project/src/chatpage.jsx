 import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import Typing from "./Typing";
import socket from "./socket";
import gsap from "gsap";

function Chatpage() {
  const [change, setChange] = useState("");
  const [changes, setChanges] = useState([]);
  const [c, setC] = useState(null);

  const [online, setOnline] = useState(navigator.onLine);
  const [lastSeen, setLastSeen] = useState(null);

  // Typing state
  const [isTyping, setIsTyping] = useState(false);

  // GSAP refs
  const dotRef = useRef(null);
  const textRef = useRef(null);

  // Send / Update message
  function click() {
    if (change.trim() === "") return;

    if (c === null) {
      setChanges([...changes, change]);
    } else {
      const copy = [...changes];
      copy[c] = change;

      setChanges(copy);
      setC(null);
    }

    setChange("");
    setIsTyping(false);
  }

  // Last seen
  useEffect(() => {
    socket.on("lastSeen", (data) => {
      setLastSeen(data.time);
    });

    return () => {
      socket.off("lastSeen");
    };
  }, []);

  // Online / Offline
  const handleof = () => setOnline(false);
  const handleon = () => setOnline(true);

  useEffect(() => {
    window.addEventListener("online", handleon);
    window.addEventListener("offline", handleof);

    return () => {
      window.removeEventListener("online", handleon);
      window.removeEventListener("offline", handleof);
    };
  }, []);

  // GSAP Online / Offline animation
  useEffect(() => {
    // Stop previous animation
    gsap.killTweensOf(dotRef.current);
    gsap.killTweensOf(textRef.current);

    if (online) {
      // Green dot pulse
      gsap.to(dotRef.current, {
        backgroundColor: "#22c55e",
        scale: 1.3,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    } else {
      // Gray dot
      gsap.to(dotRef.current, {
        backgroundColor: "#9ca3af",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Online / Offline text animation
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

  // Update message
  function update(index) {
    setChange(changes[index]);
    setC(index);
  }

  // Remove message
  function remove(i) {
    const message = changes.filter((user, index) => i !== index);
    setChanges(message);
  }

  // Copy message
  function copyText(text) {
    navigator.clipboard.writeText(text);
    setChange(text);
  }

  return (
    <>
      <div className="bg-blue-500 min-h-screen">

        {/* Messages */}
        <ul className="pb-32">
          {changes.map((user, index) => (
            <li
              key={index}
              className="flex justify-end items-center w-full p-2"
            >
              <span className="bg-white px-4 py-2 rounded-2xl">
                {user}
              </span>

              <button
                className="pl-3"
                onClick={() => update(index)}
              >
                Update
              </button>

              <button
                className="pl-3"
                onClick={() => remove(index)}
              >
                Remove
              </button>

              <button
                className="pl-3"
                onClick={() => copyText(user)}
              >
                Copy
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom chat area */}
        <div className="fixed bottom-0 left-0 w-full p-4">

          {/* Typing indicator */}
          {isTyping && <Typing />}

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              className="rounded-3xl bg-amber-50 px-4 py-2"
              type="text"
              value={change}
              placeholder="Type a message..."
              onChange={(e) => {
                setChange(e.target.value);
                setIsTyping(e.target.value.length > 0);
              }}
            />

            <button
              className="bg-white rounded-full p-3"
              onClick={click}
            >
              <IoSend />
            </button>
          </div>

          {/* Online / Offline */}
          <div className="flex items-center gap-2 mt-2">

            {/* Dot */}
            <span
              ref={dotRef}
              className="w-3 h-3 rounded-full bg-gray-400"
            ></span>

            {/* Text */}
            <span
              ref={textRef}
              className="text-white"
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
      </div>
    </>
  );
}

export default Chatpage;