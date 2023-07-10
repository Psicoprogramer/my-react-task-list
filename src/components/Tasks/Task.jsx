
import './task.css'

import { TaskContext } from '../../context/TaskProvider'
import { BiEdit, BiSend } from 'react-icons/Bi'
import { useState, useContext } from 'react';
import { Button, ButtonGroup, IconButton, Input, Flex ,Textarea,Text,Switch} from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter, Stack,Heading} from '@chakra-ui/react';
import ButtonDelete from '../botones/ButtonDelete.jsx';


export const Task = ({ ids, completed,title, nombre, }) => {
  const [isDisable, setDisable] = useState(false);
  const { changeTask, changeStatus } = useContext(TaskContext);

  const onChangeInput = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    changeTask(ids, valor);
  };

  const handleCheckOnChange = () => {
    changeStatus(completed, ids)
    setDisable(!isDisable)
  }
  return (
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    id={ completed ?'todo-completed' : 'todo-container' }
  >
    <Stack>
      <CardBody>
        <Heading  id = 'title-heading'size='md'>{completed && <CheckIcon color="#5bae74" />}  {title}
        </Heading>
        <Textarea
          id ='text-area'
          value={nombre}
          onChange={onChangeInput}
          placeholder='Here is a sample placeholder'
          size='sm'
          isDisabled={isDisable}
        />
      </CardBody>
      <CardFooter >
        <div className= 'container-card_footer'>
        <Switch isChecked={completed} size='lg' onChange={handleCheckOnChange} />
        <ButtonDelete ids={ids} title={title}/>
        </div>
        </CardFooter>
    </Stack>
  </Card>
  )
  }
