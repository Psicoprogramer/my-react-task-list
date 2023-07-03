import React from 'react'
import { RiDeleteBinFill } from 'react-icons/Ri'
import './task.css'
import { Check } from '../Checks/Check'

export const Task = ({ ids, completed, nombre, deleteTodo, changeStatus }) => {

  const handlOnclick = (e) => {
    e.preventDefault();
    deleteTodo(ids)
  }


  return (
    <div className='todo-container'>
      <Check completed={completed} changeStatus={changeStatus} ids={ids} />
      <p className={`todo-p ${completed && 'completed-p'}`}>{nombre}</p>
      {/* <BiEditAlt className='todo-edit' /> */}
      <RiDeleteBinFill onClick={handlOnclick} className='todo-delete' />
    </div>
  )
}
