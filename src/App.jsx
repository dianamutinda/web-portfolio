import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Appointment from "./pages/Appointment"
import WhatsAppButton from "./components/layout/WhatsAppButton"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <WhatsAppButton/>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App