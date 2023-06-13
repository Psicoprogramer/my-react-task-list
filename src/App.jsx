import '../src/styles/App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Tasklist } from './components/Tasklist'
import { TodoSech } from './components/todoSech'
import { listTask } from './dataBase'
import { useState } from 'react'
function App() {
  const value = 'clear all';
  const [tasks, setTasks] = useState([listTask]);

  const [statusTalks, setStatusTalks] = useState(false)

  function addTodo(nombre) {

    const newTodo = {
      id: crypto.randomUUID(),
      nombre: nombre,
      status: statusTalks
    }
    const newTaks = [...tasks];
    newTaks.unshift(newTodo)
    setTasks(newTaks);
  }

  const deleteTodo = (id) => {
    const temp = tasks.filter((item) => item.id !== id);
    setTasks(temp);
  }

  const changeStatus = (completed, id) => {

     if (completed) {
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
       item.status =  false
      setTasks(sechTask)
    }
     else if (!completed){
      const sechTask = [...tasks];
      const item = sechTask.find((item) => item.id === id)
       item.status = true
      setTasks(sechTask)
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

    </>
  )
}

export default App
