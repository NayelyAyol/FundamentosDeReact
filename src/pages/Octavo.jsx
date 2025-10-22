/*

  1- Zustand 
  
*/

import storeTareas from "../context/storeTareas";

const Octavo = () => {
  const { tareas, eliminarTarea } = storeTareas();

  return (
    <>
      <h2 className="text-purple-700 mt-4">Hijo</h2>

      <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center mx-auto">
        {tareas.length === 0 ? (
          <p>No hay tareas aún.</p>
        ) : (
          <ul className="list-disc text-left pl-5">
            {tareas.map((tarea, index) => (
              <li key={index} className="flex justify-between items-center mb-1">
                {tarea}
                <button
                  className="bg-red-500 text-white px-2 py-0.5 rounded ml-2"
                  onClick={() => eliminarTarea(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Octavo;
