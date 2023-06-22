import '../src/styles/App.css'
import { Footer } from './components/Footer'
import { Foter } from './components/Foter'
import { Header } from './components/Header'
import { Tasklist } from './components/Tasklist'
import { TodoSech } from './components/todoSech'
import { useState } from 'react'
function App() {
  const localStorageTask = localStorage.getItem('TODOS_V1');

  let parsedTodos ;

  if (!localStorageTask) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos= []
  }else{
     parsedTodos = JSON.parse(localStorageTask)
  }

  // creamos una funcion para actualizar los todos en el localStage
  const saveTodosStorage  = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTasks(newTodos)
  }
  

  const value = 'clear all';
  const [tasks, setTasks] = useState(parsedTodos);
  const [statusTalks, setStatusTalks] = useState(false)

  function addTodo(nombre) {

    const newTodo = {
      id: crypto.randomUUID(),
      nombre: nombre,
      status: statusTalks
    }
    const newTaks = [...tasks];
    newTaks.unshift(newTodo)

    saveTodosStorage(newTaks)
  }

  const deleteTodo = (id) => {
    const temp = tasks.filter((item) => item.id !== id);
    saveTodosStorage(temp)
  }

  const changeStatus = (completed, id) => {

     if (completed) {
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
       item.status =  false
       saveTodosStorage(sechTask)
    }
     else if (!completed){
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
       item.status = true
       saveTodosStorage(sechTask)
   }
  }
  const todoTotal =  tasks.length

  const counter = tasks.filter((todo)=> todo.status === false);
  const counterTotal = counter.length
  return (
    <>
      <Header text='todo app' />
      <TodoSech addTodo={addTodo} />
      <Tasklist list={tasks} deleteTodo = {deleteTodo} changeStatus={changeStatus} />
      <Footer text={value} total = {todoTotal} counter = {counterTotal} />
      <Foter/>

    </>
  )
}

export default App
