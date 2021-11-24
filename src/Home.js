import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

export default function Home() {
  return (
    <div className="App">
      <div className="nav-container">
      <div className="flexgrow">  
          <h1 className="title shadow">Beer Brothers Brews</h1>
          <h3 className="slogan shadow">Handcrafted beer for the people.</h3>
      </div>
      <Link style={{ textDecoration: "none" }} to="/app">
        <h3 className="link shadow">Visit Store</h3>
      </Link>
      </div> 
    </div>
  )
}