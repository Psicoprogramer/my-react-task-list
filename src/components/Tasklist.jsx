
import { Task } from './Task';

export const Tasklist = ({list ,deleteTodo, changeStatus}) => {
   
  return (
    <>
    {list.map((todo)=>(
        <Task key={todo.id} nombre = {todo.nombre} completed = {todo.status} deleteTodo={deleteTodo} ids = {todo.id}  changeStatus = {changeStatus}/>
    ))}   
    </>
  )
}
