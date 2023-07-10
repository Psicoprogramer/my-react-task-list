import { Flotante } from '../components/Flotante'
import { Header } from '../components/Header'
import { Tasklist } from '../components/Tasks/Tasklist'
import { EmpityTask } from '../components/LoardingTask/EmpityTask'
import { ChangeTask } from '../components/LoardingTask/ChangeTask'
import { ErrorTask } from '../components/LoardingTask/ErrorTask'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'
import { Container, Grid, Box } from '@chakra-ui/react'

export const AppUI = () => {
  const { loading, error, todoTotal } = useContext(TaskContext);
    
  return (
    <Container maxW="container.lg">
      <Header text='Todo app' />
      {loading && <ChangeTask />}
      {error && <ErrorTask error={error} />}
      {!loading && todoTotal === 0 && <EmpityTask />}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}>
        <Tasklist />
      </Grid>
      <Flotante />
    </Container>
  )
}
