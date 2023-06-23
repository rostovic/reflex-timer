import { useEffect, useState } from "react";
import classes from "./ReflexGame.module.css";
const ReflexGame = () => {
  const [number, setNumber] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const startTimer = () => {
      const date = new Date();
      setStartTime(date.getTime());
    };
    isActive && startTimer();
  }, [isActive]);

  const stopTimer = () => {
    const date = new Date();
    setEndTime(date.getTime());
    setIsActive(false);
  };

  const startGame = () => {
    let randomNumber = Math.floor(Math.random() * 144);
    setNumber(randomNumber);
    setIsActive(true);
  };

  const checkValid = (event, id) => {
    if (id === number) {
      stopTimer();
      event.target.style.backgroundColor = "white";
      setNumber(null);
    }
  };

  return (
    <div className={classes.mainDiv}>
      <button className={classes.startGameButton} onClick={() => startGame()}>
        Start game
      </button>
      <span>{isActive ? null : endTime - startTime} ms</span>
      <div className={classes.wrapper}>
        {[...Array(144)].map((x, i) => (
          <div
            key={i}
            id={i}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: number === i ? "red" : "white",
            }}
            disabled={number === i ? false : true}
            onClick={(e) => checkValid(e, i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ReflexGame;
