import Navbar from './components/Navbar'
import About from './sections/About/About'
import Footer from './sections/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
