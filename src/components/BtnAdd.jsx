import React from 'react'
import { SiAddthis } from 'react-icons/si';

export const BtnAdd = ({handleOnClick}) => {
  return (
    <>
   <button onClick={handleOnClick} className='btn-add'><SiAddthis/></button>
   </>
  )
}
