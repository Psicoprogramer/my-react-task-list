
import { useLocalStorage } from '../Hooks/useLocalStorage';
import React from 'react';


const TaskContext = React.createContext();

function TaskProvider  ({ children }) {

  const value = 'clear all';
  const {
    item: tasks,
    saveItemStorage,
    error,
    loading
  } = useLocalStorage('TODOS_V1', []);

  const [statusTalks, setStatusTalks] = React.useState(false)

  function addTodo(nombre) {

    const newTodo = {
      id: crypto.randomUUID(),
      nombre: nombre,
      status: statusTalks
    }
    const newTaks = [...tasks];
    newTaks.unshift(newTodo)

    saveItemStorage(newTaks)
  }

  const deleteTodo = (id) => {
    const temp = tasks.filter((item) => item.id !== id);
    saveItemStorage(temp)
  }

  const changeStatus = (completed, id) => {

    if (completed) {
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
      item.status = false
      saveItemStorage(sechTask)
    }
    else if (!completed) {
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
      item.status = true
      saveItemStorage(sechTask)
    }
  }
  const todoTotal = tasks.length
  const counter = tasks.filter((todo) => todo.status === false);
  const counterTotal = counter.length
  return (

    <TaskContext.Provider
      value={{
        addTodo,
        deleteTodo,
        changeStatus,
        todoTotal, counterTotal,
        value, tasks, loading, error
      }}>
      {children}
    </TaskContext.Provider>

  )
}
export { TaskContext, TaskProvider }
