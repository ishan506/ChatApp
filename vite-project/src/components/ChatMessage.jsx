import { motion } from "framer-motion";

function ChatMessage({ text, top, left, delay ,bg }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
      style={{
        top: top,
        left: left,
      
      }}
      className={`absolute ${bg} text-white px-5 py-3 rounded-2xl`}
    >
      {text}
    </motion.div>
  );
}

export default ChatMessage;