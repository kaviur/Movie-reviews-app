import React, {useContext,useState} from "react";
import { FaStar } from "react-icons/fa";

//enviar rating al contexto

const StarRating = ({stars}) => {
       const [rating, setRating] = useState(null);
       const [hover, setHover] = useState(null)

       const setStars = (val)=>{
              setRating(val)
              stars(val)
       }

       return (
              <div>
                     {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;

                            return (
                                   <label key={i} className="lasestrellas">
                                          <input 
                                          type="radio" 
                                          name="rating" 
                                          value={ratingValue} 
                                          onClick={() => setStars(ratingValue)}
                                          />
                                          <FaStar 
                                          className="star" 
                                          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                                          size={20}
                                          onMouseOver={() => setHover(ratingValue)}
                                          onMouseOut={()=> setHover(null)}/> 
                                   </label>
                            );
                     })}
              </div>
       );
};

export default StarRating;
