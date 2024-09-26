import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

// Components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

// Pages

// Navbar Menu
import Reservation from './pages/Reservation'
import Employee from "./pages/Employee"
import Tables from "./pages/Tables"

// Sidebar Menu
import Dashboard from './pages/Dashboard'
import OrderList from "./pages/Order List"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Accounting from "./pages/Accounting"
import Menu from "./pages/Menu"
import History from "./pages/History"
import Settings from "./pages/Settings"
import HelpCenter from "./pages/Help Center"
import OpenProfile from "./pages/Open Profile"


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/order-list' element={<OrderList />} />
          <Route path='/accounting' element={<Accounting />} />
          <Route path='/history' element={<History />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/profile' element={<OpenProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
