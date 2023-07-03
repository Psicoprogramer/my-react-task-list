import React from 'react'
import BtnClear from '../botones/BtnClear'
import './footer.css'

export const Footer = ({total,text,counter}) => {
  return (
    <>
    <footer className='footer-container'>
        <p>You have pending <span>{counter}</span> talks than <span>{total}</span>    </p>
        <BtnClear text = {text}/>
    </footer>
    </>
  )
}
