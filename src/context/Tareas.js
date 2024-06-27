import { createContext, useState } from 'react';
const TareasContext = createContext();

const ProveedorDeTareas = ({children}) =>{

    const tareasIniciales = [
    
    { id: 1, nombre: 'Hacer la compra', descripcion: 'Comprar alimentos y productos necesarios.' },
    
    { id: 2, nombre: 'Estudiar React', descripcion: 'Revisar la documentación y hacer ejercicios.' },
    
    { id: 3, nombre: 'Ir al gimnasio', descripcion: 'Realizar ejercicios de cardio y pesas.' },
    ];
    const [tareas, setTareas] = useState(tareasIniciales);

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea]);
    };
    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
        };
        const editarTarea = (id, nuevaTarea) => {
            const nuevasTareas = tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, ...nuevaTarea } : tarea
            );
            setTareas(nuevasTareas);
            };

    return(
        <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, editarTarea }}>
{children}
</TareasContext.Provider>
    )
    
};

export {ProveedorDeTareas, TareasContext}