import {useState,useEffect} from "react"
 import {Star} from "lucide-react";
 function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className={`w-8 h-8 cursor-pointer transition-all duration-200 ${
            star <= (hover || rating)
              ? "fill-yellow-400 text-yellow-400 scale-110"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
export default Rating;