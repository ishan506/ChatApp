 import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Ham from "./Hamburger";
import HeaderChat from "./HeaderChats";
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
        
        <div className="text-black bg-white p-5">
            <h1>My Chat</h1>
 {/* hammburg */}
<Ham/>
<HeaderChat/>

            

            {/* Messages */}
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>
                        {msg}
                    </p>
                ))}
            </div>

            {/* Input */}
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write message..."
            />

            <button onClick={sendMessage}>
                Send
            </button>

        </div>
    );
}

export default Apps;