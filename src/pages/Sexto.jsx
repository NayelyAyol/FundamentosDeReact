/*

  1- Props 
  
*/

const Sexto = ({ numeros }) => {
  const suma = numeros.numero1 + numeros.numero2;
  const resta = numeros.numero1 - numeros.numero2;

  return (
    <>
      <h2 className="text-orange-800">Hijo</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-4 w-80 text-center">
          <p><strong>Suma:</strong> {isNaN(suma) ? "-" : suma}</p>
          <p><strong>Resta:</strong> {isNaN(resta) ? "-" : resta}</p>
        </div>
      </div>
    </>
  );
};

export default Sexto;
