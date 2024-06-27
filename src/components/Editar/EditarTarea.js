import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TareasContext } from '../../context/Tareas';

const EditarTarea = () => {
const { id } = useParams();
const { tareas, editarTarea } = useContext(TareasContext);
const [tareaEditada, setTareaEditada] = useState({ nombre: '', descripcion: '' });

useEffect(() => {
// Obtener la tarea específica por ID y asignarla a tareaEditada
const tareaSeleccionada = tareas.find((tarea) => tarea.id === parseInt(id, 10));
if (tareaSeleccionada) {
setTareaEditada(tareaSeleccionada);
}
}, [id, tareas]);

const handleInputChange = (e) => {
const { name, value } = e.target;

setTareaEditada((prevTarea) => ({
...prevTarea,
[name]: value,
}));
};

const handleEditarTarea = () => {
// Validar y editar la tarea
if (tareaEditada.nombre.trim() === '' || tareaEditada.descripcion.trim() === '') {
alert('Por favor, completa todos los campos.');
return;
}

editarTarea(parseInt(id, 10), tareaEditada);
// Omitir la redirección
};

return (
<div>
<h2>Editar Tarea</h2>

<form>
<label>
  Nombre:
  <input
    type="text"
    name="nombre"
    value={tareaEditada.nombre}
    onChange={handleInputChange}
  />
</label>
<br />
<label>
  Descripción:
  <textarea
    name="descripcion"
    value={tareaEditada.descripcion}
    onChange={handleInputChange}
  />
</label>
<br />
<button type="button" onClick={handleEditarTarea}>
Guardar Cambios
</button>
</form>
</div>
);
};

export default EditarTarea;