import CoupleImg from "../assets/wedding.png"
import CoupleImgs from "../assets/wedding1.png"
import { motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
function Photo (){
    return(
        <>
         <div className=" relative">
        <img    className="   w-[500px] h-[455px] rounded-3xl object-cover"
src={CoupleImgs} alt="img"/>

 
<img    className="      absolute  
          top-10 left-[150px]
          
            w-[250px] h-[225px]    rounded-3xl object-cover"
src={CoupleImg} alt="img"/>
  

 
   
    <div className="absolute inset-0">

      <ChatMessage
        text="Hey! Are you coming tomorrow? 😊"
        top="0px"
        left="120px"
        delay={0}
           bg="bg-blue-500"
      />

      <ChatMessage
        text="Of course! ❤️"
        top="130px"
        right="220px"
        delay={0.5}
         bg="bg-pink-500"
      />

      <ChatMessage
        text="Remember this photo? 📸"
        top="220px"
        left="170px"
        delay={1}
         bg="bg-blue-500"
      />

      <ChatMessage
        text="Haha yes! Beautiful memories 🥰"
        top="350px"
        right="220px"
        delay={1.5}
         bg="bg-pink-500"
      />

    
  
</div>
 </div>
 
        </>
    )
}
export default Photo;