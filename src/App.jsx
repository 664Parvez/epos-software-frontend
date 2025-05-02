import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

// Components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from './components/Footer'

// Pages

// Navbar Menu
import Reservation from './pages/Reservation'
import Employee from "./pages/Employee"
import Tables from "./pages/Tables"

// Sidebar Menu
import Dashboard from './pages/Dashboard'
import OrderList from "./pages/Order List"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import AdminMenu from "./pages/admin-menu"
import History from "./pages/History"
import Settings from "./pages/Settings"
import HelpCenter from "./pages/Help Center"
import OpenProfile from "./pages/Open Profile"
import KitchenMenu from './pages/Kitchen Menu'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/admin-menu' element={<AdminMenu />} />
          <Route path='/' element={<Login />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/order-list' element={<OrderList />} />
          <Route path='/kitchen-menu' element={<KitchenMenu />} />
          <Route path='/history' element={<History />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/profile' element={<OpenProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
