import { useEffect, useState } from "react";

const Tercero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Efecto para manejar el cambio de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite ejecutar efectos secundarios, como peticiones a APIs o actualizar el DOM.
        </li>
      </ul>

      <div className="mt-8 p-4 border rounded text-center">
        <h2 className="text-lg font-semibold mb-2">Tamaño de la Ventana</h2>
        <p>Ancho: {width}px</p>
        <p>Alto: {height}px</p>
      </div>
    </>
  );
};

export default Tercero;
