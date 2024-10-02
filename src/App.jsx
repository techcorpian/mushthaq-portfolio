import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './view/home/Home.jsx'
import Menu from './view/shared/UIElements/Menu.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="Clients" element={<Users />} /> */}
      </Routes>
    </>
  )
}

export default App