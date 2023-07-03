import React from 'react'
import { SiAddthis } from 'react-icons/si';
import './btns.css'
export const BtnAdd = ({ handleOnClick }) => {
  return (
    <>
      <button type='submit' onClick={handleOnClick} className='btn-add'>
        <SiAddthis />
      </button>
    </>
  )
}
