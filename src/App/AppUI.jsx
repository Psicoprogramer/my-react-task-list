
import { Footer } from '../components/Footer'
import { Flotante } from '../components/Flotante'
import { Header } from '../components/Header'
import { Tasklist } from '../components/Tasks/Tasklist'
import { TodoSech } from '../components/todoSech'
import { EmpityTask } from '../components/LoardingTask/EmpityTask'
import { ChangeTask } from '../components/LoardingTask/ChangeTask'
import { ErrorTask } from '../components/LoardingTask/ErrorTask'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'

export const AppUI = () => {
    const { loading, error, todoTotal, counterTotal,value} = useContext(TaskContext);
    return (
        <>
         
            <div className='appContainer'>
                <Header text='todo app' />
                <TodoSech />
                {loading && <ChangeTask />}
                {error && <ErrorTask error={error} />}
                {(!loading && todoTotal === 0) && <EmpityTask />}
                <Tasklist />
                <Flotante />
            </div>
            <div className="containerFooter">
                 <Footer text={value} total={todoTotal} counter={counterTotal} />
            </div>
        </>
    )
}
