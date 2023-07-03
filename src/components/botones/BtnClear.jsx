import React from 'react'
import './btns.css'
function BtnClear(promps) {
  return (
    <>
    <button className='btn-clear' >
        {promps.text}
    </button>
    </>
  )
}

export default BtnClear
