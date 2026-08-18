 import { useEffect, useState } from "react";
import socket from "./socket";
import Emoj from "./emoj";
import HeaderChat from "./HeaderChats";
import Timeshow from "./time";

function Apps() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("receive-message", (message) => {
      console.log("Received:", message);

      setMessages((oldMessages) => [
        ...oldMessages,
        message
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("receive-message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    console.log("Sending:", newMessage);

    
    setMessages((oldMessages) => [
      ...oldMessages,
      newMessage
    ]);

     
    socket.emit("send-message", newMessage);

    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col text-black bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF] p-5">

      <h1>My Chat</h1>

      <HeaderChat />

      <div className="flex-1 overflow-y-auto">

        {messages.map((msg, index) => (
          <div
            className="bg-[#F8FAFF] text-[#3B82F6] w-fit p-2 mb-2"
            key={index}
          >
            <p>{msg.text}</p>

            <span>
              {msg.status === "sent" && "✓"}

              {msg.status === "delivered" && "✓✓"}

              {msg.status === "read" && (
                <span className="text-blue-500">
                  ✓✓
                </span>
              )}
            </span>

            <Timeshow time={msg.time} />
          </div>
        ))}

      </div>

      <div className="flex items-center gap-2 w-full">

        <Emoj setMessage={setMessage} />

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write message..."
          className="flex-1 border rounded px-3 py-3"
        />

        <button
          onClick={sendMessage}
          className="bg-purple-400 text-white px-4 py-3 rounded-full"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Apps;