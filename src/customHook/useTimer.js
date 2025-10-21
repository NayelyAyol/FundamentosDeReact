// hooks/useTimer.js
import { useState, useEffect } from "react";

function useTimer(initialSeconds = 0) {
  // Estado para almacenar los segundos transcurridos
  const [seconds, setSeconds] = useState(initialSeconds);

  // Efecto para incrementar el contador cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
       setSeconds(s => s + 1)}, 1000);
       
    return () => clearInterval(interval); // Limpia el intervalo cuando se cambia de página
  }, []);

  // Devuelve el número de segundos transcurridos
  return seconds;
}

export default useTimer;