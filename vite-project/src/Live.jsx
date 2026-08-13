 import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Emoj from "./emoj"
import HeaderChat from "./HeaderChats";
import Timeshow from "./time";
const socket = io("http://localhost:5000");

function Apps() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        // When connected
        socket.on("connect", () => {
            console.log("Connected:", socket.id);
        });

        // Receive message from server
        socket.on("receive-message", (message) => {
            console.log("Received:", message);

            setMessages((oldMessages) => [
                ...oldMessages,
                message
            ]);
        });

        // Cleanup
        return () => {
            
            socket.off("connect");
            socket.off("receive-message");
        };

    }, []);

    const sendMessage = () => {

        if (message.trim() === "") {
            return;
        }

        console.log("Sending:", message);

        // Send message to server
        socket.emit("send-message", message);

        // Clear input
        setMessage("");
    };

    return (
        
         
  <div className="min-h-screen flex flex-col text-black bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF] p-5 ">

    {/* Title */}
    <h1>My Chat</h1>

   

    {/* Chat Header */}
    <HeaderChat />

    {/* Messages */}
    <div className="flex-1 overflow-y-auto">
      {messages.map((msg, index) => (
        <p  className="bg-[#F8FAFF] text-[#3B82F6]  w-fit h-fit"key={index}>
          {msg}
          
        </p>
       
      ))}
       <p>{Timeshow}</p>
    </div>

    {/* Input + Send */}
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