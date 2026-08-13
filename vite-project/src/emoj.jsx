 import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

function Emoj({ setMessage }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiRef = useRef(null);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target)
      ) {
        setShowEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={emojiRef} className="relative">
      <button
        onClick={() => setShowEmoji((prev) => !prev)}
        className="text-2xl"
      >
        😊
      </button>

      {showEmoji && (
        <div className="absolute bottom-16 left-0 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
}

export default Emoj;