import React from 'react'

export const ErrorTask = ({error}) => {
  return (
    <div>
       <p>Cuidado existe un error a cargar tus todos, estas manipulando el localStorge o tu error es  {error} ? </p>
    </div>
  )
}
