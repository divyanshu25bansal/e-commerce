import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App