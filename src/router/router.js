import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Previous from '../pages/previous/Previous'
import PreviousDetail from '../pages/previousDetail/PreviousDetail'

const router = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/previous' element={<Previous/>} />
          <Route path='/previous/:id' element={<PreviousDetail/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default router