import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App