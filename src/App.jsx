
import './App.css'
import Footer from './Footer'
import Contact from './portfolio/Contact'
import Home from './portfolio/Home'
import Navbar from './portfolio/Navbar'
import Projects from './portfolio/Projects'
import Skill from './portfolio/Skill'
import Services from './Services'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
