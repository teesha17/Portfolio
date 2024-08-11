import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import NavBar from './navbar/Navbar'
import Resume from './resume/Resume'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}
export default App
