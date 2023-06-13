import React from 'react'
import { BiEditAlt } from 'react-icons/Bi'
import { RiDeleteBinFill } from 'react-icons/Ri'
import '../styles/task.css'
import { Check } from './check'

export const Task = ( { ids, completed, nombre ,deleteTodo, changeStatus }) => {
  
  const handlOnclick = (e) => {
    e.preventDefault();
    deleteTodo(ids)
  }
 

  return (
    <div className='todo-container'>
      <Check completed={completed} changeStatus={changeStatus}  ids ={ids}/>
      <p className={`todo-p ${completed && 'completed-p'}`}>{nombre}</p>
      {/* <BiEditAlt className='todo-edit' /> */}
      <RiDeleteBinFill onClick={handlOnclick} className='todo-delete' />
    </div>
  )
}
