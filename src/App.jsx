import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from './AppLayout'
import Home from "./pages/home/Home"
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blogs' element={<Blogs />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
