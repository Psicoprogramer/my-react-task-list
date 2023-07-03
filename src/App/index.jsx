import './App.css'
import { AppUI } from './AppUI'
import { TaskProvider } from '../context/TaskProvider'
function App() {


  return (

    <>
    <TaskProvider>
        <AppUI />
    </TaskProvider>
    </>

  )
}

export default App
