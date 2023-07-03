import React from 'react'
import './style.css'
export const EmpityTask = () => {
  return (
    <div className='Container'>
      <div class="card">
        <div class="align">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </div>
        <h1>Bienvenidos </h1>
        <p>
        todoApp es una app dedicada para organizar tu tiempo y tus tareas de cualquier tipo y proposito,  aprovecha tu dia con todoApp.
        </p>
      </div>
      <div className="typewriter">
        <div className="slide"><i></i></div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  )
}
