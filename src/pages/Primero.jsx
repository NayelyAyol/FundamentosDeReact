const Primero = () => {

  const user = {
    name: "Usuario",
    rol: "Admin",
  }

  return (
    <>
      <h1 className="font-bold text-2xl">React</h1>
      
      <hr className="border-gray-400 mb-8"/>
      
      <ul className="list-disc pl-5">
        <li>
          <strong>Variable:</strong>Sirve para almacenar información que luego se puede usar en un componente.
        </li>
        <li>
          <strong>Fragment:</strong> Permite agrupar varios elementos sin añadir un div extra al HTML.
        </li>
        <li>
          <strong>JSX:</strong> Sintaxis que combina HTML y JavaScript dentro de React.
        </li>
        <li>
          <strong>Condicional:</strong> Mostrar contenido dependiendo de una condición.
        </li>
        <li>
          <strong>Eventos:</strong> Permiten que la aplicación responda a las acciones del usuario (onClick, onChange, etc.).
        </li>
      </ul>

        
      <div className="flex justify-center mb-8 mt-8">
        
        <div className="border rounded-lg p-4 w-80 text-center">
          
          <h2 className="text-lg font-semibold mb-2">Bienvenido(a) - {user.name}</h2>
          
          <p className="mb-3">{user.rol === "Admin" ? "Administrador" :"Invitado"}</p>
          
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => document.body.style.backgroundColor = "lightblue"} className="flex justify-center bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-2"> Cambiar fondo celeste </button>
            
            <button onClick={() => document.body.style.backgroundColor = "white"} className= "flex justify-center bg-blue-600 text-white px-4 py-2 rounded mt-4 mb-2"> Cambiar fondo blanco </button>
          </div>

        </div>
      
      </div>
    
    </>
  )
}

export default Primero