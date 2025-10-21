
/*

  1- useState

*/


import { useState } from "react"

const Segundo = () => {

  const [visible, setVisible] = useState(false)

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      
      <hr className="border-gray-400 mb-8"/>
        
        <div className="text-center mb-8">
          <button 
            onClick={() => setVisible(!visible)} 
            className="bg-blue-600 text-white px-4 py-2 rounded" >
              {visible ? "Ocultar mensaje" : "Mostrar mensaje"}
          </button> 
          {visible && 
            <ul className="list-disc pl-9 mt-10 text-left inline-block">
              <li>
                Es un Hook que permite manejar el estado dentro de un componente.
              </li>
            </ul>
            }

        </div>
    </>
  )
}

export default Segundo




