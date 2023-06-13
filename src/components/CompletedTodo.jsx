import React from 'react'
import {BiCheckbox} from 'react-icons/Bi'

import '../styles/task.css'
export const CompletedTodo = () => {
   
  return (
    <>
    <span>
    {
        <BiCheckbox className='todo-completed'/>   
    }
    </span>
    </>
  )
}
