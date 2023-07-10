import React from 'react'
import 'formularios.css'
export const Formulario = () => {
    return (
        <form>
            <label> Escriba su  tarea a realizar </label>
            <textarea placeholder='Escriba aqui su tarea' />
            <div>
                <button className='formularioTask--enviar' type="submit"></button>
                <button className='formularioTask--cancel' type="submit"></button>
            </div>
        </form>
    )
}
