import React from 'react'
import './header.css'
import { Container,Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import InitialFocus from '../../Modals/InitialFocus'
import { AboutModal } from '../../Modals/AboutModal'

export const Header = ({ text }) => {
 
  return (
    <Container maxW='4xl'>
    <Grid
      w={['100%', '100%', '100%', '100%']}
      templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'] }
      gap="20px"
      alignItems="center"
    >
      <GridItem w='100%' h='20' >
        <h1>🎲  {text}</h1>
      </GridItem>
      <GridItem w='100%' h='auto' marginLeft='30px'>
        <a href="https://www.linkedin.com/in/brayancabrerapsicodevp/" target="_blank">
        <img className='imgs' width='60' height='60' src="/icons8-linkedin-100.png" alt="linkedin" />
        </a>
      </GridItem>
      <GridItem w='100%' h='auto' marginLeft='30px'>
      <InitialFocus /> 
      </GridItem>  
      <GridItem w='100%' h='10' >
        <Breadcrumb id='container-content' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <AboutModal/>
          </BreadcrumbItem>
        </Breadcrumb>
      </GridItem>
    </Grid>
  </Container>
  )
}




