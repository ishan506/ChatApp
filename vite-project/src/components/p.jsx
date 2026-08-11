import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function PhoneSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Left phone
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -80]);
  const leftRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-12, 0, -8]
  );

  // Right phone
  const rightX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, 80]
  );

  const rightRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [12, 0, 8]
  );

  // Scale
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1, 0.9]
  );

  return (
    <section
      ref={ref}
      className="relative h-[120vh] overflow-hidden bg-[#fffaf0]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* Left Phone */}
        <motion.img
          src="/phone1.png"
          style={{
            x: leftX,
            rotate: leftRotate,
            scale,
          }}
          className="absolute w-[280px] md:w-[350px] z-20"
        />

        {/* Right Phone */}
        <motion.img
          src="/phone2.png"
          style={{
            x: rightX,
            rotate: rightRotate,
            scale,
          }}
          className="absolute w-[280px] md:w-[350px] z-10"
        />

        {/* Message bubbles */}

        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          }}
          className="absolute left-[10%] top-[25%] 
                     bg-yellow-400 px-6 py-3 rounded-full 
                     text-lg font-semibold"
        >
          Hello! 👋
        </motion.div>

        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [50, -50]),
          }}
          className="absolute right-[10%] bottom-[25%]
                     bg-blue-500 text-white px-6 py-3 
                     rounded-full text-lg font-semibold"
        >
          Namaste! 🙏
        </motion.div>

      </div>
    </section>
  );
}

export default PhoneSection;