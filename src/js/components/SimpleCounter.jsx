import React, { useState, useEffect } from "react";


const SecondsCounter2 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); 
  
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]); 

  
  const formatNumber = (num) => {
    return num.toString().padStart(6, "0");
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: "3rem",
        margin: "2rem",
        backgroundColor: "black",
        color: "white",
        width: "400px",
        margin: "0 auto",
      }}
    >
      <div style={{
        color: "white",
      }}>
      <i class="fa-solid fa-clock"></i>
      </div>
      <div>
        <span className="">{formatNumber(seconds)}</span>
      </div>

     
       
    </div>
  );
};

export default SecondsCounter2;
