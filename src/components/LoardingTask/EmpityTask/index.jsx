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
        <h1>Welcome Hover me </h1>
        <p>
       
TodoApp is a dedicated app to help you organize your time and tasks of any type and purpose. Seize your day with TodoApp and make the most out of it.
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
