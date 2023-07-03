import React from 'react'
import './header.css'

export const Header = ({text}) => {
  return (
    <header className="header-container">
        <div className="title">
            <h1>{text}</h1>
        </div>
    </header>
  )
}




