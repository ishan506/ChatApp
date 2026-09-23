 import { useEffect, useState } from "react";
import socket from "./socket";
import Emoj from "./emoj";
import HeaderChat from "./HeaderChats";
import Message from "./Message";
import Typing from "./Typing";

function Apps() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("receive-message", (message) => {
      console.log("Received:", message);

      setMessages((oldMessages) => [
        ...oldMessages,
        message,
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("receive-message");
    };
  }, []);

  // Receive reaction from another user
  useEffect(() => {
    socket.on("receive-reaction", ({ messageId, reaction }) => {
      setMessages((oldMessages) =>
        oldMessages.map((msg) =>
          msg.id === messageId
            ? { ...msg, reaction }
            : msg
        )
      );
    });

    return () => {
      socket.off("receive-reaction");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
      reaction: "",
    };

    console.log("Sending:", newMessage);

    // Show message immediately
    setMessages((oldMessages) => [
      ...oldMessages,
      newMessage,
    ]);

    // Send message
    socket.emit("send-message", newMessage);

    // Clear input
    setMessage("");

    // Hide typing
    setIsTyping(false);
  };

  const addReaction = (messageId, reaction) => {
    // Update our message immediately
    setMessages((oldMessages) =>
      oldMessages.map((msg) =>
        msg.id === messageId
          ? { ...msg, reaction }
          : msg
      )
    );

    // Send reaction to other user
    socket.emit("message-reaction", {
      messageId,
      reaction,
    });
  };

  return (
    <div className="min-h-screen flex flex-col text-black bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF] p-5">

      <h1>My Chat</h1>

      <HeaderChat />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mt-6 pt-16 relative z-20">

        {messages.map((msg) => (
          <Message
            key={msg.id}
            msg={msg}
            onReaction={addReaction}
          />
        ))}

      </div>

      {/* Typing */}
      {isTyping && <Typing />}

      {/* Input */}
      <div className="flex items-center gap-2 w-full">

        <Emoj setMessage={setMessage} />

        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);

            if (e.target.value.length > 0) {
              setIsTyping(true);
            } else {
              setIsTyping(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
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