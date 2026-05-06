import CopyEmail from './components/CopyEmail'
import Intro from './components/Intro'
import Map from './components/Map'
import Orbit from './components/Orbit'
import TerminalAnimation from './components/TerminalAnimation'

const About = () => {
  return (
    <section id="about-section" className="c-space section-spacing scroll-mt-20">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <Intro />
        <TerminalAnimation />
        <Map />
        <CopyEmail />
        <Orbit />
      </div>
    </section>
  )
}
export default About
