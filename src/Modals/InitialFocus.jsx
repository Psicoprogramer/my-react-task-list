import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import React, { useContext, useState } from "react"
import { TaskContext } from "../context/TaskProvider"
export default function InitialFocus() {

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const initialRef = React.useRef(null)
    const { addTodo } = useContext(TaskContext);


  const handeleOnchangeTitle = (e)=> 
     { 
      const captureTitle = e.target.value;
      setTitle(captureTitle)
    }
    const handleOnChange = (e) => {
      const valueCapture = e.target.value;
      setSubject(valueCapture)
    }
    const handelOnClick = ()=>{
      addTodo(title,subject);
      setTitle('')
      setSubject('')
      onClose(false);
      toast({
        title: 'Task created.',
        description: "We've created your task.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
    return (
      <>
        <Button textAlign='center'  fontFamily={'roboto'} background='orange.400' onClick={onOpen}>Create Task</Button>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent background = 'linear-gradient(120deg, #efefbb , #d4d3dd)' fontFamily={'roboto'}>
            <ModalHeader>Create your task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={handeleOnchangeTitle} ref={initialRef} placeholder='Title example : go to the park' border = '2px solid var(--chakra-colors-orange-400)' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea value={subject}  placeholder='subject' onChange={handleOnChange} border = '2px solid var(--chakra-colors-orange-400)'/>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button color='black' colorScheme= 'orange.100'   background='orange.400' mr={3} onClick={handelOnClick}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }