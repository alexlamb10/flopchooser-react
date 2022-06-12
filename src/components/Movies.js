import React, { useEffect, useState } from "react";
import { FLOP_DATA } from "../FLOP_DATA";

function Movies() {
  const [firstIndex, setFirstIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(0)
  

  useEffect(() => {
    setFirstIndex(Math.floor(Math.random() * FLOP_DATA.length));
    setSecondIndex(Math.floor(Math.random() * FLOP_DATA.length));
    
  }, []);

  const arr = [FLOP_DATA[firstIndex].imageUrl, FLOP_DATA[secondIndex].imageUrl];

  return (
    <div className="choices">
      <img src={arr[0]} alt="" />
      <img src={arr[1]} alt="" />
    </div>
  );
}

export default Movies;
