import React from 'react'
import {BiCheckboxChecked} from 'react-icons/Bi'
export const NotCompledTodo = () => {
  return (
    <>
    <span>
    {
        <BiCheckboxChecked className='todo-completed'/>   
    }
    </span>
    </>
  )
}
