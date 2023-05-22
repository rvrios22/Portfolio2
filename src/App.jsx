import './App.css'

import Landing from './components/landing/landing';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/navbar';

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Contact />
    </>
  )
}

export default App
