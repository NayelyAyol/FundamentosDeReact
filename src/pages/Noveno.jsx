/*
  3- Renderizado condicional y de listas
*/

import { useState } from "react";

const Noveno = () => {
  // Lista de invitados con estado de confirmación
  const [invitados, setInvitados] = useState([
    { nombre: "Emily", confirmado: true },
    { nombre: "Jaziel", confirmado: false },
    { nombre: "Alessia", confirmado: true },
    { nombre: "Nayely", confirmado: false },
  ]);

  // Contador de invitados confirmados
  const confirmados = invitados.filter((i) => i.confirmado).length;

  // Función para cambiar estado de confirmación de un invitado
  const toggleConfirmado = (index) => {
    const nuevos = [...invitados];
    nuevos[index].confirmado = !nuevos[index].confirmado;
    setInvitados(nuevos);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Renderizado condicional:</strong> Muestra elementos según una condición.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite crear elementos desde un arreglo.
        </li>
      </ul>

      {/* RENDERIZADO CONDICIONAL */}
      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional</h2>

          {confirmados > 0 ? (
            <p>Hay {confirmados} invitados confirmados 🎉</p>
          ) : (
            <p>No hay invitados confirmados aún 😢</p>
          )}
        </div>
      </div>

      {/* RENDERIZADO DE LISTAS */}
      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-left">
          <h2 className="text-1xl font-bold underline mb-4">Lista de Invitados</h2>

          <ul className="list-disc pl-5">
            {invitados.map((invitado, index) => (
              <li key={index} className="flex justify-between items-center mb-1">
                <span>
                  {invitado.nombre} - {invitado.confirmado ? "✅ Confirmado" : "❌ Pendiente"}
                </span>
                <button
                  className="bg-blue-600 text-white px-2 py-0.5 rounded ml-2"
                  onClick={() => toggleConfirmado(index)}
                >
                  Cambiar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Noveno;
