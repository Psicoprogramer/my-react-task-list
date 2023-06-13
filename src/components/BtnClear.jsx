import React from 'react'
import '../styles/btns.css'
function BtnClear(promps) {
  return (
    <>
    <bottom className='btn-clear' >
        {promps.text}
    </bottom>
    </>
  )
}

export default BtnClear
