import { Route, Routes } from "react-router-dom"

import { Home, Aboutus, Blog, Contactus } from "./pages"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  )
}
