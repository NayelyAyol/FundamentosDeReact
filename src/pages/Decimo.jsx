/*
  1- LocalStorage: Color favorito con efecto visible
*/

import { useState, useEffect } from "react";

const Decimo = () => {
  const [color, setColor] = useState("");
  const [colorGuardado, setColorGuardado] = useState("");
  const [mensaje, setMensaje] = useState(""); // mensaje temporal al obtener

  // Guardar color en LocalStorage
  const guardarColor = () => {
    if (!color) return; // evitar guardar vacío
    localStorage.setItem("color-favorito", color);
    setColorGuardado(color);
    setColor("");
    setMensaje(""); // limpiar mensaje anterior
  };

  // Obtener color desde LocalStorage
  const obtenerColor = () => {
    const c = localStorage.getItem("color-favorito");
    setColorGuardado(c || "");
    setMensaje(c ? `Color obtenido: ${c}` : "No hay color guardado");
  };

  // Limpiar color
  const limpiarColor = () => {
    localStorage.removeItem("color-favorito");
    setColorGuardado("");
    setMensaje("Color eliminado");
  };

  // Guardar un color por defecto al cargar la página
  useEffect(() => {
    localStorage.setItem("color-favorito", "Azul");
    setColorGuardado("Azul");
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl">LocalStorage</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5 mb-4">
        <li>LocalStorage mantiene información en el navegador incluso tras recargar.</li>
        <li>Se guarda en pares clave–valor.</li>
        <li>Se usa <strong>JSON.stringify()</strong> para objetos, pero aquí es un string simple.</li>
      </ul>

      {/* Input para guardar color */}
      <div className="flex justify-center mb-6">
        <div className="border rounded-lg p-4 w-80 mx-auto text-center">
          <input
            type="text"
            placeholder="Escribe tu color favorito"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border p-1 rounded mb-2 w-full"
          />
          <button
            className="bg-green-700 text-white py-1 px-3 rounded w-full"
            onClick={guardarColor}
          >
            Guardar Color
          </button>
        </div>
      </div>

      {/* Mostrar color guardado */}
      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-80 mx-auto text-center">
          <h2 className="text-lg font-semibold mb-2">Color Guardado</h2>
          <p className="mb-3">{colorGuardado || "No hay color guardado"}</p>
          {mensaje && <p className="text-blue-600 mb-2">{mensaje}</p>}

          <button
            className="bg-blue-700 text-white py-1 px-3 rounded mx-1"
            onClick={obtenerColor}
          >
            Obtener Color
          </button>
          <button
            className="bg-red-700 text-white py-1 px-3 rounded mx-1"
            onClick={limpiarColor}
          >
            Limpiar Color
          </button>
        </div>
      </div>
    </>
  );
};

export default Decimo;
