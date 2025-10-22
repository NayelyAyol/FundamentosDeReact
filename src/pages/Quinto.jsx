/*

  1- Props 
  
*/

import { useState } from "react";
import Sexto from "./Sexto";

const Quinto = () => {

  const [datos, setDatos] = useState({ numero1: 0, numero2: 0 });

  const pedirDatos = () => {
    const n1 = parseFloat(prompt("Ingresa el primer número:"));
    const n2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(n1) && !isNaN(n2)) {
      setDatos({ numero1: n1, numero2: n2 });
    } else {
      alert("Por favor, ingresa solo números válidos.");
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
        <li>
          En este ejemplo, los números se ingresan por <code>prompt()</code> en el componente padre.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-green-500 flex-colum justify-center items-center w-120 mx-auto mb-8 p-4 text-center">
        <button 
          className="bg-blue-600 text-white py-1 px-3 rounded mb-4"
          onClick={pedirDatos}
        >
          Ingresar Números
        </button>

        <p>Primer número: {datos.numero1}</p>
        <p>Segundo número: {datos.numero2}</p>

        <Sexto numeros={datos} />
      </div>
    </>
  );
};

export default Quinto;
