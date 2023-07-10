import React, { useContext } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,useDisclosure,
    AlertDialogCloseButton,
    Button,
    useToast,
  } from '@chakra-ui/react'
import { TaskContext } from '../../context/TaskProvider'
  
const ButtonDelete = ({ ids, title}) => {

  const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure
    ()
    const cancelRef = React.useRef()
    const { deleteTodo} = useContext(TaskContext);

    const handlOnclick = (e) => {
      e.preventDefault();
      deleteTodo(ids);
      toast({
        title: 'Task Deleted.',
        description: `We've Deleted your task with title ${title}`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      console.log(title)
    };
  
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
            delete
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent background= 'linear-gradient(120deg, #efefbb, #d4d3dd)' fontFamily='roboto'>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={handlOnclick} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default ButtonDelete
