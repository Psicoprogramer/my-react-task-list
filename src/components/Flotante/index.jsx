
import { useContext } from 'react'
import './flotante.css'
import { TaskContext } from '../../context/TaskProvider'
export function Flotante () {
const {todoTotal,counterTotal} = useContext(TaskContext)
  return (
    <footer className='footer'>
      <p> You have pending  <span> { counterTotal }</span> talks than <span>  {todoTotal} </span> </p>
    </footer>
  )
}