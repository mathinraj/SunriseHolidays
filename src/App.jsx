import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className='app-container'>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
