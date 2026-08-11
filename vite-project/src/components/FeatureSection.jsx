  import { ChevronRight } from "lucide-react";
   import { ChevronLeft } from "lucide-react";
import img from "../assets/connect.png"
import img1 from "../assets/emoj.png"
import img2 from "../assets/k.png"
import img3 from "../assets/s.png"
import img4 from "../assets/happy.png"
import img5 from"../assets/secure.png"
import {useRef} from "react";
const features = [
  {
    title: "Sweet Talks",
    text: "Chat with your favorite people anytime, anywhere.",
    image:  img,
  },
  {
    title: "Safe & Sound",
    text: "Keep your conversations private and secure.",
    image:  img5,
  },
  {
    title: "Chat Magic",
    text: "Make conversations fun with emojis and reactions.",
    image: img2,
  },
  {
    title: "Voice Vibes",
    text: "Send quick voice messages when typing feels boring.",
    image: img3,
  },
  {
    title: "Talk Anywhere",
    text: "Break language barriers and chat with everyone.",
    image: img4,
  },
  {
    title: "Everywhere",
    text: "Pick up your conversations from any device.",
    image: img1,
  },
];

function Features() {
   const sliderRef = useRef(null);
   const moveRight = () => {
  sliderRef.current.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};
 const moveLeft = () => {
  sliderRef.current.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};
  return (
   
    <section className="bg-[#fffaf0] py-20 px-6 ">

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl font-extrabold text-black">
          Little things that make
          <span className="text-blue-600"> chatting better.</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Simple, fun and made for real conversations.
        </p>
      </div>


      {/* Cards */}
      <div  className={"max-w-6xl mx-auto relative   "} >

        <div ref={sliderRef} className="flex gap-8 overflow-x-hidden">

          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-[350px] bg-white rounded-3xl
                         border border-gray-200 overflow-hidden
                         shadow-sm hover:shadow-xl
                         transition duration-300
                         hover:-translate-y-2"
            >

              {/* Image */}
              <div className="h-[340px] bg-[#f5f3ff]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>


              {/* Text */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {feature.text}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* ONE LEFT BUTTON */}
        <button onClick={moveLeft}

          className="absolute -left-6 top-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full
                     bg-white shadow-lg border
                     flex items-center justify-center
                     hover:bg-blue-600 hover:text-white
                     transition"
        >
         
           <ChevronLeft size={28} />
        </button>
  


  <button onClick= {moveRight}

          className="absolute -right-6 top-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full
                     bg-white shadow-lg border
                     flex items-center justify-center
                     hover:bg-blue-600 hover:text-white
                     transition"
        >
         
           <ChevronRight size={28} />
        </button>
      </div>

    </section>
  );
}

export default Features;