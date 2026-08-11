 import { Mic, Play } from "lucide-react";
import { motion } from "framer-motion";

function FeatureSection() {
  return (
    <section className="bg-[#fffaf0] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center">
          More than just
          <span className="text-blue-600"> messaging.</span>
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to stay connected.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-16">


          {/* Voice */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >

            <div className="h-64 bg-blue-50 rounded-2xl flex flex-col
                            items-center justify-center">

              <div className="bg-blue-600 text-white p-4 rounded-full">
                <Mic size={32} />
              </div>

              <div className="flex gap-1 items-center mt-8">

                {[20, 35, 50, 25, 45, 60, 30, 50, 25, 40].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      animate={{ height: [height, height + 15, height] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: index * 0.1
                      }}
                      className="w-1 bg-blue-600 rounded-full"
                    />
                  )
                )}

              </div>

              <div className="flex items-center gap-3 mt-6">
                <Play size={18} />
                <span>0:18</span>
              </div>

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Voice Messages
            </h3>

            <p className="text-gray-600 mt-2">
              Say it instead of typing it.
            </p>

          </motion.div>


          {/* Translation */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >

            <div className="h-64 bg-yellow-50 rounded-2xl p-8">

              <div className="bg-blue-600 text-white rounded-2xl p-4">
                Hello, how are you?
              </div>

              <div className="text-center text-2xl my-4">
                ↓
              </div>

              <div className="bg-yellow-400 rounded-2xl p-4">
                नमस्ते, आप कैसे हैं?
              </div>

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Smart Translation
            </h3>

            <p className="text-gray-600 mt-2">
              Chat with anyone, in any language.
            </p>

          </motion.div>


          {/* Poll */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >

            <div className="h-64 bg-pink-50 rounded-2xl p-6">

              <h4 className="font-bold text-lg">
                Where should we go?
              </h4>

              <div className="mt-5 space-y-3">

                <div className="border rounded-xl p-3">
                  🎬 Cinema
                </div>

                <div className="border-2 border-blue-500
                                bg-blue-50 rounded-xl p-3">
                  🍕 Restaurant
                </div>

                <div className="border rounded-xl p-3">
                  🏖️ Beach
                </div>

              </div>

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Group Polls
            </h3>

            <p className="text-gray-600 mt-2">
              Let your group decide together.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default FeatureSection;