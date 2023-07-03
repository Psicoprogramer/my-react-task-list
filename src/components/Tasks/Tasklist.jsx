
import { useContext } from 'react';
import { Task } from './Task';
import { TaskContext } from '../../context/TaskProvider';


export const Tasklist = () => {
  const { tasks, deleteTodo, changeStatus } = useContext(TaskContext);
  return (
    <>
      {tasks.map((todo) => (
        <Task key={todo.id} nombre={todo.nombre} completed={todo.status} deleteTodo={deleteTodo} ids={todo.id} changeStatus={changeStatus} />
      ))}
    </>
  )
}
