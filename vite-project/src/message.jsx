 import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import gsap from "gsap";

function Message({ msg, onReaction }) {
  const [showReaction, setShowReaction] = useState(false);

  const reactionRef = useRef(null);

  const handleMessageClick = () => {
    setShowReaction((prev) => !prev);
  };

  const handleReaction = (emojiData) => {
    const emoji = emojiData.emoji;

    setShowReaction(false);

    // Tell Apps.jsx
    onReaction(msg.id, emoji);

    // GSAP animation
    setTimeout(() => {
      if (!reactionRef.current) return;

      gsap.fromTo(
        reactionRef.current,
        {
          scale: 0,
          rotation: -30,
          opacity: 0,
        },
        {
          scale: 1.3,
          rotation: 10,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(2)",
          onComplete: () => {
            gsap.to(reactionRef.current, {
              scale: 1,
              rotation: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          },
        }
      );
    }, 0);
  };

  return (
    <div className="flex justify-end mb-5">

      <div className="relative">

        {/* Message */}
        <div
          onClick={handleMessageClick}
          className="bg-purple-400 text-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          {msg.text}

          <div className="text-[10px] text-purple-100 mt-1">
            {msg.time}
          </div>
        </div>

        {/* Reaction */}
        {msg.reaction && (
          <div
            ref={reactionRef}
            className="absolute -bottom-5 right-2 bg-white shadow-md rounded-full px-2 py-1 text-lg"
          >
            {msg.reaction}
          </div>
        )}

        {/* Emoji Picker */}
        {showReaction && (
          <div className="absolute bottom-12 right-0 z-50">
            <EmojiPicker
              onEmojiClick={handleReaction}
              height={350}
              width={300}
            />
          </div>
        )}

      </div>

    </div>
  );
}

export default Message;