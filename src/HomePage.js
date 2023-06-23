import { useNavigate } from "react-router-dom";
import classes from "./HomePage.module.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const navigation = useNavigate();
  const [number, setNumber] = useState(null);
  const firstArray = Array.from({ length: 64 }, (_, index) => index);
  const secondArray = Array.from({ length: 64 }, (_, index) => index + 64);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumber(Math.floor(Math.random() * 127));
    }, 500);
    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.test}>
        {firstArray.map((x, i) => (
          <div
            key={x}
            id={x}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: number === x ? "red" : "white",
            }}
          ></div>
        ))}
      </div>
      <button
        className={classes.reflexGameButton}
        onClick={() => navigation("/reflex-game")}
      >
        Start game
      </button>
      <div className={classes.test}>
        {secondArray.map((x, i) => (
          <div
            key={x}
            id={x}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: number === x ? "red" : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
