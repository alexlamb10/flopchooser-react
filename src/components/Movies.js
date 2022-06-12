import React, { useEffect, useState } from "react";
import { FLOP_DATA } from "../FLOP_DATA";

function Movies({ setChosen, setCorrect, setIncorrect, chosen }) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  useEffect(() => {
    setFirstIndex(Math.floor(Math.random() * FLOP_DATA.length));
    setSecondIndex(Math.floor(Math.random() * FLOP_DATA.length));
  }, []);

  const arr = [FLOP_DATA[firstIndex].imageUrl, FLOP_DATA[secondIndex].imageUrl];

  function determineWinnerFirst() {
    if (chosen) {
      return;
    } else {
      if (FLOP_DATA[firstIndex].stars < FLOP_DATA[secondIndex].stars) {
        setChosen(true);
        setCorrect(true);
      } else {
        setChosen(true);
        setIncorrect(true);
      }
    }
  }

  function determineWinnerSecond() {
    if (chosen) {
      return
    } else {
      if (FLOP_DATA[secondIndex].stars < FLOP_DATA[firstIndex].stars) {
        setChosen(true);
        setCorrect(true);
      } else {
        setChosen(true);
        setIncorrect(true);
      }
    }
  }

  return (
    <div className="choices">
      <img onClick={determineWinnerFirst} src={arr[0]} alt="" />
      <img onClick={determineWinnerSecond} src={arr[1]} alt="" />
    </div>
  );
}

export default Movies;
