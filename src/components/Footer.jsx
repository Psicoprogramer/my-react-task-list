import React from 'react'
import BtnClear from './BtnClear'
import '../styles/footer.css'

export const Footer = ({total,text,counter}) => {
  return (
    <>
    <footer className='footer-container'>
        <p>You have pending {counter} talks than {total}   </p>
        <BtnClear text = {text}/>
    </footer>
    </>
  )
}
