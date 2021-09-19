import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

export default function Home() {
  return (
    <div className="App"> 
      <h1>Welcome of my beer website</h1>
      <Link to="/app">
        <p>Go to app</p>
      </Link>
    </div>
  )
}