import React, { useContext, useState } from 'react'
import { BtnAdd } from '../botones/BtnAdd'
import './todoSeach.css'
import { TaskContext } from '../../context/TaskProvider'

  export const TodoSech = () => {
  const { addTodo } = useContext(TaskContext);
  const [value, setValue] = useState('Ingrese un todo');

  const handleOnChage = (e) => {
    const valueCapture = e.target.value;
    setValue(valueCapture);
  }

  const handleOnClick = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <div className='todo-seach_container'>
      <input value={value} type="text" name="addNewTodo" id="addTodo" placeholder={'Add your new todo'} onChange={handleOnChage} />
      <BtnAdd className='btn-add'  handleOnClick={handleOnClick} />
    </div>
  )
}

