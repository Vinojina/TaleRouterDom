import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom'




function App() {
  return(
    <>
  <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/faq" element={<Faq />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    );
}

export default App
