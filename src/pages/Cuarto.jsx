// Componente HookVisualizer.js
import React from 'react';
import useTimer from '../customHook/useTimer';

function HookVisualizer() {
  
  const seconds = useTimer(0); // Inicia el temporizador en 0 segundos

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          <h2>Tiempo: {seconds} segundos</h2>
        </div>

      </div>

    </>
  )
}

export default HookVisualizer;