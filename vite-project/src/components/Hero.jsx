import { motion } from "framer-motion";
import ChatPreview from "./ChatPreview";
 import Photo from "./N";
 import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="  flex flex-col md:flex-row   justify-between px-8 py-16 gap-10">
 
      {/* Left */}
      <div className="flex flex-col   md:items-start">
        <div className="text-black font-extrabold text-5xl max-w-[520px]">  Connect. <span className="text-pink-400">Chat.</span>
    <br/>Make Friends.</div>
  <div className=" mt-4  max-w-[520px] text-lg text-gray-600 leading-relaxed      ">
        Meet new people, start conversations and
        <br/> build meaningful
        connections with our 
        <br/>friendly chat app.
      </div>
      <div>
         
         
         
              

        {/* Buttons */}
        <div className="flex gap-3 mt-4">

          {/* Button 1 */}
          <div
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-3xl
              bg-linear-to-r
              from-violet-600
              via-fuchsia-500
              to-pink-500
              text-white
              text-md
              font-bold
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            🚀
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <Link to="/about"> Get Started </Link>
            </motion.span>
          </div>

          {/* Button 2 */}
          <div
            className="
              flex items-center
              px-4 py-2
              rounded-3xl
              bg-linear-to-r
              from-violet-600
              via-fuchsia-500
              to-pink-500
              text-white
              text-md
              font-bold
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet Friends ❤️
            </motion.span>
          </div>
 
     

    
       
          </div>
</div>
      </div>

      {/* Right */}
        <Photo />

    </section>
  );
}

export default Hero;