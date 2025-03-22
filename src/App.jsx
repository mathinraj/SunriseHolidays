import './App.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import Gallery from './components/Gallery';
import CallbackForm from './components/CallbackForm';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import Services from './components/Services';


function App() {

  return (
    <div className='app-container bg-gray-900'>
      <Header/>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
      <Gallery/>
      <OurTeam/>
      <CallbackForm/>
      <Footer/>
    </div>
  )
}

export default App
