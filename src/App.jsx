import { useState } from 'react'
import './App.css'
import Header from "./components/header";
import Footer from "./components/Footer";
import Gallery from './components/Gallery';
import About from './components/About';
import CallbackForm from './components/CallbackForm';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';


function App() {

  return (
    <div className='app-container bg-gray-900'>
      <Header/>
      <About/>
      <WhyUs/>
      <Testimonials/>
      {/* <Gallery/> */}
      <OurTeam/>
      <CallbackForm/>
      <Footer/>
    </div>
  )
}

export default App
