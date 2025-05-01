import react from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css"
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';


const App = ()=>{

    return(
      <Router>

        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <Contact />
        <Footer />
        <Toaster />

      </Router>
    )
}

export default App;