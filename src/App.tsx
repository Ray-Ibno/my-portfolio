import Navbar from './components/Navbar'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'

import { Toaster } from './components/ui/sonner'
import Education from './sections/Education/Education'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
