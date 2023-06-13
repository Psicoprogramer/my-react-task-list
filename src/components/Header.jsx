import React from 'react'
import '../styles/header.css'

export const Header = (prom) => {
  return (
    <header className="header-container">
        <div className="title">
            <h1>{prom.text}</h1>
        </div>
    </header>
  )
}




