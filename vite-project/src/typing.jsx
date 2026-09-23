 import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Typing() {
  const dotsRef = useRef([]);

  useLayoutEffect(() => {
    gsap.to(dotsRef.current, {
      y: -5,
      opacity: 0.4,
      duration: 0.4,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex items-center gap-1 bg-white w-fit px-3 py-2 rounded-2xl mb-2">
      {[0, 1, 2].map((item) => (
        <span
          key={item}
          ref={(el) => {
            dotsRef.current[item] = el;
          }}
          className="w-2 h-2 bg-gray-400 rounded-full"
        />
      ))}
    </div>
  );
}

export default Typing;