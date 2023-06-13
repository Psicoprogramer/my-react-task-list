import React, { useState } from 'react'
import { BtnAdd } from './BtnAdd'
import '../styles/todoSeach.css'

export const TodoSech = ({addTodo}) => {
  const [value, setValue] = useState('Ingrese un todo');

  const handleOnChage = (e) => {
    const valueCapture = e.target.value;
    setValue(valueCapture);
  }

  const handleOnClick = () => {
    addTodo(value)
    setValue(' ')
  }
  return (
    <div className='todo-seach_container'>
        <input value ={value} type="text" name="addNewTodo" id="addTodo" placeholder={'Add your new todo'} onChange={handleOnChage} />
        <BtnAdd  handleOnClick={handleOnClick}/>
    </div>
  )
}

