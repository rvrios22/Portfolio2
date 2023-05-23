import './App.css'

import Landing from './components/landing/landing';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/navbar';
import TechStack from './components/tech-stack/TechStack';

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <TechStack />
      <Projects />
      <Contact />
    </>
  )
}

export default App
