import React, { useContext } from 'react'
import { SiAddthis } from 'react-icons/si';
import './btns.css'
import { TaskContext } from '../../context/TaskProvider';

export const BtnAdd = () => {
  const { addTodo } = useContext(TaskContext);
  const handleOnClick = () => {
    addTodo(value)
    setValue('')
  }
  return (
    <>
      <button type='submit' onClick={handleOnClick} className='btn-add'>
        <SiAddthis />
      </button>
    </>
  )
}
