import React from 'react'
import { CompletedTodo } from './CompletedTodo'
import { NotCompledTodo } from './notCompledTodo'

export const Check = ({ completed, changeStatus, ids }) => {

  const handleCheckOnClick = () => {
    changeStatus(completed, ids)
  }

  return (
    <>
      <span onClick={handleCheckOnClick}>
        {
          completed ? <NotCompledTodo /> : <CompletedTodo />

        }
      </span>
    </>
  )
}
