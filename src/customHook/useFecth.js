export function useFetch() { //funcion declarada

  const fetchDataBackend = async (url) => { //peticion a una URL -> async(guarda una: url, en este caso)
    try {
      const request = await fetch(url) // async 
      const response = await request.json() // await que convierte la respuesta en un objeto JSON
      return response      
    } catch (error) {
      console.log(error)
    }
  }
  
  return fetchDataBackend
}
