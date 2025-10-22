/*

  1- Zustand 
  
*/

import { useState } from "react";
import storeTareas from "../context/storeTareas";
import Octavo from "./Octavo";

const Septimo = () => {
  const { tareas, agregarTarea } = storeTareas();
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleAgregar = () => {
    if (nuevaTarea.trim() !== "") {
      agregarTarea(nuevaTarea.trim());
      setNuevaTarea("");
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar estado global. El padre puede agregar datos y el hijo los ve automáticamente.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8 p-4 text-center rounded-lg">
        <input
          type="text"
          className="border px-2 py-1 rounded w-full mb-2"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button
          className="bg-green-600 text-white py-1 px-3 rounded w-full mb-4"
          onClick={handleAgregar}
        >
          Agregar tarea
        </button>

        <Octavo />
      </div>
    </>
  );
};

export default Septimo;
