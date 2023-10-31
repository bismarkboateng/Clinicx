import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Home, Aboutus, Blog, Contactus } from "./pages"

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  )
}