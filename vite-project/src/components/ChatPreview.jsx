import { motion } from "framer-motion";

function ChatPreview() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-72 h-96 bg-black rounded-[40px] p-3 , m-8 shadow-2xl flex justify-center"
    >

      <div className="w-full bg-white rounded-[30px] overflow-hidden">

        {/* Header */}
        <div className="bg-violet-600 text-white p-4 font-bold">
          ChatApp
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3">

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-3 rounded-2xl w-fit"
          >
            👋 Hello!
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-violet-500 text-white p-3 rounded-2xl ml-auto w-fit"
          >
            Hi there 😊
          </motion.div>

          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-fit rounded-2xl bg-gray-200 px-4 py-2 text-sm text-gray-600"
          >
            Ishan is typing...
          </motion.div>

        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t bg-white p-3">

          <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-400">
            Type a message...
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-pink-500 text-white hover:scale-110 transition">
            ➤
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default ChatPreview;