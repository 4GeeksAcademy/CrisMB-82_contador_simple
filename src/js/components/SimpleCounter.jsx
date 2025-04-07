import React, { useState, useEffect } from "react";


const SecondsCounter2 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // Estado para controlar si el contador está activo

  // Efecto para el temporizador
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]); // Dependencia añadida para reiniciar el efecto cuando isRunning cambie

  // Formatear a 6 dígitos con ceros a la izquierda
  const formatNumber = (num) => {
    return num.toString().padStart(6, "0");
  };

  return (
    <div
      className="flex-column"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: "3rem",
        margin: "2rem",
      }}
    >
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
        <span className="bg-info">{formatNumber(seconds)}</span>
      </div>

     
       
    </div>
  );
};

export default SecondsCounter2;
