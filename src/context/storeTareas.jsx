import { create } from "zustand";

const storeTareas = create((set) => ({
    tareas: [],
    agregarTarea: (nuevaTarea) =>
        set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),
    eliminarTarea: (index) =>
        set((state) => ({
            tareas: state.tareas.filter((_, i) => i !== index),
        })),
}));

export default storeTareas;
