import { create } from "zustand"; // Importa la función create de la librería zustand


const storeGalleta = create((set)=>({
    
    detalle:{ // Objeto que almacena la información de la galleta
        nombre: "Nucita",
        tipo: "galleta",
    },
    
    setGalleta: (newGalleta) => set({ detalle: newGalleta }) // Cambiar el valor
    
}))


export default storeGalleta
