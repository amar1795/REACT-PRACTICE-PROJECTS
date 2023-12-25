import React, { useEffect, useState } from 'react'
import "./index.css"
import { FaStar } from "react-icons/fa";


const Stars = ({stars}) => {
  let star_value=localStorage.getItem("stars") || [];
  const[rating,setRating]=useState(star_value);
  const[hover,setHover]=useState(0);


  function click(params) { 
    setRating(params) 
  }

  function handleMouseLeave() {  
    setHover(rating)
  }

  function handleMouseMove(index) { 
    setHover(index) 
  }
  
  useEffect (()=>{

    localStorage.setItem("stars",rating)

  },[rating])

  return (
      <div>
        {[...Array(stars)].map((_,index) => {
          index+=1;
          return (
            <FaStar
            className={index <= (rating||hover)?"active":"notactive"}
            onClick={()=>click(index)}
            onMouseLeave={()=>handleMouseLeave()}
            onMouseMove={()=>handleMouseMove(index)}
            key={index}
            size={40}

            />
          );
        })}
      </div>
    )
  }

export default Stars

