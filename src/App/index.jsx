import './App.css'
import {AppUI} from '../App/AppUI.jsx'
import { TaskProvider } from '../context/TaskProvider'
import { ChakraProvider } from '@chakra-ui/react'
function App() {


  return (
    <>
    <ChakraProvider>
      <TaskProvider>
        <AppUI />
      </TaskProvider>
    </ChakraProvider>
    </>

  )
}

export default App
